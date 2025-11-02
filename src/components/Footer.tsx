// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white mt-10">
      <div className="container mx-auto text-center p-4">
        &copy; {new Date().getFullYear()} Poetica. All rights reserved.
      </div>
    </footer>
  );
}
