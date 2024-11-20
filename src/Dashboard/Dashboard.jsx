// import { useState } from "react";
// import { FaHome, FaUser, FaChartLine, FaCog, FaBars, FaTimes } from "react-icons/fa";
// import UseAdmin from "../hooks/UseAdmin";
// import { Link } from "react-router-dom";

// function Dashboard() {
//   // State to toggle sidebar visibility
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const [isAdmin] = UseAdmin();


//   return (
//     <div className="flex h-screen bg-gray-100">
//       {
//         isAdmin ? <>
//           {/* Sidebar (desktop) */}
//           <aside className="w-64 bg-blue-900 text-white hidden lg:flex flex-col p-4">
//             <h2 className="text-xl font-bold mb-6">ICETelas Dashboard</h2>
//             <nav className="space-y-4">
//               <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
//                 <FaHome className="mr-2" /> Home
//               </a>
//               <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
//                 <FaUser className="mr-2" /> Users
//               </a>
//               <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
//                 <FaChartLine className="mr-2" /> Analytics
//               </a>
//               <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
//                 <FaCog className="mr-2" /> Settings
//               </a>
//             </nav>
//           </aside>

//           {/* Sidebar (mobile) */}
//           <div
//             className={`fixed top-0 left-0 w-3/4 bg-blue-900 text-white h-full p-4 z-50 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//               } transition-transform lg:hidden`}
//           >
//             <button onClick={toggleSidebar} className="text-white text-2xl mb-4">
//               <FaTimes />
//             </button>
//             <h2 className="text-xl font-bold mb-6">ICETelas Dashboard</h2>
//             <nav className="space-y-4">
//               <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
//                 <FaHome className="mr-2" /> Home
//               </a>
//               <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
//                 <FaUser className="mr-2" /> Users
//               </a>
//               <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
//                 <FaChartLine className="mr-2" /> Analytics
//               </a>
//               <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
//                 <FaCog className="mr-2" /> Settings
//               </a>
//             </nav>
//           </div>
//         </>
//           :
//           <>
//             <aside className="w-64 bg-blue-900 text-white hidden lg:flex flex-col p-4">
//               <h2 className="text-xl font-bold mb-6">ICETelas Dashboard user </h2>
//               <nav className="space-y-4">
//                 <Link to={'/'} className="flex items-center p-2 hover:bg-blue-700 rounded">
//                   <FaHome className="mr-2" /> Home
//                 </Link>
//                 <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
//                   <FaUser className="mr-2" /> Users
//                 </a>
//                 <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
//                   <FaChartLine className="mr-2" /> Analytics
//                 </a>
//                 <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
//                   <FaCog className="mr-2" /> Settings
//                 </a>
//               </nav>
//             </aside>

//             {/* Sidebar (mobile) */}
//             <div
//               className={`fixed top-0 left-0 w-3/4 bg-blue-900 text-white h-full p-4 z-50 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//                 } transition-transform lg:hidden`}
//             >
//               <button onClick={toggleSidebar} className="text-white text-2xl mb-4">
//                 <FaTimes />
//               </button>
//               <h2 className="text-xl font-bold mb-6">ICETelas Dashboard</h2>
//               <nav className="space-y-4">
//                 <a  className="flex items-center p-2 hover:bg-blue-700 rounded">
//                   <FaHome className="mr-2" /> Home
//                 </a>
//                 <Link to={'/dashboard/manageUsers'} className="flex items-center p-2 hover:bg-blue-700 rounded">
//                   <FaUser className="mr-2" /> Users
//                 </Link>
//                 <a  className="flex items-center p-2 hover:bg-blue-700 rounded">
//                   <FaChartLine className="mr-2" /> Analytics
//                 </a>
//                 <a  className="flex items-center p-2 hover:bg-blue-700 rounded">
//                   <FaCog className="mr-2" /> Settings
//                 </a>
//               </nav>
//             </div>
//           </>
//       }

