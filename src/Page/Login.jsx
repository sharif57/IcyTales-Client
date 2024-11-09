import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const { loginUser } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(''); // Reset error before attempting to log in

        try {
            // Use loginUser from AuthContext to handle the login process
            await loginUser(email, password);
            alert('Login successful!');
            navigate('/')
        } catch (err) {
            setError('Invalid email or password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-center text-gray-700">Welcome Back</h2>
                    <p className="text-center text-gray-500 mb-6">Please log in to your account</p>

                    {error && <div className="mb-4 text-red-600 text-center">{error}</div>}

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="block text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-gray-600">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full px-4 py-2 text-white rounded-lg bg-primary hover:bg-purple-700 transition duration-300 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600'}`}
                        >
                            {loading ? 'Logging in...' : 'Log In'}
                        </button>
                    </form>

                    <div className="text-center mt-4">
                        <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                            Forgot your password?
                        </Link>
                    </div>

                    <p className="mt-6 text-center text-gray-500">
                        Don’t have an account?{' '}
                        <Link to="/signUp" className="text-primary hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
