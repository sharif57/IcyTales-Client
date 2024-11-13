import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    return (
        <div>
            <div className="bg-gradient-to-b from-pink-100 to-pink-50 py-16 sm:py-28 md:py-56">
                <div>
                    <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold">
                    Privacy Policy
                    </h1>
                    <div className="text-center mt-6 bg-white p-4 sm:p-5 w-full sm:w-3/4 md:w-1/4 shadow-lg rounded-full mx-auto flex flex-wrap gap-4 items-center justify-center">
                        <Link to={'/'} className="text-gray-700 hover:text-pink-500">Home</Link>
                        <span>/</span>
                        <Link to={''} className="text-gray-700 hover:text-pink-500">Privacy Policy                        </Link>
                    </div>
                </div>
            </div>  
            <div className="max-w-5xl mx-auto px-4 py-10 lg:px-20 text-gray-800">
                <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
                <p className="text-lg mb-4">
                    Protecting your privacy is important to us. This Privacy Policy outlines how we collect, use, and disclose personal information when you use our website.
                </p>

                <div className="space-y-6">
                    {/* Information We Collect */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">1. Information We Collect:</h2>
                        <p className="text-base leading-relaxed">
                            We collect personal information such as your name, email address, and payment details when you create an account or make a purchase. We also collect usage data such as IP addresses, browser type, and pages visited.
                        </p>
                    </section>
                    {/* How We Use Your Information */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information:</h2>
                        <p className="text-base leading-relaxed">
                            We use your personal information to provide and improve our services. Your information may also be used for communication purposes, such as sending newsletters or updates.
                        </p>
                    </section>

                    {/* Information Sharing */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">3. Information Sharing:</h2>
                        <p className="text-base leading-relaxed">
                            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent. We may share your information with trusted third-party service providers who assist us in operating our website.
                        </p>
                    </section>

                    {/* Security */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">4. Security:</h2>
                        <p className="text-base leading-relaxed">
                            We implement security measures to protect your personal information against unauthorized access or alteration. However, no method of transmission over the Internet or electronic storage is 100% secure.
                        </p>
                    </section>

                    {/* Your Choices */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">5. Your Choices:</h2>
                        <p className="text-base leading-relaxed">
                            You have the right to access, update, or delete your personal information at any time. You can opt out of receiving promotional emails by following the instructions provided in the email. By using our website, you consent to the terms of this Privacy Policy. If you have any questions or concerns, please contact us.
                        </p>
                    </section>
                </div>

                <p className="mt-6 text-base leading-relaxed">
                    By using our website, you consent to the terms of this Privacy Policy. If you have any questions or concerns, please contact us.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
