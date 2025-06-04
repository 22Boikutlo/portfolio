import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Button } from '@mui/material';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <nav className="navbar navbar-expand-md bg-light navbar-light fixed-top shadow-sm">
        <div className="container-fluid">
          <div className="topNav d-flex justify-content-between w-100">
            <div className={`myLinks ${menuOpen ? 'd-block' : 'd-none'} d-md-flex`}>
              <a className="btn btn-light btn-outline-primary m-1" href="#aboutme">About Me</a>
              <a className="btn btn-light btn-outline-primary m-1" href="#education">Education</a>
              <a className="btn btn-light btn-outline-primary m-1" href="#skills">Skills</a>
              <a className="btn btn-light btn-outline-primary m-1" href="#projects">Projects</a>
              <a className="btn btn-light btn-outline-primary m-1" href="#contact">Contact</a>
            </div>
            <div>
              
              <Link href="/Signin">
               <Button className="btn btn-light btn-outline-primary m-2" variant="contained" color="primary"
                >Sign In</Button>
              </Link>
             
              
              <Link href="/Signup">
                <Button className="btn btn-light btn-outline-primary m-2" variant="contained" color="primary"
                >Sign Up</Button>
              </Link>
              
            </div>

            <button
              onClick={toggleMenu}
              className="menu-button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="navbarMenu"
            >
              <i className="fa fa-bars"></i>
          </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
