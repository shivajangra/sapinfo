import React from 'react';
import Contact_Image from '../assets/images/resource/image-1.jpg'


class HomeContact extends React.Component {
    
     
  render() {
	  return (

		  <section className="map-info-section">
			<div className="outer-container">
				<div className="clearfix">
					<div className="left-column">
						<div className="map-outer">
							<div className="map-canvas"
								data-zoom="12"
								data-lat="-37.817085"
								data-lng="144.955631"
								data-type="roadmap"
								data-hue="#ffc400"
								data-title="Envato"
								data-icon-path="images/icons/map-marker.png"
								data-content="Sector 48 Gurgaon, India<br><a href='mailto:info@youremail.com'>info@youremail.com</a>">
							</div>
						</div>
					</div>
					<div className="right-column" styles={{ backgroundImage:`url(${Contact_Image})` }} > 
					{/* <div className="right-column" styles={{'backgroundImage':'url(require("../assets/images/resource/image-1.jpg"))'}}> */}
						<div className="content">
							<h2>Request for <span>quote</span></h2>
							<div className="text">The argument in favor of using filler text goes something like this: If you use real content in the design process.</div>
							
							
							<div className="quote-form">
									 
								<form method="post" action="#">
									<div className="row clearfix">
									
										<div className="form-group col-lg-6 col-md-6 col-sm-12">
											<input type="text" name="username" placeholder="How to assist you:*" required />
										</div>
										
										<div className="form-group col-lg-6 col-md-6 col-sm-12">
											<input type="text" name="phone" placeholder="Phone number:*" required />
										</div>
										
										<div className="form-group col-lg-6 col-md-6 col-sm-12">
											<input type="text" name="text" placeholder="Your name:*" required />
										</div>
										
										<div className="form-group col-lg-6 col-md-6 col-sm-12">
											<button type="submit" className="theme-btn btn-style-one">Submit request <span className="icon flaticon-share-option"></span></button>
										</div>
										
									</div>
								</form>
							</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</section>
		)

	}	

}

export default HomeContact;
