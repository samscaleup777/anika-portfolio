import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://anika-portfolio-lyart.vercel.app"),
  title: "Annika | Frontend Developer",
  description: "Annika is a frontend developer building responsive web experiences with JavaScript, React, Next.js, Tailwind CSS, Figma and Motion.",
  icons: {
    icon: [{ url: "/as-mark-31b3d8.webp", type: "image/webp" }],
    shortcut: [{ url: "/as-mark-31b3d8.webp", type: "image/webp" }],
    apple: [{ url: "/as-mark-31b3d8.webp", type: "image/webp" }]
  },
  openGraph: {
    title: "Annika | Frontend Developer",
    description: "Thoughtful interfaces. Modern web experiences.",
    type: "website",
    images: [{ url: "/as-logo-31b3d8.webp", width: 240, height: 240, alt: "AS monogram logo on a charcoal background" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Annika | Frontend Developer",
    description: "Thoughtful interfaces. Modern web experiences.",
    images: ["/as-logo-31b3d8.webp"]
  },
  other: { "theme-color": "#101319" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="reload-scroll-top" strategy="beforeInteractive">{\`(() => {
          try {
            const navigation = window.performance?.getEntriesByType?.("navigation")?.[0];
            if (navigation?.type !== "reload") return;
            if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
            // A saved #section fragment would otherwise pull the page back down after refresh.
            if (window.location.hash) {
              window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search);
            }
            const scrollTop = () => window.scrollTo(0, 0);
            scrollTop();
            window.addEventListener("pageshow", scrollTop, { once: true });
            window.addEventListener("load", () => {
              scrollTop();
              window.requestAnimationFrame(scrollTop);
              window.setTimeout(scrollTop, 80);
            }, { once: true });
            window.requestAnimationFrame(() => {
              scrollTop();
              window.requestAnimationFrame(scrollTop);
            });
          } catch (error) {}
        })();\`}</Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head><body>{children}</body>
    </html>
  );
}
