export function Footer() {
  return (
    <footer className="py-8 md:py-8 flex flex-col md:flex-row justify-between items-center text-sm px-6 sm:px-12 md:px-20 gap-6 md:gap-0 border-t border-gray-100 dark:border-gray-800 text-gray-500 dark:text-gray-400 transition-colors">
      <div className="text-center md:text-left">
        &copy; {new Date().getFullYear()} Akash Dholiya. All rights reserved.
      </div>
      <div className="flex gap-8">
        <a
          href="mailto:akashdholiya5570@gmail.com"
          className="transition-colors uppercase tracking-widest text-xs font-bold hover:text-black dark:hover:text-white"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
