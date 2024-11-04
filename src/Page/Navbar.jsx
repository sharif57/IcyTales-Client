import  { useState } from 'react'
import logo from "/Group 1.png"
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open,setOpen] = useState(false);
  // const [active,setActive] = useState("");
  const {pathname} = useLocation();

  const menuList = [
    {
      title: "Home",
      path: "/home"
    },
    {
      title: "Foods",
      path: "/foods"
    },
    {
      title: "Blog",
      path: "/blogs"
    },
    {
      title: "Dashboard",
      path: "/dashboard"
    },
    {
      title: "Login",
      path: "/auth/login"
    },
  ]



  return (
    <nav className='lg:flex items-center justify-between container mx-auto'>
      
        <div className='flex items-center justify-between'>
          <div>
            <img className='w-48' src={logo} alt="" />
          </div>
          <div className='lg:hidden' onClick={()=> setOpen(!open)}>
            {!open ? <Menu /> :<X />  }
          </div>
        </div>
        <ul className={`lg:flex items-center bg-primary lg:bg-transparent gap-10 text-xl absolute lg:static  h-auto  ${open ? "top-0 w-full top-[60px]" : "-top-96"}`}>
          {
            menuList.map((item,index)=> <li  className={`${item.path === pathname ? "text-primary font-bold": "text-black"} text-xl hover:text-primary duration-200`}><Link to={item.path}>{item.title}</Link></li>)
          }
          {/* {
            menuList.map((item,index)=> <li onClick={()=>setActive(item.title)} className={`${item.title === active ? "text-primary font-bold": "text-black"} text-xl hover:text-primary duration-200`}><Link to={item.path}>{item.title}</Link></li>)
          } */}
        </ul>
    </nav>
  )
}

  {/* <li className='text-secondary text-xl hover:text-primary duration-200'><Link to="/home">Home</Link></li>
          <li><Link to="/foods">Foods</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/auth/login">Login</Link></li> */}