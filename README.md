# DinUge.dk

> Danmarks hurtigste og mest overskuelige ugenummer-portal. Udviklet som en moderne, reklamefri konkurrent til ugenr.dk.

## 🚀 Funktioner & Arkitektur
- **Lynhurtigt Hero-Display**: Kæmpe, tydelig visning af ugens nummer beregnet med matematisk ISO 8601 præcision.
- **Ugens 7 Dage**: Automatisk dagsopdeling (mandag-søndag) med tydelig markering af "I DAG".
- **Interaktiv Ugeberegner**:
  - Konvertér enhver dato til ugenummer.
  - Konvertér ethvert ugenummer til datospænd.
- **Danske Helligdage & Skoleferier 2026**: Komplet oversigt med ugenumre for påske, pinse, sommerferie, efterårsferie (uge 42) og jul.
- **Mørkt & Lyst Tema (Dark Mode)**: Automatisk detektion med manuel knap og huskefunktion.
- **100/100 Core Web Vitals**: Ingen tunge frameworks, nul eksterne reklamenetværk, lynhurtig indlæsning.
- **SEO & Struktureret Data**: Google WebApplication og FAQPage Schema.org JSON-LD microdata for maksimale søgeresultater.

## 📦 Deployment
- **one.com hosting**: Deploy direkte via SFTP (`ultron deploy dinuge-dk --target onecom`).
- **GitHub Actions CI/CD**: Workflow er prekonfigureret i `.github/workflows/deploy.yml`.
