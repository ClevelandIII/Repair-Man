import {FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import React from 'react';
import {About, Contact, Cart, Home, Error} from "../pages";

export const links = [
  {
    id: 6,
    url: '/',
    text: 'home',
    page: <Home/>,
  },
  {
    id: 1,
    url: '/about',
    text: 'about',
    page: <About/>,
  },
  {
    id: 3,
    url: '/contact',
    text: 'contact',
    page: <Contact/>,
  },
  {
    id: 5,
    url: '/cart',
    text: 'cart',
    page: <Cart/>,
  },
  {
    id: 7,
    url: '*',
    text: 'error',
    page: <Error/>
  },
]

export const socials = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebook/>,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter/>,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin/>,
  },
]