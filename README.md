# Anika Portfolio

A responsive Next.js portfolio with the original dark, lime and violet visual direction, a highlighted **Let's Talk** navigation CTA, project filters, a live local-time clock, IP-based approximate location, live weather, and visitor-time theme changes.

## Stack
- Next.js App Router
- React
- CSS
- IP geolocation: ipwho.is (approximate location; VPN/proxy can affect results)
- Weather: Open-Meteo (no API key required for this client-side request)

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm start
```

## Live deployment
- Portfolio: https://anika-portfolio-hk777.vercel.app
- Repository: https://github.com/samscaleup777/anika-portfolio

The clock and theme update locally; weather is refreshed about every 15 minutes while the page is open. Location/weather services may occasionally be unavailable, in which case a fallback message is shown. A hosted website cannot guarantee 100% uptime across external APIs and hosting providers.
