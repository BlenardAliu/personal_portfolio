import React from 'react';
import { Link } from "react-router-dom";
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/blenardaliu/" target="_blank">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/blenard.aliu.2/" target="_blank">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://instagram.com/blenard_aliu" target="_blank">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;