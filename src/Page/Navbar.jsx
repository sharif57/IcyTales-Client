// import { useState } from 'react';
// import logo from '/Group 1.png';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, ChevronDown } from 'lucide-react';

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown
//   const { pathname } = useLocation();

//   const menuList = [
//     {
//       title: 'Home',
//       path: '/',
//     },
//     {
//       title: 'About Us',
//       path: '/about',
//     },
//     {
//       title: 'Pages',
//       path: '/blogs',
//       icon: <ChevronDown className="inline w-4 h-4 ml-1" />, // Add the icon here
//       submenu: [
//         { title: 'Team', path: '/blogs/team' },
//         { title: 'Review', path: '/blogs/review' },
//         { title: 'Shop', path: '/blogs/shop' },
//         { title: 'Cart', path: '/blogs/cart' },
//         { title: 'Load More', path: '/blogs/loadMore' },
//         { title: 'CheckOut', path: '/blogs/checkOut' },
//         { title: 'Privacy Policy', path: '/blogs/privacy' },
//         { title: 'Terms & Conditions', path: '/blogs/terms' },
//         { title: 'Thank You', path: '/blogs/thank' },
//       ],
//     },
    
//     {
//       title: 'Blog',
//       path: '/cardGrid',
//     },
//     {
//       title:'Log In',
//       path:'/login'
//     }
    
//   ];

//   return (
//     <nav className="lg:flex items-center justify-between container mx-auto">
//       <div className="flex items-center justify-between">
//         <div>
//           <img className="w-48" src={logo} alt="Logo" />
//         </div>
//         <div className="lg:hidden" onClick={() => setOpen(!open)}>
//           {!open ? <Menu /> : <X />}
//         </div>
//       </div>
//       <ul
//         className={`lg:flex items-center bg-primary lg:bg-transparent gap-10 text-xl absolute lg:static h-auto ${open ? 'top-0 w-full top-[60px]' : '-top-96'
//           }`}
//       >
//         {menuList.map((item, index) => (
//           <li
//             key={index}
//             className={`relative ${item.path === pathname ? 'text-primary font-bold' : 'text-black'} text-xl hover:text-primary duration-200`}
//             onMouseEnter={() => item.submenu && setDropdownOpen(true)}
//             onMouseLeave={() => item.submenu && setDropdownOpen(false)}
//           >
//             <Link to={item.path} className="flex items-center">
//               {item.title}
//               {item.icon && item.icon} {/* Render icon if it exists */}
//             </Link>

//             {/* Dropdown for Blogs */}
//             {item.submenu && dropdownOpen && (
//               <ul className="absolute left-0 mt-2 bg-white shadow-lg border rounded-lg w-40 text-black">
//                 {item.submenu.map((subItem, subIndex) => (
//                   <li
//                     key={subIndex}
//                     className="px-4 py-2 hover:bg-primary hover:text-white duration-200"
//                   >
//                     <Link to={subItem.path}>{subItem.title}</Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }


import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ShoppingCart, User } from 'lucide-react';
import logo from '/Group 1.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { pathname } = useLocation();

  const menuList = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    {
      title: 'Pages',
      path: '/blogs',
      icon: <ChevronDown className="inline w-4 h-4 ml-1" />,
      submenu: [
        { title: 'Team', path: '/blogs/team' },
        { title: 'Review', path: '/blogs/review' },
        { title: 'Shop', path: '/blogs/shop' },
        { title: 'Cart', path: '/blogs/cart' },
        { title: 'Load More', path: '/blogs/loadMore' },
        { title: 'CheckOut', path: '/blogs/checkOut' },
        { title: 'Privacy Policy', path: '/blogs/privacy' },
        { title: 'Terms & Conditions', path: '/blogs/terms' },
        { title: 'Thank You', path: '/blogs/thank' },
      ],
    },
    { title: 'Blog', path: '/cardGrid' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img className="w-40 md:w-48" src={logo} alt="Logo" />
        </Link>

        {/* Hamburger menu icon for mobile */}
        <div className="lg:hidden" onClick={() => setOpen(!open)}>
          {!open ? <Menu className="w-6 h-6 text-primary" /> : <X className="w-6 h-6 text-primary" />}
        </div>

        {/* Menu items */}
        <ul
          className={`lg:flex items-center gap-8 text-xl absolute lg:static bg-white lg:bg-transparent w-full lg:w-auto left-0 lg:left-auto transition-all duration-300 ease-in-out ${
            open ? 'top-20 p-6 lg:p-0' : '-top-96'
          }`}
        >
          {menuList.map((item, index) => (
            <li
              key={index}
              className={`relative ${item.path === pathname ? 'text-primary font-bold' : 'text-black'} text-lg lg:my-0 my-2`}
              onMouseEnter={() => item.submenu && setDropdownOpen(true)}
              onMouseLeave={() => item.submenu && setDropdownOpen(false)}
            >
              <Link to={item.path} className="flex items-center hover:text-primary transition duration-200">
                {item.title}
                {item.icon && item.icon}
              </Link>

              {/* Dropdown menu for Pages */}
              {item.submenu && dropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg border rounded-lg w-48 text-black z-10">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="px-4 py-2 hover:bg-primary hover:text-white transition duration-200">
                      <Link to={subItem.path}>{subItem.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Login and Cart buttons */}
          <li className="flex items-center gap-4 mt-4 lg:mt-0 lg:ml-4">
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
            >
              <User className="w-5 h-5" />
              Log In
            </Link>
            <Link
              to="/cart"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
            >
              <ShoppingCart className="w-5 h-5" />
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