//       {/* Main Content */}
//       <div className="flex flex-col flex-1">
//         {/* Navbar */}
//         <header className="flex items-center justify-between p-4 bg-white shadow-md">
//           <button onClick={toggleSidebar} className="lg:hidden text-gray-500 text-2xl">
//             <FaBars />
//           </button>
//           <div className="text-xl font-bold lg:hidden">ICETelas Dashboard</div>
//           <div className="flex items-center space-x-4">
//             <span className="text-gray-500">Welcome, User</span>
//             <img
//               src="https://via.placeholder.com/40"
//               alt="Profile"
//               className="rounded-full w-10 h-10"
//             />
//           </div>
//         </header>

//         {/* Content */}
//         <main className="flex-1 p-6 overflow-y-auto">
//           <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="bg-white p-4 shadow rounded-lg">
//               <h3 className="text-lg font-semibold">Total Sales</h3>
//               <p className="text-3xl font-bold">৳50,000</p>
//             </div>
//             <div className="bg-white p-4 shadow rounded-lg">
//               <h3 className="text-lg font-semibold">New Users</h3>
//               <p className="text-3xl font-bold">150</p>
//             </div>
//             <div className="bg-white p-4 shadow rounded-lg">
//               <h3 className="text-lg font-semibold">Revenue</h3>
//               <p className="text-3xl font-bold">৳120,000</p>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;





import { FaHome, FaSignOutAlt, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { GoReport } from "react-icons/go";
import { IoMdNotifications } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BsPostcard } from "react-icons/bs";
import { MdPostAdd } from "react-icons/md";
import { AuthContext } from "../AuthProvider/AuthProvider";
import UseAdmin from "../hooks/UseAdmin";


const Dashboard = () => {
  const { logOut } = useContext(AuthContext)
  const [items, setItems] = useState([]);
  const { user } = useContext(AuthContext)


  useEffect(() => {
    fetch(`https://icy-tales-backend.vercel.app/users/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, [user]);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log('logout successfully'))
      .catch(error => console.error(error))

  }

  // const isAdmin = true;
  const [isAdmin] = UseAdmin();
  console.log(isAdmin);

  return (
    <div className="flex ">
      <div className="w-64 min-h-screen bg-gray-400 pt-6">
        <ul className="menu p-4">
          {
            isAdmin ? <>
              <li>

                <NavLink to={'/dashboard/adminProfile'}><FaHome className="size-8 "></FaHome>Admin Profile</NavLink>
              </li>
              <li>

                <NavLink to={'/dashboard/manageUsers'}><BiUser className="size-8 "></BiUser>Manage Users</NavLink>
              </li>
              <li>

                <NavLink to={'/dashboard/reported'}><GoReport className="size-8 "></GoReport> Reported Comments </NavLink>
              </li>
              <li>

                <NavLink to={'/dashboard/announcementPost'}><IoMdNotifications className="size-8 text-yellow-500" /> Announcement</NavLink>
              </li>

            </>

              :

              <>
                <li>

                  <NavLink to={'/dashboard/myProfile'}><CgProfile className="size-8"></CgProfile>My Profile</NavLink>
                </li>
                <li>

                  <NavLink to={'/dashboard/addData'}> <MdPostAdd className="size-8"></MdPostAdd>Add Post</NavLink>
                </li>
                <li>

                  <NavLink to={'/dashboard/myPost'}><BsPostcard className="size-8"></BsPostcard> My Posts </NavLink>
                </li>
              </>
          }

          {/* shared nav links */}

          <div className="divider">OR</div>
          <li>

            <NavLink to={'/'}><FaHome className="size-8 "></FaHome>Home</NavLink>
          </li>
          <li>

            <NavLink to={'/'}><FaSignOutAlt className="size-8 "></FaSignOutAlt> <button onClick={handleLogOut}>Log Out</button></NavLink>
          </li>

        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;