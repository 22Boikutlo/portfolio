import { useEffect, useState } from 'react';
import { LogoDev, Menu } from '@mui/icons-material';
import styles from './Navbar.module.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  /* keeping navigation bar transparent until scrolled more than 50px */
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // ✅ cleanup
  }, []);

  /* toggle menu for mobile */
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => setMobileMenu((prev) => !prev);

  /* close menu when a link is clicked */
  const closeMenu = () => setMobileMenu(false);

  return (
    <nav className={`nav ${styles.container} ${sticky ? styles.darkNav : ''}`}>
      <LogoDev className={styles.logo} />

      <ul className={mobileMenu ? styles.showMobileMenu : styles.hideMobileMenu}>
        <li><Link to='aboutme' smooth duration={500} onClick={closeMenu}>About</Link></li>
        <li><Link to='education' smooth duration={500} onClick={closeMenu}>Education</Link></li>
        <li><Link to='skills' smooth duration={500} onClick={closeMenu}>Skills</Link></li>
        <li><Link to='projects' smooth duration={500} onClick={closeMenu}>Projects</Link></li>
      </ul>

      {/* Wrap Menu icon in a button */}
      <button onClick={toggleMenu} aria-label="Toggle menu" className={styles.menuIcon}>
        <Menu />
      </button>
    </nav>
  );
};

export default Navbar;
