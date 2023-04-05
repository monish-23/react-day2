import React from 'react';

function Footer() {
  return (
    <div className="footer-container">
      <div className="contact-info">
        <h3>Contact Us</h3>
        <p>Email: info@mycompany.com</p>
        <p>Address: 123 Main Street, Anytown USA</p>
        <p>Phone: 555-123-4567</p>
      </div>
      <div className="follow-us">
        <h3>Follow Us</h3>
        <div className="social-media-icons">
          <a href="https://www.facebook.com"><img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" alt="Facebook" /></a>
          <a href="https://www.twitter.com"><img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/twitter-512.png" alt="Twitter" /></a>
          <a href="https://www.instagram.com"><img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/instagram-512.png" alt="Instagram" /></a>
          <a href="https://www.linkedin.com"><img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/linkedin-512.png" alt="LinkedIn" /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
