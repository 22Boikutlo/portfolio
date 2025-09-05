import { useEffect, useState } from 'react';
import { LogoDev, Menu } from '@mui/icons-material';
import { Link } from 'react-scroll';

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
            <img src={logo} alt="logo" className='logo' />
            <div class="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home </Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About </Link>                
                <Link activeClass='active' to='stack' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>TechStack </Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio </Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Client </Link>
            </div>
            <button className='desktopMenuBtn' onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} >
                <img src={contact} alt='contact' className='desktopMenuImg ' />Contact Me
            </button>
            <img src={menubar} alt="menu" className='mobileMenu' onClick={() => setShowMenu(!showMenu)} />
            <div class="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home </Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>About </Link>
                <Link activeClass='active' to='stack' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>My Tech Stack </Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Portfolio </Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Client </Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contact </Link>

            </div>
        </nav>
        
  );
  
};

export default Navbar;
