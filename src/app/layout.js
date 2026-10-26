import "./globals.css";

export const metadata = {
  title: "Anika — Frontend Developer",
  description: "Thoughtful interfaces. Modern web experiences with JavaScript, React, Next.js and Tailwind CSS.",
  openGraph: {
    title: "Anika — Frontend Developer",
    description: "Thoughtful interfaces. Modern web experiences.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
