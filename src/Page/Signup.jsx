import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Signup = () => {
  const { registerUser, updateUserProfile } = useContext(AuthContext); // Assuming you have updateUserProfile function in context
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileImage: null, // Added profile image state
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0], // Store the file if it's an image
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      // Register the user
      const userCredential = await registerUser(formData.email, formData.password);

      // Handle profile image upload (if any) and update displayName
      if (formData.profileImage) {
        const profileImageURL = await uploadProfileImage(formData.profileImage); // Assume uploadProfileImage is defined elsewhere
        await updateUserProfile(formData.name, profileImageURL); // Update displayName and photoURL
      } else {
        await updateUserProfile(formData.name); // Only update displayName if no image
      }

      setLoading(false);
      alert('Signup successful!');
      navigate('/'); // Navigate to the homepage or login page
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  // Simulated function to handle image upload (replace with real implementation)
  const uploadProfileImage = async (file) => {
    // Simulate uploading image and return the image URL
    return new Promise((resolve) => {
      setTimeout(() => resolve('https://your-cloud-storage-url.com/image.jpg'), 1000);
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Create an Account</h2>
        <p className="text-center text-gray-500 mb-6">Sign up to get started</p>

        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-gray-600">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="profileImage" className="block text-gray-600">Profile Image</label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              onChange={handleChange}
              accept="image/*"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 text-white rounded-lg ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'} transition duration-300`}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
