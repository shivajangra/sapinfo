import React from 'react';
import HomeSlider from './home_slider';
import HomeSection from './home_section';
import HomeContact from './home_contact';

class Home extends React.Component {
    
     
  render() { 
    return ( 
	    <div>
      <HomeSlider />
      <HomeSection />
       <section className="services-section-six">
        <div className="auto-container"> 
          <div className="sec-title centered">
            <div className="title">Steps for processing</div>
            <h2>Take some easy steps <br/> for <span> processing </span></h2>
          </div>
          
          <div className="outer-container">
            <div className="row clearfix">
               
              <div className="services-block-nine col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="icon-outer">
                    <div className="service-number">1</div>
                    <div className="icon-box">
                      <span className="icon flaticon-contact"></span>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h6><a href="#">Contact us first</a></h6>
                    <div className="text">Lorem ipsum dolor sit amet, csectetur adipis icing.</div>
                    <a className="contact" href="#">Contact us <span className="arrow fa fa-angle-right"></span></a>
                  </div>
                </div>
              </div>
              
              
              <div className="services-block-nine col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                  <div className="icon-outer">
                    <div className="service-number">2</div>
                    <div className="icon-box">
                      <span className="icon flaticon-network-1"></span>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h6><a href="#">Consult with us</a></h6>
                    <div className="text">Lorem ipsum dolor sit amet, csectetur adipis icing.</div>
                    <a className="contact" href="#">Contact us <span className="arrow fa fa-angle-right"></span></a>
                  </div>
                </div>
              </div>
              
              
              <div className="services-block-nine col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="icon-outer">
                    <div className="service-number">3</div>
                    <div className="icon-box">
                      <span className="icon flaticon-target"></span>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h6><a href="#">Place Order</a></h6>
                    <div className="text">Lorem ipsum dolor sit amet, csectetur adipis icing.</div>
                    <a className="contact" href="#">Contact us <span className="arrow fa fa-angle-right"></span></a>
                  </div>
                </div>
              </div>
              
              
              <div className="services-block-nine col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInUp" data-wow-delay="900ms" data-wow-duration="1500ms">
                  <div className="icon-outer">
                    <div className="service-number">4</div>
                    <div className="icon-box">
                      <span className="icon flaticon-banknote"></span>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h6><a href="#">Make Payment</a></h6>
                    <div className="text">Lorem ipsum dolor sit amet, csectetur adipis icing.</div>
                    <a className="contact" href="#">Contact us <span className="arrow fa fa-angle-right"></span></a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
      {/* Call To Action*/}
      <section className="call-to-action" style={{ backgroundImage: "url('/assets/images/background/3.jpg')"}}>
        <div className="auto-container">
          <h2>Have a great opportunity to <br/> manage your <span>finance</span></h2>
          <div className="btns-box">
            <a href="#"><img src="/assets/images/icons/app-btn.png" alt="" /></a>
            <a href="#"><img src="/assets/images/icons/google-btn.png" alt="" /></a>
          </div>
          <div className="image wow jello" data-wow-delay="0ms" data-wow-duration="1500ms">
            <img src="/assets/images/resource/app-mobile.png" alt="" />
          </div>
        </div>
      </section>
      {/* End Call To Action*/}
      
      {/* Pricing Section*/}
      <section className="pricing-section">
        <div className="auto-container"> 
          <div className="sec-title centered">
            <div className="title">Pricing</div>
            <h2>Choose the best pricing <br/> to start <span> consulting </span></h2>
            <div className="text">The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you <br/> reach a review point you’ll end up reviewing and negotiating the content itself and not the design.</div>
          </div>
          
          <div className="pricing-info-tabs"> 
            <div className="pricing-tabs tabs-box">
            
              <ul className="tab-btns tab-buttons clearfix">
                <li data-tab="#package-monthly" className="tab-btn active-btn"><span className="circle"></span> Monthly</li>
                <li data-tab="#package-yearly" className="tab-btn"><span className="circle"></span> Yearly <span className="save">Save 20%</span></li>
              </ul>
              
              <div className="tabs-content">
                
                <div className="tab active-tab" id="package-monthly">
                  <div className="content">
                    <div className="row clearfix">
                      
                      <div className="price-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box"> 
                          <div className="title-box">
                            <h5>Basic Plan</h5>
                            <div className="text">The argument in favor of using to <br/> filler text goes something.</div>
                          </div>
                          <div className="price">$29 <span>/ monthly</span></div>
                          <div className="lower-box">
                            <ul className="price-list">
                              <li>24/7 system monitoring</li>
                              <li>Security management</li>
                              <li>Secure finance backup</li>
                              <li>Remote support</li>
                            </ul>
                            <a href="#" className="theme-btn btn-style-eight">Get a free trial</a>
                          </div>
                        </div>
                      </div>
                       
                      <div className="price-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <div className="recomend">Recommended</div> 
                          <div className="title-box">
                            <h5>Standard Plan</h5>
                            <div className="text">The argument in favor of using to <br/> filler text goes something.</div>
                          </div>
                          <div className="price">$49 <span>/ monthly</span></div>
                          <div className="lower-box">
                            <ul className="price-list">
                              <li>24/7 system monitoring</li>
                              <li>Security management</li>
                              <li>Secure finance backup</li>
                              <li>Remote support</li>
                            </ul>
                            <a href="#" className="theme-btn btn-style-eight">Get a free trial</a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="price-block col-lg-4 col-md-12 col-sm-12">
                        <div className="inner-box">
                          <div className="title-box">
                            <h5>Extended Plan</h5>
                            <div className="text">The argument in favor of using to <br/> filler text goes something.</div>
                          </div>
                          <div className="price">$59 <span>/ monthly</span></div>
                          <div className="lower-box">
                            <ul className="price-list">
                              <li>24/7 system monitoring</li>
                              <li>Security management</li>
                              <li>Secure finance backup</li>
                              <li>Remote support</li>
                            </ul>
                            <a href="#" className="theme-btn btn-style-eight">Get a free trial</a>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                
                <div className="tab" id="package-yearly">
                  <div className="content">
                    
                    <div className="row clearfix">
                      
                      <div className="price-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <div className="title-box">
                            <h5>Basic Plan</h5>
                            <div className="text">The argument in favor of using to <br/> filler text goes something.</div>
                          </div>
                          <div className="price">$29 <span>/ monthly</span></div>
                          <div className="lower-box">
                            <ul className="price-list">
                              <li>24/7 system monitoring</li>
                              <li>Security management</li>
                              <li>Secure finance backup</li>
                              <li>Remote support</li>
                            </ul>
                            <a href="#" className="theme-btn btn-style-eight">Get a free trial</a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="price-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <div className="recomend">Recommended</div>
                 
                          <div className="title-box">
                            <h5>Standard Plan</h5>
                            <div className="text">The argument in favor of using to <br/> filler text goes something.</div>
                          </div>
                          <div className="price">$49 <span>/ monthly</span></div>
                          <div className="lower-box">
                            <ul className="price-list">
                              <li>24/7 system monitoring</li>
                              <li>Security management</li>
                              <li>Secure finance backup</li>
                              <li>Remote support</li>
                            </ul>
                            <a href="#" className="theme-btn btn-style-eight">Get a free trial</a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="price-block col-lg-4 col-md-12 col-sm-12">
                        <div className="inner-box">
                          <div className="title-box">
                            <h5>Extended Plan</h5>
                            <div className="text">The argument in favor of using to <br/> filler text goes something.</div>
                          </div>
                          <div className="price">$59 <span>/ monthly</span></div>
                          <div className="lower-box">
                            <ul className="price-list">
                              <li>24/7 system monitoring</li>
                              <li>Security management</li>
                              <li>Secure finance backup</li>
                              <li>Remote support</li>
                            </ul>
                            <a href="#" className="theme-btn btn-style-eight">Get a free trial</a>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Pricing Section*/}
      
      {/* News Section Two*/}
      <section className="news-section-two">
        <div className="auto-container"> 
          <div className="sec-title centered">
            <h2>Learn some new info from <br/> our latest <span>news</span></h2>
            <div className="text">The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you <br/> reach a review point you’ll end up reviewing and negotiating the content itself and not the design.</div>
          </div>
          
          <div className="row clearfix">
            
            <br/>
            <div className="news-block-four col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="image">
                  <img src="/assets/images/resource/news-4.jpg" alt="" />
                  <div className="overlay-box">
                    <a href="/assets/images/resource/news-4.jpg" data-fancybox="news" data-caption="" className="plus flaticon-plus-symbol"></a>
                  </div>
                </div>
                <div className="lower-content">
                  <ul className="post-meta">
                    <li><span className="fa fa-calendar"></span>September 12, 2019</li>
                    <li><span className="fa fa-user"></span>Admin</li>
                  </ul>
                  <h5><a href="blog-single.html">Strategy for Norway's Peion Fund Global.</a></h5>
                  <a href="#" className="theme-btn btn-style-eighteen">View more</a>
                </div>
              </div>
            </div>
            
            <br/>
            <div className="news-block-four col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="image">
                  <img src="/assets/images/resource/news-5.jpg" alt="" />
                  <div className="overlay-box">
                    <a href="/assets/images/resource/news-5.jpg" data-fancybox="news" data-caption="" className="plus flaticon-plus-symbol"></a>
                  </div>
                </div>
                <div className="lower-content">
                  <ul className="post-meta">
                    <li><span className="fa fa-calendar"></span>September 12, 2019</li>
                    <li><span className="fa fa-user"></span>Admin</li>
                  </ul>
                  <h5><a href="blog-single.html">What we are capable of usually gets discovered.</a></h5>
                  <a href="#" className="theme-btn btn-style-eighteen">View more</a>
                </div>
              </div>
            </div>
            
            <br/>
            <div className="news-block-four col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="image">
                  <img src="/assets/images/resource/news-6.jpg" alt="" />
                  <div className="overlay-box">
                    <a href="/assets/images/resource/news-6.jpg" data-fancybox="news" data-caption="" className="plus flaticon-plus-symbol"></a>
                  </div>
                </div>
                <div className="lower-content">
                  <ul className="post-meta">
                    <li><span className="fa fa-calendar"></span>September 12, 2019</li>
                    <li><span className="fa fa-user"></span>Admin</li>
                  </ul>
                  <h5><a href="blog-single.html">Food industry leaders often change their promoters.</a></h5>
                  <a href="#" className="theme-btn btn-style-eighteen">View more</a>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </section>
       
      <section className="sponsors-section">
        <div className="auto-container">
          
          <div className="carousel-outer"> 
                    <ul className="sponsors-carousel owl-carousel owl-theme">
                        <li><div className="image-box"><a href="#"><img src="/assets/images/clients/1.png" alt="" /></a></div></li>
                        <li><div className="image-box"><a href="#"><img src="/assets/images/clients/2.png" alt="" /></a></div></li>
                        <li><div className="image-box"><a href="#"><img src="/assets/images/clients/3.png" alt="" /></a></div></li>
                        <li><div className="image-box"><a href="#"><img src="/assets/images/clients/4.png" alt="" /></a></div></li>
                        <li><div className="image-box"><a href="#"><img src="/assets/images/clients/5.png" alt="" /></a></div></li>
                        <li><div className="image-box"><a href="#"><img src="/assets/images/clients/6.png" alt="" /></a></div></li>
                        <li><div className="image-box"><a href="#"><img src="/assets/images/clients/1.png" alt="" /></a></div></li>
                        <li><div className="image-box"><a href="#"><img src="/assets/images/clients/2.png" alt="" /></a></div></li>
                        <li><div className="image-box"><a href="#"><img src="/assets/images/clients/3.png" alt="" /></a></div></li>
                        <li><div className="image-box"><a href="#"><img src="/assets/images/clients/4.png" alt="" /></a></div></li>
                        <li><div className="image-box"><a href="#"><img src="/assets/images/clients/5.png" alt="" /></a></div></li>
                        <li><div className="image-box"><a href="#"><img src="/assets/images/clients/6.png" alt="" /></a></div></li>
                    </ul>
                </div>
          
        </div>
      </section> 
      <HomeContact />
      </div>

    )
  }
     
}
 
export default Home;