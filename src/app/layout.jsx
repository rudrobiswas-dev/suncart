import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SunCart | Summer Essentials Store",
  description: "A Next.js eCommerce SPA for summer essentials.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="suncart">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
