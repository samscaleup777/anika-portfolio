import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://anika-portfolio-lyart.vercel.app"),
  title: "Annika | Frontend Developer",
  description: "Thoughtful interfaces. Modern web experiences with JavaScript, React, Next.js and Tailwind CSS.",
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
      <body>{children}</body>
    </html>
  );
}
