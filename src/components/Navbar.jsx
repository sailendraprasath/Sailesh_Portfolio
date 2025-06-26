import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className=" mb-20 flex items-center justify-end py-2">
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/n-sailendra-prasath">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/sailendraprasath">
            <FaGithub size={30} />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
