import React from 'react'; 
class HomeSlider extends React.Component {
    
     
  render() {
    return(
			<section className="main-slider">
			<div className="slider-outer">
				<div className="main-slider-carousel owl-carousel owl-theme">
					
					<div className="slide style-two" style={{ backgroundImage:"url('/assets/images/main-slider/4.png')"}}>
						<div className="auto-container">
							<div className="content">
								<h1 className="alternate">We take extra care <span className="alternate">of your Business</span></h1>
								<div className="text alternate">We manage financial services with your satisfaction</div>
								<div className="link-box">
									<a href="contact.html" className="theme-btn btn-style-six">Let’s start now</a> <a href="contact.html" className="theme-btn btn-style-seven">View portfolio</a>
								</div>
							</div>
							
						</div>
					</div>
					
					<div className="slide style-two" style={{ backgroundImage:"url('/assets/images/main-slider/4.png')"}}>
						<div className="auto-container">
							<div className="content">
								<h1 className="alternate">We take extra care <span className="alternate">of your Business</span></h1>
								<div className="text alternate">We manage financial services with your satisfaction</div>
								<div className="link-box">
									<a href="contact.html" className="theme-btn btn-style-six">Let’s start now</a> <a href="contact.html" className="theme-btn btn-style-seven">View portfolio</a>
								</div>
							</div>
							
						</div>
					</div>
					
				</div> 
				
				<div className="business-image-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
					<img src="/assets/images/main-slider/content-image.png" alt=""/>
				</div>
				
			</div>
		</section>
		)
  }
     
}
 
export default HomeSlider;
