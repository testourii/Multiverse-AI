import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import BlogList from "../elements/blog/Events";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderThree";
import Footer from "../component/footer/FooterTwo";

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
            <Breadcrumb title={'Events'} />
            {/* End Breadcrump Area */}

            {/* Start Blog Area */}
            <div className='rn-blog-area ptb--120 bg_color--1'>
              <div className='container'>
                <BlogList />
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
