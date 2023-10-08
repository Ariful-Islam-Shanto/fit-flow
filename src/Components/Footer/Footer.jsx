import React from 'react';

const Footer = () => {
    return (
        <div className='bg-base-200'>
        <footer className="max-w-6xl mx-auto grid grid-cols-4 py-10  text-base-content">
  <nav className=' flex flex-col px-4 justify-center'>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">YogaClass</a> 
    <a className="link link-hover">Fitness Retreat</a> 
    <a className="link link-hover">Private fitness</a> 
    <a className="link link-hover">Consultration</a>
  </nav> 
  <nav className='flex flex-col  px-4 justify-center'>
    <header className="footer-title flex flex-col items-left justify-center">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav className='flex flex-col  px-4 justify-center'>
    <header className="footer-title ">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form className='flex flex-col  px-4 justify-center'>
    <header className="footer-title">Newsletter</header> 
    <fieldset className="form-control w-64">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
</div>
    );
};

export default Footer;