import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.footer} id="footer">
      <p>© 2025 Fana Networks. All rights reserved.</p>
        <ul>
          <li><Link href='/Privacy'>Privacy Policy</Link></li>
          <li><Link href='/TermsOfUse'>Terms of Service</Link></li>
        </ul>
    </div>
  );
};

export default Footer;
