import { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logoF.png'; // Adjust the path as needed
import userImg from '../../assets/images/avatar-icon.png';
import { BiMenu } from "react-icons/bi"; // Correct import

const navLinks = [
  { path: '/home', display: 'Home' },
  { path: '/doctors', display: 'Find  a  Doctor' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact' },
];

const Header = () => {
  const headerRef =useRef(null)
  const menuRef =useRef(null)

  const handleStickyHeader =()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80 ||document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }
  useEffect(()=>{
    handleStickyHeader()

    return()=>window.removeEventListener('scroll',handleStickyHeader)
  })

  const toggleMenu =()=>menuRef.current.classList.toggle('show__menu')


  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
           <img src={logo} alt="Website Logo" className="h-[175px] w-[220px] object-contain" />
          </div>

          {/* Menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-[#3366cc] leading-7 text-[18px] font-semibold'
                        : 'text-[#3366cc] leading-7 text-[18px] font-semibold hover:text-[#00004d]'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/*======nav-right======*/}
          <div className="flex items-center gap-4">
            <div className='hidden'>
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={userImg} className="w-full rounded-full" alt="User Avatar" />
                </figure>
              </Link>
            </div>
            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] 
              flex items-center justify-center rounded-[50px] hover:bg-[#00004d]"> Login</button>
            </Link>
            <span  className='md:hidden'onClick={toggleMenu} >
              <BiMenu className="h-6 w-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;