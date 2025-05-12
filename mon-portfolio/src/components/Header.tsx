import Link from "next/link";

function Header() {
  return (
    <header className="border-b p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">All my projects</h1>
        <ul className="flex space-x-4 text-sm text-muted-foreground">
          <li><Link href="/">GitHub</Link></li>
          <li><Link href="/projects">Linkedin</Link></li>
          <li><Link href="/about">CodePen</Link></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header