// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-black text-white text-center p-4 mt-6">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    );
  }