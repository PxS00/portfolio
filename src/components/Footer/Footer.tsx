export default function Footer() {
  return (
    <footer className="nav-text footer-nav mt-auto w-full bg-(--nav-bg) py-8 text-center text-(--nav-text) dark:bg-transparent dark:text-gray-400">
      &copy; {new Date().getFullYear()} Lucas Rossoni. All rights reserved.
    </footer>
  )
}
