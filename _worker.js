/**
 * Cloudflare Workers Sites - Static Asset Handler for dinuge.dk
 * Serves static files from the KV namespace managed by Wrangler,
 * with correct MIME types, cache headers, and 404 fallback.
 */

import { getAssetFromKV, NotFoundError, MethodNotAllowedError } from "@cloudflare/kv-asset-handler";
import manifestJSON from "__STATIC_CONTENT_MANIFEST";

const assetManifest = JSON.parse(manifestJSON);

export default {
  async fetch(request, env, ctx) {
    try {
      const response = await getAssetFromKV(
        { request, waitUntil: ctx.waitUntil.bind(ctx) },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: assetManifest,
          cacheControl: {
            browserTTL: 60 * 60 * 24,       // 1 day client-side cache
            edgeTTL: 60 * 60 * 24 * 7,      // 7 days edge cache
            bypassCache: false,
          },
        }
      );

      // Clone response to add security/cache headers
      const headers = new Headers(response.headers);
      headers.set("X-Content-Type-Options", "nosniff");
      headers.set("X-Frame-Options", "DENY");
      headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

      return new Response(response.body, {
        status: response.status,
        headers,
      });
    } catch (e) {
      if (e instanceof NotFoundError) {
        return new Response("404 - Page Not Found", { status: 404 });
      }
      if (e instanceof MethodNotAllowedError) {
        return new Response("405 - Method Not Allowed", { status: 405 });
      }
      return new Response("500 - Internal Error", { status: 500 });
    }
  },
};

