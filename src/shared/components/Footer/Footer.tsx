export default function Footer() {
  return (
    <footer className="footer-nav mt-auto w-full bg-(--bg-color) py-8 text-center text-(--nav-text) dark:bg-transparent dark:text-gray-400">
      &copy; {new Date().getFullYear()} Lucas Rossoni. All rights reserved.
    </footer>
  )
}
