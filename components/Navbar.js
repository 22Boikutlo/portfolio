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
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => setMobileMenu(prev => !prev); 

  /* close menu when a link is clicked */
  const closeMenu = () => setMobileMenu(true);

  return (
    <nav className={`nav container ${sticky ? 'darkNav' : ''}`}>
      <LogoDev className='logo' />

      <ul  className={mobileMenu ? 'showMobileMenu' : 'hideMobileMenu'}>
        <li><Link to='aboutme' smooth duration={500} onClick={closeMenu}>About</Link></li>
        <li><Link to='education' smooth duration={500} onClick={closeMenu}>Education</Link></li>
        <li><Link to='skills' smooth duration={500} onClick={closeMenu}>Skills</Link></li>
        <li><Link to='projects' smooth duration={500} onClick={closeMenu}>Projects</Link></li>
      </ul>

      <button onClick={toggleMenu} aria-label="Toggle menu" className='menuIcon'>
        <Menu />
      </button>
    
    </nav>
        
  );
  
};

export default Navbar;
