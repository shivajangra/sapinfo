import React from 'react';
import './index.css';

function Header(){
    return (
        <header className="main-header header-style-three"> 
            <div className="header-upper">
                <div className="auto-container">
                    <div className="clearfix">
                        
                        <div className="pull-left logo-box">
                            <div className="logo"><a href="index.html"><img src="/assets/images/logo.png" alt="Logo" title="Logo" /></a></div>
                        </div>
                        
                        <div className="nav-outer clearfix">
                         
                            <nav className="main-menu navbar-expand-md">
                                <div className="navbar-header">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>

                                <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                        <li className="current dropdown"><a href="#">Home</a>
                                            <ul>
                                                <li><a href="index.html">Home Page 01</a></li>
                                                <li><a href="index-2.html">Home Page 02</a></li>
                                                <li><a href="index-3.html">Home Page 03</a></li>
                                                <li><a href="index-4.html">Home Page 04</a></li>
                                                <li><a href="index-5.html">Home Page 05</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="#">About Us</a>
                                            <ul>
                                                <li><a href="about.html">About Us</a></li>
                                                <li><a href="team.html">Our Team</a></li>
                                                <li><a href="case-studies.html">Case Studies</a></li>
                                                <li><a href="testimonial.html">Testimonial</a></li>
                                                <li><a href="not-found.html">Error Page</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="#">Services</a>
                                            <ul>
                                                <li><a href="services.html">Services</a></li>
                                                <li><a href="services-2.html">Services Two</a></li>
                                                <li><a href="services-single.html">Services Single</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="#">Portfolio</a>
                                            <ul>
                                                <li><a href="portfolio-2-column.html">Portfolio Two Column</a></li>
                                                <li><a href="portfolio-3-column.html">Portfolio Three Column</a></li>
                                                <li><a href="portfolio-4-column.html">Portfolio Four Column</a></li>
                                                <li><a href="portfolio-masonry.html">Portfolio Masonry</a></li>
                                                <li><a href="portfolio-single.html">Portfolio Single</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="#">Blog</a>
                                            <ul>
                                                <li><a href="blog.html">Our Blog</a></li>
                                                <li><a href="blog-list.html">Blog List</a></li>
                                                <li><a href="blog-single.html">Blog Single</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact us</a></li>
                                    </ul>
                                </div>
                                
                            </nav>
                            
                            <div className="outer-box"> 
                                <div className="nav-toggler"><span className="flaticon-menu"></span></div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
    
            <div className="sticky-header">
                <div className="auto-container clearfix"> 
                    <div className="logo pull-left">
                        <a href="index.html" className="img-responsive"><img src="/assets/images/logo.png" alt="" title="" /></a>
                    </div>
                    
                    <div className="right-col pull-right"> 
                        <nav className="main-menu navbar-expand-md">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            
                            <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent1">
                                <ul className="navigation clearfix">
                                    <li className="current dropdown"><a href="#">Home</a>
                                        <ul>
                                            <li><a href="index.html">Home Page 01</a></li>
                                            <li><a href="index-2.html">Home Page 02</a></li>
                                            <li><a href="index-3.html">Home Page 03</a></li>
                                            <li><a href="index-4.html">Home Page 04</a></li>
                                            <li><a href="index-5.html">Home Page 05</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="#">About Us</a>
                                        <ul>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="team.html">Our Team</a></li>
                                            <li><a href="case-studies.html">Case Studies</a></li>
                                            <li><a href="testimonial.html">Testimonial</a></li>
                                            <li><a href="not-found.html">Error Page</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="#">Services</a>
                                        <ul>
                                            <li><a href="services.html">Services</a></li>
                                            <li><a href="services-2.html">Services Two</a></li>
                                            <li><a href="services-single.html">Services Single</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="#">Portfolio</a>
                                        <ul>
                                            <li><a href="portfolio-2-column.html">Portfolio Two Column</a></li>
                                            <li><a href="portfolio-3-column.html">Portfolio Three Column</a></li>
                                            <li><a href="portfolio-4-column.html">Portfolio Four Column</a></li>
                                            <li><a href="portfolio-masonry.html">Portfolio Masonry</a></li>
                                            <li><a href="portfolio-single.html">Portfolio Single</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="#">Blog</a>
                                        <ul>
                                            <li><a href="blog.html">Our Blog</a></li>
                                            <li><a href="blog-list.html">Blog List</a></li>
                                            <li><a href="blog-single.html">Blog Single</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact us</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    
                </div>
            </div> 
            
        </header>
        )
}

export default Header;