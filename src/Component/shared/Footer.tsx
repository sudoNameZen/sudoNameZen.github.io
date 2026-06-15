const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 mt-20">

      <div className="max-w-7xl mx-auto py-8 px-6">

        <div className="flex flex-col md:flex-row justify-between items-center">

          <div>

            <h2 className="font-bold text-xl">

              SudoZen Logs

            </h2>

            <p className="text-gray-400">

              Learn. Build. Share.

            </p>

          </div>

          <div className="flex gap-8 mt-5 md:mt-0">

            <a href="">Home</a>

            <a href="/blogs">Blogs</a>

            <a href="/projects">Projects</a>

            <a href="/about">About</a>

          </div>

        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">

          © 2026 Nitin Dewangan. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;