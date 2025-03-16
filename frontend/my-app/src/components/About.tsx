import React from 'react';

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">About ThinkTank Research Dashboard</h1>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut viverra nibh. Vivamus facilisis, tortor sit amet finibus fringilla, dolor massa facilisis risus, sit amet varius ipsum libero vulputate purus. Phasellus condimentum urna arcu. Curabitur vel eros pulvinar, tempor felis vel, scelerisque ipsum. Maecenas scelerisque sit amet eros sed mattis. Nullam luctus porta purus, eget gravida nisi elementum quis. Nunc sed bibendum massa. Ut congue placerat tortor at cursus. Aenean ac erat mollis, efficitur sem id, imperdiet turpis. Integer vulputate lectus quis pretium malesuada. Donec dapibus nisl id massa vehicula pellentesque. Integer viverra ultricies pretium. In hac habitasse platea dictumst. Sed ut imperdiet erat, sed sodales odio. Etiam bibendum, ante sit amet fermentum volutpat, diam sapien vulputate risus, quis scelerisque velit odio vitae metus. Nunc leo metus, rhoncus sed mauris nec, viverra ultricies ipsum.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut viverra nibh. Vivamus facilisis, tortor sit amet finibus fringilla, dolor massa facilisis risus, sit amet varius ipsum libero vulputate purus. Phasellus condimentum urna arcu. Curabitur vel eros pulvinar, tempor felis vel, scelerisque ipsum. Maecenas scelerisque sit amet eros sed mattis. Nullam luctus porta purus, eget gravida nisi elementum quis. Nunc sed bibendum massa. Ut congue placerat tortor at cursus. Aenean ac erat mollis, efficitur sem id, imperdiet turpis. Integer vulputate lectus quis pretium malesuada. Donec dapibus nisl id massa vehicula pellentesque. Integer viverra ultricies pretium. In hac habitasse platea dictumst. Sed ut imperdiet erat, sed sodales odio. Etiam bibendum, ante sit amet fermentum volutpat, diam sapien vulputate risus, quis scelerisque velit odio vitae metus. Nunc leo metus, rhoncus sed mauris nec, viverra ultricies ipsum.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Email: <a href="mailto:info@thinktank.com" className="text-blue-500 hover:text-blue-700">info@thinktank.com</a></li>
                        <li>Phone: 21264543857734856436546724</li>
                        <li>Address: 56 john lane</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;