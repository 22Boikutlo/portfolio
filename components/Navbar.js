import { useEffect, useState } from 'react';
import { Menu } from '@mui/material';
import { LogoDev } from '@mui/icons-material';
import styles from './Navbar.module.css'
import { Link } from 'react-scroll';

const Navbar = () => {
  /*keeping navigation bar transparent until scrolled more than 50px*/
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => { window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, [])
  /*toggle menu for mobile*/
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => { mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

  };

  return (
    <nav className='nav'>
      <div className={`${styles.container} ${sticky ? styles.darkNav : ''}`}>
        <ul className={mobileMenu ? '' : styles.hideMobileMenu}>
          <LogoDev className={styles.logo} />
          <li><Link to='aboutme' smooth={true}  duration={500}>About</Link></li>
          <li><Link to='education' smooth={true}  duration={500}>Education</Link></li>
          <li><Link to='skills' smooth={true}  duration={500}>Skills</Link></li>
          <li><Link to='projects' smooth={true}  duration={500}>Projects</Link></li>
        </ul>
        <Menu onClick={toggleMenu} aria-label="Toggle menu" className="menuIcon" />

      </div>
    </nav>
  );
};

export default Navbar;
