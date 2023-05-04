import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "./common/Breadcrumb";
import BlogList from "./blog/Events";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderThree";
import Footer from "../component/footer/FooterTwo";

const EventContent = [
  {
    images: '1',
    title: 'Blood Scan Documentation',
    Place: '',
    Time: "",
    url: 'https://pdfhost.io/v/ywVLmut0s_blood_scan',
  },
  {
    images: '2',
    title: 'Drug Scan Documentation',
    Place: '',
    Time: "",
    url: 'https://pdfhost.io/v/aeb.WzM~5_Bright_Blue',
  }
 
];

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
            <Breadcrumb title={'Models Documentation'} />
            {/* End Breadcrump Area */}

            {/* Start Blog Area */}
            <div className='rn-blog-area ptb--120 bg_color--1'>
              <div className='container'>
            <div className='row'>
              {EventContent.map((value, i) => (
                <div className='col-lg-4 col-md-6 col-sm-6 col-12' key={i}>
                  <div className='blog blog-style--2'>
                    <div className='thumbnail'>
                      <a href='/blog-details'>
                        <img
                          className='w-100'
                          src={`/assets/images/docs/${value.images}.jpg`}
                          alt='Blog Images'
                        />
                      </a>
                    </div>
                    <div className='content'>
                      {/* <p className='blogtype'>
                        <FiMapPin />
                        {value.Place} | <FiWatch />
                        {value.Time}
                      </p> */}
                      <h4 className='title'>
                        <a href={value.url}>{value.title}</a>
                      </h4>
                      <div className='blog-btn'>
                        <a className='rn-btn2 text-white' href={value.url}>
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
