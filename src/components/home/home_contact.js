import React from 'react';
 
class HomeContact extends React.Component {
    
     
  render() {
	  return (
			<section>
				<div className="row" > 
					<div className="col-sm-12" > 
							<h3 className="text-center text-black text-bold">HAVE SOME QUESTIONS?</h3>
							<p className="text-center text-black">Q 271, South City II, Gurgaon, Hayrana - 122018</p> 
					</div>
					<div className="col-sm-12 row"> 
						<div className="col-sm-6">
							<img alt="contact_us" className="contactus_box" src="https://dd7tel2830j4w.cloudfront.net/f1505468260832x993779528886079700/letter.svg" />
						</div>
						<div className="col-sm-6">
						    <div className="bubble-element Group contactus_box" >
								<div className="col-md-12" >
									<input type="input" className="bubble-element Input" placeholder="First Name" maxLength="" />
								</div>
							
								<div className="col-md-12" >
									<input type="input" className="bubble-element Input" placeholder="Last Name" maxLength="" />
								</div>
							
								<div className="col-md-12" >
									<input type="email" className="bubble-element Input" placeholder="What's your email?" maxLength="" />
								</div>
							
								<div className="col-md-12" >
									<textarea className="bubble-element MultiLineInput Input" data-gramm_editor="false" placeholder="Your questions..." maxLength="" tabIndex="4"></textarea>
								</div>
							
								<div className="text-center" >
									<button className="theme-btn btn-style-six">Leave Message</button>
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
