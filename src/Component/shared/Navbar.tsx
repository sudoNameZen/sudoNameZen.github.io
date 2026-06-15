

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50  backdrop-blur ">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <h1 className="text-2xl font-bold ">
            SudoZen Logs
          </h1>

        </div>

        <nav className="hidden md:flex gap-8 ">

          <a href="">Home</a>

          <a href="/blogs">Blogs</a>

          <a href="/projects">Projects</a>

          <a href="/about">About</a>

          <a href="/contact">Contact</a>

        </nav>

      </div>
    </header>
  );
};

export default Navbar;