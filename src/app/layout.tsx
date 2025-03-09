// app/layout.tsx
import "@/app/styles/globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white dark:bg-black dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="min-h-screen container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
