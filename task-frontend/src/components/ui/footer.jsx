export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-muted-foreground border-t py-4 mt-10">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2025 Linda Riziki. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <button className="hover:underline">About</button>
          <button className="hover:underline">Contact</button>
          <button className="hover:underline">GitHub</button>
        </div>
      </div>
    </footer>
  );
}
