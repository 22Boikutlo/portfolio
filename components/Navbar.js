import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light fixed-top">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item m-1">
          <a className="btn btn-light btn-outline-primary" href="#aboutme">About Me</a>
        </li>
        <li className="nav-item m-1">
          <a className="btn btn-light btn-outline-primary" href="#education">Education</a>
        </li>
        <li className="nav-item m-1">
          <a className="btn btn-light btn-outline-primary" href="#skills">Skills</a>
        </li>
        <li className="nav-item m-1">
          <a className="btn btn-light btn-outline-primary" href="#projects">Projects</a>
        </li>
        <li className="nav-item m-1">
          <a className="btn btn-light btn-outline-primary" href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
