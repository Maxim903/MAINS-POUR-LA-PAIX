# Mains pour la Paix – site web

Site statique : **Astro 5 + Tailwind 4 + Decap CMS**, hébergé sur Cloudflare Pages (ou Netlify).

## Démarrer
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # génère dist/
```

## Modifier le contenu
- **Sans code** : `https://votre-domaine/admin` (Decap CMS, voir « Activer le CMS »).
- **Avec le code** : éditer les fichiers Markdown dans `src/content/` et `src/data/site.json`.

| Dossier | Contenu |
|---|---|
| `src/content/axes/` | Les 3 axes d'action |
| `src/content/publications/` | Rapports, fiches, communiqués (`draft: true` = invisible) |
| `src/content/actualites/` | Actualités |
| `src/data/site.json` | RNA, adresse, emails, liens de don et d'adhésion |
| `src/i18n/` | Textes FR / EN de l'accueil, du menu et du pied de page |
| `public/documents/` | PDF des rapports |

## Mettre en ligne (Cloudflare Pages)
1. Pousser le repo sur GitHub.
2. Cloudflare → Pages → Connect to Git → choisir le repo.
3. Build command : `npm run build` · Output directory : `dist`.
4. Ajouter le domaine personnalisé, puis remplacer `site` dans `astro.config.mjs` et dans `public/robots.txt`.

## Activer le CMS
Decap avec le backend GitHub demande un petit proxy OAuth (gratuit, par exemple sur Cloudflare Workers).
1. Créer une GitHub OAuth App, puis déployer un proxy OAuth pour Decap.
2. Renseigner `repo` et `base_url` dans `public/admin/config.yml`.
Alternative plus simple : héberger sur Netlify et utiliser le backend `git-gateway`.

## Formulaire de contact
Créer un formulaire sur Formspree, puis copier `.env.example` en `.env` et renseigner `PUBLIC_FORM_ENDPOINT` (à définir aussi dans Cloudflare Pages → Settings → Variables).

## À compléter avant la mise en ligne
- [ ] Nom du ou de la directeur·rice de publication (`mentions-legales.astro`)
- [ ] Textes marqués « À compléter » (mission, axes, équipe)
- [ ] `securityEmail` (canal chiffré) dans `site.json`
- [ ] Liens HelloAsso (`donateUrl`, `joinUrl`) ; ne parler de déduction fiscale qu'après confirmation de l'administration
- [ ] Logo, `public/og-image.jpg` (1200×630)
- [ ] Pages anglaises : seul l'accueil existe (`src/pages/en/`), dupliquer les autres pages au besoin
- [ ] Activer 2FA sur GitHub, Cloudflare et le registrar

## Structure
```
src/components/   Header, Footer, Hero, AxesAction, Publications, CallToAction, ContactForm
src/layouts/      BaseLayout (SEO, polices, accessibilité)
src/pages/        une page = une URL (en/ = version anglaise)
src/styles/       global.css (palette et polices)
```
Palette : nuit #12263A · olive #3F7D58 · ambre #E0A526 · brume #EEF2F5 · papier #FBFCFD.
Polices auto-hébergées (Newsreader, Public Sans) : aucun appel à Google Fonts, donc conforme RGPD.
