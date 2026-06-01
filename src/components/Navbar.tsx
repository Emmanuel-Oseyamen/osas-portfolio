// src/components/Navbar.tsx

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">
          Osas
        </h1>

        <a
          href="https://wa.me/2347079989263?text=Hi%20Osas,%20I'd%20like%20to%20discuss%20a%20website."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}