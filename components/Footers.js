import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <div className={styles.footer} id="footer">
      <p>© 2025 Fana Networks. All rights reserved.</p>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>
    </div>
  );
};

export default Footer;
