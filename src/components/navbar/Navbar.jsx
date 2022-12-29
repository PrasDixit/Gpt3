import { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const Menu = () => {
     return (
          <>
               <p>
                    <a href="#home">Home</a>
               </p>
               <p>
                    <a href="#wgpt3">What is GPT3</a>
               </p>
               <p>
                    <a href="#features">Case Studies</a>

               </p>
               <p>
                    <a href="#possibility">Open AI</a>
               </p>
               <p>
                    <a href="#blog">Library</a>
               </p>
          </>
     )

}

const Navbar = () => {
     const [toggleMenu, setToggleMenu] = useState(false)

     return (
          <div className='gpt3__navbar'>

               <div className="gpt3__navbar-links">
                    <div className="gpt3__navbar-links_logo">
                         <Link to="/">
                              <img src={logo} alt="Logo" />
                         </Link>
                    </div>
                    <div className="gpt3__navbar-links_container">
                         <Menu />
                    </div>
               </div>

               <div className="gpt3__navbar-sign">
                    <Link to="/Login" className='login'>Login</Link>
                    <Link to="/Signup" className='signup'>Sign Up</Link>
               </div>

               <div className="gpt3__navbar-menu">
                    {toggleMenu
                         ? <RiCloseLine color='#f0f8ff' size={27} onClick={() => setToggleMenu(!toggleMenu)} />
                         : <RiMenu3Line color='#f0f8ff' size={27} onClick={() => setToggleMenu(!toggleMenu)} />
                    }
                    {
                         toggleMenu &&
                         <div className="gpt3__navbar-menu_container scale-up-center">
                              <div className="gpt3__navbar-menu_container-links">
                                   <Menu />
                                   <div className="gpt3__navbar-menu_container-links-sign">
                                        <Link to="/Login" className='login'>Login</Link>
                                        <Link to="/Signup" className='signup'>Sign Up</Link>
                                   </div>
                              </div>
                         </div>
                    }
               </div>
          </div>
     )
}

export default Navbar