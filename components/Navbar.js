import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Button, ButtonBase } from '@mui/material';

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

      <nav className="navbar navbar-expand-md bg-light navbar-light shadow-sm">
        <div className="container-fluid">
          <div className="topNav d-flex justify-content-between w-100">
            {/*<div className={`myLinks ${menuOpen ? 'd-block' : 'd-none'} d-md-flex`} id='navnav'>*/}
              <Button className="btn btn-light btn-outline-primary m-1" href="#aboutme">About Me</Button>
              <Button className="btn btn-light btn-outline-primary m-1" href="#education">Education</Button>
              <Button className="btn btn-light btn-outline-primary m-1" href="#skills">Skills</Button>
              <Button className="btn btn-light btn-outline-primary m-1" href="#projects">Projects</Button>
              <Button className="btn btn-light btn-outline-primary m-1" href="#contact">Contact</Button>
           {/*} </div>*/}
             

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
