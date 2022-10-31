import React, { Component ,Fragment } from "react";
import EventContent from "./EventContent";
import { FiMapPin, FiWatch } from 'react-icons/fi';

class BLogList extends Component{
    render() {
        return (
          <Fragment>
            <div className='row'>
              {EventContent.map((value, i) => (
                <div className='col-lg-4 col-md-6 col-sm-6 col-12' key={i}>
                  <div className='blog blog-style--2'>
                    <div className='thumbnail'>
                      <a href='/blog-details'>
                        <img
                          className='w-100'
                          src={`/assets/images/blog/${value.images}.jpg`}
                          alt='Blog Images'
                        />
                      </a>
                    </div>
                    <div className='content'>
                      <p className='blogtype'>
                        <FiMapPin />
                        {value.Place} | <FiWatch />
                        {value.Time}
                      </p>
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
          </Fragment>
        );
    }
}
export default BLogList;