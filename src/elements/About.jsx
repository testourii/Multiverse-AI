import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from '../component/header/HeaderThree';
import Footer from '../component/footer/FooterTwo';
const starndardService = [
  {
    image: '01',
    title:
      'Multiverse AI won the 2nd prize at the NVIDIA Computer Vision Hack challenge',
    description: '',
  },
];

class About extends Component{
    render(){
         return (
          <React.Fragment>
            <PageHelmet pageTitle='News' />

            <Header
              headertransparent='header--transparent'
              colorblack='color--black'
              logo='symbol-dark'
            />
            {/* Start Breadcrump Area */}
            <Breadcrumb title={'News'} />
            {/* End Breadcrump Area */}

            {/* Start Featured Service Area  */}
            <div className='rn-featured-service-area pt--90 pb--120 bg_color--5'>
              <div className='container'>
                <div className='row'>
                  {/* Start Single Service  */}
                  <div className='col-lg-3 col-md-6 col-12 mt--30'>
                    <div className='section-title'>
                      <h2 className='title'>News</h2>
                    </div>
                  </div>
                  {/* End Single Service  */}

                  {/* Start Single Service  */}
                  <div className='col-lg-9'>
                    <div className='row'>
                      {starndardService.map((value, index) => (
                        <div className='col-lg-4 col-md-4 mt--30' key={index}>
                          <div className='standard-service'>
                            <div className='thumbnai'>
                              <img
                                src={`/assets/images/featured/${value.image}.jpg`}
                                alt='Corporate Images'
                              />
                            </div>
                            <div className='content'>
                              <h3>
                                <a href='https://www.facebook.com/AIHackTunisia/videos/650454373092456/'>
                                  {value.title}
                                </a>
                              </h3>
                              <p>{value.description}</p>
                              <a
                                className='btn-transparent rn-btn-dark'
                                href='https://www.facebook.com/AIHackTunisia/videos/650454373092456/'
                              >
                                <span className='text'>Read More</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* End Single Service  */}
                </div>
              </div>
            </div>
            {/* End Featured Service Area  */}
            {/* Start CounterUp Area */}
            <div className='rn-counterup-area pb--120 bg_color--1'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='section-title text-center'>
                      <h3 className='fontWeight500'>
                        Our Participation Facts in The AI Hack Tunisia 2022
                      </h3>
                    </div>
                  </div>
                </div>
                <CounterOne />
              </div>
            </div>
            {/* End CounterUp Area */}

            {/* Start Back To Top */}
            <div className='backto-top'>
              <ScrollToTop showUnder={160}>
                <FiChevronUp />
              </ScrollToTop>
            </div>
            {/* End Back To Top */}

            <Footer />
          </React.Fragment>
        );
    }
}
export default About