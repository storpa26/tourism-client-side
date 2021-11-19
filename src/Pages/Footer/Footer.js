import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div className="mt-5">
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">We have been serving our customers for 5 years now. Everyone is satisfied with our service. Travelling is the best medicine for a depressed soul. We are here to help you and make your journey easier. Your satisfaction is our only concern.</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li>Home</li>
                                <li>Services</li>
                                <li>Contact Us</li>
                                <li>Help</li>
                                <li>Email</li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="http://scanfcode.com/about/">About Us</a></li>
                                <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                                <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                                <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                                Storpa.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;