# Anika Portfolio

A responsive Next.js portfolio that preserves the dark, lime and violet design, with a highlighted **Let's Talk** navigation CTA, project filters, IP-based approximate location, local time, live weather, and a time-based accent palette.

## Stack
- Next.js App Router and React
- CSS
- IP geolocation: ipwho.is (approximate; VPNs/proxies may affect location)
- Weather data: Open-Meteo

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm start
```

## Links
- **GitHub source:** https://github.com/samscaleup777/anika-portfolio
- **Git-connected deployment (auto deploys from `main`):** https://anika-portfolio-github-hk777.vercel.app
- **Original live URL (kept unchanged):** https://anika-portfolio-hk777.vercel.app

Weather refreshes about every 15 minutes while the page is open, and local time/theme update automatically. External APIs or hosting may occasionally be unavailable; the page shows a fallback message and cannot promise 100% uptime.
