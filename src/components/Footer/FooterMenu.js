import React from 'react';

import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialGithub, SlSocialYoutube } from 'react-icons/sl';

import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "../../config/MenuData.js";
  

  const SocialIcons = () => {
    return (
      <div className="text-accent">
          <span
            className="p-2 cursor-pointer inline-flex items-center
          rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-accent
          duration-300 "
          ><SlSocialInstagram /></span>
          <span
            className="p-2 cursor-pointer inline-flex items-center
          rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-accent
          duration-300 "
          ><SlSocialFacebook /></span>
          <span
            className="p-2 cursor-pointer inline-flex items-center
          rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-accent
          duration-300 "
          ><SlSocialGithub /></span>
          <span
            className="p-2 cursor-pointer inline-flex items-center
          rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-accent
          duration-300 "
          ><SlSocialYoutube /></span>
          <span
            className="p-2 cursor-pointer inline-flex items-center
          rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-accent
          duration-300 "
          ><SlSocialLinkedin /></span>
      </div>
    );
  };

const Item = ({ Links, title }) => {
    return (
      <ul>
        <h1 className="mb-1 font-semibold">{title}</h1>
        {Links.map((link) => (
          <li key={link.name}>
            <a
              className="text-gray-400 hover:text-accent duration-300
            text-sm cursor-pointer leading-6"
              href={link.link}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

const ItemsContainer = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <Item Links={PRODUCTS} title="PRODUCTS" />
        <Item Links={RESOURCES} title="RESOURCES" />
        <Item Links={COMPANY} title="COMPANY" />
        <Item Links={SUPPORT} title="SUPPORT" />
      </div>
    );
  };

const FooterMenu = () => {

    return (
        <footer className="bg-gray-900 text-white">
          <ItemsContainer />
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
          text-center pt-2 text-gray-400 text-sm pb-8"
          >
            <span>© 2020 Appy. All rights reserved.</span>
            <span>Terms · Privacy Policy</span>
            <SocialIcons />
          </div>
        </footer>)
};

export default FooterMenu;