import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050505cc]">{children}</body>
    </html>
  );
}
