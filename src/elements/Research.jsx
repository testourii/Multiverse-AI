import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "./common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderThree";
import Footer from "../component/footer/FooterTwo";
import PostList from '../elements/blog/BlogContent';

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
            <Breadcrumb title={'Research'} />
            {/* End Breadcrump Area */}

            {/* Start Blog Area */}
            <div id='research' className='fix'>
              <div className='rn-blog-area ptb--120 bg_color--1 mb-dec--30'>
                <div className='container'>
                  <div className='row align-items-end'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                      <div className='section-title text-center'>
                       
                        <p>
                          One of most important goals of Multiverse AI is to
                          contribute in the research domain and promote AI and
                          its use to propose innovative and scientific solutions
                          related to Agrihealth and Computational Biology.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='row mt--60 mt_sm--40'>
                    {PostList.map((value, i) => (
                      <div className='col-lg-4 col-md-6 col-12' key={i}>
                        <div className='blog blog-style--1'>
                          <div className='thumbnail'>
                            <a href={value.url}>
                              <img
                                className='w-100'
                                src={`/assets/images/blog/blog-${value.images}.jpg`}
                                alt='Blog Images'
                              />
                            </a>
                          </div>
                          <div className='content'>
                            <p className='blogtype'>{value.category}</p>
                            <h4 className='title'>
                              <a href={value.url}>{value.title}</a>
                            </h4>
                            <div className='blog-btn'>
                              <a className='rn-btn text-white' href={value.url}>
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
