import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Profile = () => {
  const { user } = useContext(AuthContext)
  return <div>
    <div className="max-w-sm mx-auto w-full mt-10 rounded-lg overflow-hidden shadow-xl bg-white group hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      {/* Header Section with Background Image */}
      <div className="relative w-full h-32 bg-blue-500">
        <img
          src="https://via.placeholder.com/800x200"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Profile Image */}
      <div className="relative -mt-16 flex justify-center">
        <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-xl">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* User Info */}
      <div className="text-center py-4">
        <h3 className="text-2xl font-semibold text-gray-800">{user?.displayName}</h3>
        <p className="text-sm text-gray-600">Customer</p>
      </div>

      {/* Bio */}
      <div className="px-4 pb-4 text-gray-600 text-sm">
        <p className="text-center">Passionate about building user-friendly and visually appealing websites with a focus on clean design and intuitive functionality.</p>
      </div>

      {/* Social Links Section */}
      <div className="flex justify-center gap-6 py-4 bg-gray-50">
        <Facebook />
        <Twitter />
        <Instagram></Instagram>
      </div>
    </div>
  </div>;
};
export default Profile;