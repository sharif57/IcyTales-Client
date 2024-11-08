import { useState } from 'react';
import logo from '/Group 1.png';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown
  const { pathname } = useLocation();

  const menuList = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About Us',
      path: '/about',
    },
    {
      title: 'Pages',
      path: '/blogs',
      icon: <ChevronDown className="inline w-4 h-4 ml-1" />, // Add the icon here
      submenu: [
        { title: 'Team', path: '/blogs/team' },
        { title: 'Review', path: '/blogs/review' },
        { title: 'Shop', path: '/blogs/shop' },
        { title: 'Cart', path: '/blogs/cart' },
        { title: 'CheckOut', path: '/blogs/checkOut' },
        { title: 'Privacy Policy', path: '/blogs/privacy' },
        { title: 'Terms & Conditions', path: '/blogs/terms' },
        { title: 'Thank You', path: '/blogs/thank' },
      ],
    },
    {
      title: 'Blog',
      path: '/cardGrid',
    },
    {
      title: 'Login',
      path: '/auth/login',
    },
  ];

  return (
    <nav className="lg:flex items-center justify-between container mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <img className="w-48" src={logo} alt="Logo" />
        </div>
        <div className="lg:hidden" onClick={() => setOpen(!open)}>
          {!open ? <Menu /> : <X />}
        </div>
      </div>
      <ul
        className={`lg:flex items-center bg-primary lg:bg-transparent gap-10 text-xl absolute lg:static h-auto ${open ? 'top-0 w-full top-[60px]' : '-top-96'
          }`}
      >
        {menuList.map((item, index) => (
          <li
            key={index}
            className={`relative ${item.path === pathname ? 'text-primary font-bold' : 'text-black'} text-xl hover:text-primary duration-200`}
            onMouseEnter={() => item.submenu && setDropdownOpen(true)}
            onMouseLeave={() => item.submenu && setDropdownOpen(false)}
          >
            <Link to={item.path} className="flex items-center">
              {item.title}
              {item.icon && item.icon} {/* Render icon if it exists */}
            </Link>

            {/* Dropdown for Blogs */}
            {item.submenu && dropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg border rounded-lg w-40 text-black">
                {item.submenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="px-4 py-2 hover:bg-primary hover:text-white duration-200"
                  >
                    <Link to={subItem.path}>{subItem.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
