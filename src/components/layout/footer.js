import React from 'react';

function Footer(){
    return ( 
        <footer className="main-footer">
			<div className="auto-container">
				<div className="widgets-section">
					<div className="row clearfix">
						
						<div className="big-column col-lg-6 col-md-12 col-sm-12">
							<div className="row clearfix">
							
								<div className="footer-column col-lg-7 col-md-6 col-sm-12">
									<div className="footer-widget logo-widget">
										<div className="logo">
											<a href="index.html"><img src="images/footer-logo.png" alt="" /></a>
										</div>
										<div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
										<ul className="list-style-two">
											<li><span className="icon fa fa-phone"></span> +91 8222999949</li>
											<li><span className="icon fa fa-envelope"></span> info@saptech.com</li>
											<li><span className="icon fa fa-home"></span>271 Q South City II, Gurgaon <br/> Haryana - 122018, India</li>
										</ul>
									</div>
								</div>
								
								<div className="footer-column col-lg-5 col-md-6 col-sm-12">
									<div className="footer-widget links-widget">
										<h4>Links</h4>
										<ul className="list-link">
											<li><a href="#">Home</a></li>
											<li><a href="#">Services</a></li>
											<li><a href="#">About us</a></li>
											<li><a href="#">Testimonials</a></li>
											<li><a href="#">News</a></li>
											<li><a href="#">Contact</a></li>
										</ul>
									</div>
								</div>

							</div>
						</div>
						
						<div className="big-column col-lg-6 col-md-12 col-sm-12">
							<div className="row clearfix">
							
								<div className="footer-column col-lg-6 col-md-6 col-sm-12">
									<div className="footer-widget links-widget">
										<h4>Support</h4>
										<ul className="list-link">
											<li><a href="#">Contact Us</a></li>
											<li><a href="#">Submit a Ticket</a></li>
											<li><a href="#">Visit Knowledge Base</a></li>
											<li><a href="#">Support System</a></li>
											<li><a href="#">Refund Policy</a></li>
											<li><a href="#">Professional Services</a></li>
										</ul>
									</div>
								</div>
								
								
								<div className="footer-column col-lg-6 col-md-6 col-sm-12">
									<div className="footer-widget gallery-widget">
										<h4>Gallery</h4>
										<div className="widget-content">
											<div className="images-outer clearfix">
												
												<figure className="image-box"><a href="images/gallery/1.jpg" className="lightbox-image" data-fancybox="footer-gallery" title="Image Title Here" data-fancybox-group="footer-gallery"><img src="images/gallery/footer-gallery-thumb-1.jpg" alt="" /></a></figure>
												
												<figure className="image-box"><a href="images/gallery/2.jpg" className="lightbox-image" data-fancybox="footer-gallery" title="Image Title Here" data-fancybox-group="footer-gallery"><img src="images/gallery/footer-gallery-thumb-2.jpg" alt="" /></a></figure>
												
												<figure className="image-box"><a href="images/gallery/3.jpg" className="lightbox-image" data-fancybox="footer-gallery" title="Image Title Here" data-fancybox-group="footer-gallery"><img src="images/gallery/footer-gallery-thumb-3.jpg" alt="" /></a></figure>
												
												<figure className="image-box"><a href="images/gallery/4.jpg" className="lightbox-image" data-fancybox="footer-gallery" title="Image Title Here" data-fancybox-group="footer-gallery"><img src="images/gallery/footer-gallery-thumb-4.jpg" alt="" /></a></figure>
												
												<figure className="image-box"><a href="images/gallery/5.jpg" className="lightbox-image" data-fancybox="footer-gallery" title="Image Title Here" data-fancybox-group="footer-gallery"><img src="images/gallery/footer-gallery-thumb-5.jpg" alt="" /></a></figure>
												
												<figure className="image-box"><a href="images/gallery/6.jpg" className="lightbox-image" data-fancybox="footer-gallery" title="Image Title Here" data-fancybox-group="footer-gallery"><img src="images/gallery/footer-gallery-thumb-6.jpg" alt="" /></a></figure>
											</div>
										</div>
									</div>
								</div>
								
							</div>
						</div>
						
					</div>
				</div>
			</div> 
			<div className="footer-bottom">
				<div className="auto-container">
					<div className="row clearfix">
						
						<div className="copyright-column col-lg-6 col-md-6 col-sm-12">
							<div className="copyright">2020 &copy; All rights reserved by <a href="#">SAP Infotech</a></div>
						</div>
						
						<div className="social-column col-lg-6 col-md-6 col-sm-12">
							<ul>
								<li className="follow">Follow us: </li>
								<li><a href="#"><span className="fa fa-facebook-square"></span></a></li>
								<li><a href="#"><span className="fa fa-twitter-square"></span></a></li>
								<li><a href="#"><span className="fa fa-linkedin-square"></span></a></li>
								<li><a href="#"><span className="fa fa-google-plus-square"></span></a></li>
								<li><a href="#"><span className="fa fa-rss-square"></span></a></li>
							</ul>
						</div>
						
					</div>
				</div>
			</div>
		</footer> 
        )
}

export default Footer;