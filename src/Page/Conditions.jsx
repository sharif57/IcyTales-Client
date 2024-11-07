import { Link } from "react-router-dom";

const Conditions = () => {
    return <div>
        <div>
            <div className="bg-gradient-to-b from-pink-100 to-pink-50 py-56">
                <h1 className="text-center text-6xl font-bold">Terms & Conditions</h1>
                <div className="text-center mt-6 bg-white p-5 w-1/4 shadow-lg rounded-full mx-auto flex-row gap-8 items-center">
                    <Link to="/">Home</Link>/<Link to="/blogs/shop">Terms & Conditions</Link>
                </div>
            </div>
            <div className="max-w-5xl mx-auto px-4 py-10 lg:px-20 text-gray-800">
                <h1 className="text-3xl font-semibold mb-6">Terms and Conditions:</h1>
                <p className="text-lg mb-4">
                Welcome to [Your Online Education Platform]! Before accessing or using our website, please read these Terms and Conditions carefully. By accessing or using
                any part of the site, you agree to be bound by these Terms and Conditions.                </p>

                <div className="space-y-6">
                    {/* Information We Collect */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">1. Use of Website:</h2>
                        <p className="text-base leading-relaxed">
                        Your use of our website is subject to these Terms and Conditions. You must be at least 18 years old to use our services.                        </p>
                    </section>
                    {/* How We Use Your Information */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">2. User Account:</h2>
                        <p className="text-base leading-relaxed">
                        You are responsible for maintaining the confidentiality of your account and password. You agree to provide accurate and complete information when creating
                        an account.                        </p>
                    </section>

                    {/* Information Sharing */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">3. Intellectual Property:</h2>
                        <p className="text-base leading-relaxed">
                            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent. We may share your information with trusted third-party service providers who assist us in operating our website.
                        </p>
                    </section>

                    {/* Security */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">4. Payment and Billing:</h2>
                        <p className="text-base leading-relaxed">
                        Payment for our services is required in advance. All fees are non-refundable.                        </p>
                    </section>

                    {/* Your Choices */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">5. Termination:</h2>
                        <p className="text-base leading-relaxed">
                        All content on this website, including text, graphics, logos, and images, is the property of [Your Online Education Platform] and protected by copyright laws.
                        You may not reproduce, distribute, or transmit any content without prior written consent.                        </p>
                    </section>
                </div>

                <p className="mt-6 text-base leading-relaxed">
                Please review our full Terms and Conditions for more detailed information.                </p>
            </div>
        </div>
    </div>;
};
export default Conditions;