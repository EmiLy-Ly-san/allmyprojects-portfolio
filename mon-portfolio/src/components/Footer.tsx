export default function Footer() {
  return (
    <footer className="border-t p-4 text-center text-sm text-muted-foreground">
      &copy; {new Date().getFullYear()} Emilie De Duyver. Tous droits réservés.
    </footer>
  );
}