import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "./common/Breadcrumb";
import BlogList from "./blog/Events";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderThree";
import Footer from "../component/footer/FooterTwo";
import ServiceList from '../elements/service/ServiceList';

class Blog extends Component{
    render(){
        return (
          <React.Fragment>
            <PageHelmet pageTitle='Events' />

            <Header
              headertransparent='header--transparent'
              homeLink='/'
              logo='symbol-dark'
            />
            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Models'} />
            {/* End Breadcrump Area */}

            {/* Start Blog Area */}
            <div id='models' className='fix'>
              <div className='service-area creative-service-wrapper ptb--120 bg_color--1'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className='section-title text-left mb--30'>
                        <h2>Our Models</h2>
                        <p>
                          We propose a set of anomaly detection modules to
                          recognize hidden patterns within big data structures,
                          model them and offer the best course of action for
                          risk mitigation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='row creative-service'>
                    <div className='col-lg-12'>
                      <ServiceList
                        item='6'
                        column='col-lg-4 col-md-6 col-sm-6 col-12 text-left'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Blog Area */}

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
export default Blog;
