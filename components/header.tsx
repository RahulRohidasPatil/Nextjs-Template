import { ModeToggle } from "./mode-toggle"

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between border-b bg-background p-2">
      <h1 className="text-2xl">Next.js Template</h1>
      <ModeToggle />
    </header>
  )
}
