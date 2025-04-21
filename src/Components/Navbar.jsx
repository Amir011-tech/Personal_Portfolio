function Navbar() {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className=" container py-2 flex justify center justify-between items-center">
        <div className="text-2xl font-bold font-lobster">Amir</div>
        <div>
          <ul className="flex gap-8 justify-center items-center">
            <li className=" hover:text-gray-400">
              <a href="#home">Home</a>
            </li>
            <li className=" hover:text-gray-400">
              <a href="#about">About Me</a>
            </li>
            <li className=" hover:text-gray-400">
              <a href="#services">Services</a>
            </li>
            <li className=" hover:text-gray-400">
              <a href="#projects">Projects</a>
            </li>
            <li className=" hover:text-gray-400">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <button className=" mt-2 bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Connect me
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
