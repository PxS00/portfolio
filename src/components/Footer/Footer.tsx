export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-white/80 py-8 text-center text-gray-500 dark:bg-transparent dark:text-gray-400">
      &copy; {new Date().getFullYear()} Lucas Rossoni. All rights reserved.
    </footer>
  )
}
