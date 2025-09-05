import React from 'react';
import founderoologo from '../assets/founderoo.webp';

const Footer = () => {
    return (
        <footer className="bg-[#12113D] text-white pt-24 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand and Description Column */}
                    <div>
                        <div className="mb-6">
                            <img src={founderoologo} alt="Founderoo Logo" className="w-20 h-20" />
                        </div>
                        <p className="text-gray-300 max-w-[250px] leading-relaxed">
                            One place Digital solution for freelancer and branding platform.
                        </p>
                    </div>

                    {/* Use Cases Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Use Cases</h4>
                        <ul className="space-y-4 text-gray-300">
                            <li><a href="https://www.founderoo.in/#feature" className="hover:text-purple-400 transition-colors">Idea Based Funding</a></li>
                            <li><a href="https://www.founderoo.in/form" className="hover:text-purple-400 transition-colors">Tech Cofounder</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Designing</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Social Media Management</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-300">
                            <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
                            <li><a href="https://founderooblog.vercel.app/" className="hover:text-purple-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Teams</a></li>
                        </ul>
                    </div>

                    {/* Follow Us Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
                        <div className="flex items-center space-x-4">
                            <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0E76A8" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.761s.784-1.76 1.75-1.761 1.75.79 1.75 1.761-.783 1.761-1.75 1.761zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.742 7 2.457v6.778z" /></svg>
                            </a>
                            <a href="#" aria-label="YouTube" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FF0000" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.595-.417-7.182-.417-10.778 0l-1.928.169-1.926-.169c-2.434.25-4.22 2.036-4.47 4.47l-.17 1.927-.168 1.928c-.417 3.596-.417 7.182 0 10.778l.169 1.928.168 1.926c.25 2.434 2.036 4.22 4.47 4.47l1.927.17 1.928.168c3.596.417 7.182.417 10.778 0l1.928-.169 1.926-.168c2.434-.25 4.22-2.036 4.47-4.47l.17-1.927.168-1.928c.417-3.596.417-7.182 0-10.778l-.169-1.928-.168-1.926c-.25-2.434-2.036-4.22-4.47-4.47zm-1.879 1.879c1.628.167 2.929 1.468 3.097 3.097l.162 1.848.161 1.848c.167 1.628.167 3.262 0 4.89l-.161 1.848-.162 1.848c-.167 1.628-1.468 2.929-3.097 3.097l-1.848.161-1.848.161c-1.628.167-3.262.167-4.89 0l-1.848-.161-1.848-.161c-1.628-.167-2.929-1.468-3.097-3.097l-.161-1.848-.161-1.848c-.167-1.628-.167-3.262 0-4.89l.161-1.848.161-1.848c.167-1.628 1.468-2.929 3.097-3.097l1.848-.161 1.848-.161c1.628-.167 3.262-.167 4.89 0l1.848.161 1.848.161zM9.545 15.688l5.962-3.682-5.962-3.682v7.364z" /></svg>
                            </a>
                            <a href="#" aria-label="WhatsApp" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#25D366" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.968.001-6.579 5.384-11.961 11.96-11.961 3.292 0 6.337 1.31 8.646 3.619 2.31 2.31 3.61 5.354 3.612 8.648.002 6.577-5.38 11.959-11.96 11.959-1.461 0-2.915-.316-4.224-.925l-6.521 1.714zm5.875-5.922l-.462-.254c-1.353-.746-2.582-1.92-3.491-3.323l-.11-.186c-.902-1.538-1.378-3.353-1.379-5.187.001-5.698 4.636-10.334 10.334-10.334 2.766 0 5.352 1.077 7.291 3.016s3.016 4.525 3.017 7.292c.002 5.698-4.634 10.333-10.333 10.333-1.742 0-3.411-.535-4.869-1.534zm-1.868-5.068l1.794.757.757-.791c1.196-1.258 2.775-1.944 4.542-1.944 3.778 0 6.845 3.067 6.845 6.845s-3.067 6.845-6.845 6.845c-1.767 0-3.346-.686-4.542-1.944l-.757-.791-1.794.757c.218.497.697.868 1.25 1.139l1.794.757.757-.791c1.196-1.258 2.775-1.944 4.542-1.944c3.778 0 6.845 3.067 6.845 6.845s-3.067 6.845-6.845 6.845c-1.767 0-3.346-.686-4.542-1.944l-.757-.791-1.794.757z" /></svg>
                            </a>
                            <a href="#" aria-label="X (formerly Twitter)" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.179-1.55-3.593-1.55-2.715 0-4.918 2.203-4.918 4.917 0 .385.04.758.117 1.121-4.085-.205-7.712-2.152-10.138-5.118-.423.725-.667 1.563-.667 2.464 0 1.708.871 3.21 2.193 4.085-.808-.027-1.569-.247-2.227-.614v.06c0 2.383 1.698 4.379 3.952 4.832-.413.111-.849.171-1.295.171-.318 0-.626-.031-.926-.088.625 1.956 2.435 3.38 4.577 3.42-1.688 1.321-3.805 2.112-6.104 2.112-.397 0-.788-.023-1.176-.073 2.181 1.397 4.767 2.21 7.55 2.21 9.055 0 14.01-7.502 14.01-14.013 0-.214-.005-.426-.014-.637.962-.695 1.796-1.565 2.455-2.553z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-4 flex justify-center">
                    <p className="text-sm text-gray-400">&copy; All Rights Reserved | Founderoo</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;