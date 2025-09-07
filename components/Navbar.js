import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from './assets/logo.png';
import menubar from './assets/menu.png';
import contact from './assets/contact.png';
import Image from 'next/image';

const Navbar = () => {
  /* keeping navigation bar transparent until scrolled more than 50px */
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* toggle menu for mobile */
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='navbar'>
      <Image src={logo} alt="logo" className='logo' />
      <div class="desktopMenu">
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About Me </Link>
        <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Education </Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Skills </Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Projects </Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Contact </Link>

      </div>
      <a href='/cv.pdf' download>
        <button className='desktopMenuBtn' >
          <Image src={contact} alt='contact' className='desktopMenuImg ' />
          Download CV
        </button>
      </a>
      <Image src={menubar} alt="menu" className='mobileMenu' onClick={() => setShowMenu(!showMenu)} />
      <div class="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>About Me </Link>
        <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Education</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Skills </Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Projects </Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contact </Link>

      </div>
    </nav>

  );

};

export default Navbar;
