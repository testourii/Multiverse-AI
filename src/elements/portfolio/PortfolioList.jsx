import React, { Component } from "react";

import {  FaLinkedinIn } from "react-icons/fa";

let TeamContent = [
  {
    images: 'Takwa',
    title: 'Dr. Takoua Abdellatif',
    designation: 'Associate professor',
    socialNetwork: [
    
      {
        icon: <FaLinkedinIn />,
        url: '#',
      },
    ],
  },
  {
    images: 'ramzi',
    title: 'Mr. Ramzi Zelfani',
    designation: 'Senior IT Engineer',
    socialNetwork: [
     
      {
        icon: <FaLinkedinIn />,
        url: '#',
      }
    ],
  }
];


class PortfolioList extends Component{
    render(){
        const {column} = this.props;
        return (
          <React.Fragment>
            {TeamContent.map((value, i) => (
              <div className={`${column}`} key={i}>
                <div className='team'>
                  <div className='thumbnail'>
                    <img
                      src={`/assets/images/portfolio/${value.images}.jpg`}
                      alt='Blog Images'
                    />
                  </div>
                  <div className='content'>
                    <h4 className='title'>{value.title}</h4>
                    <p className='designation'>{value.designation}</p>
                  </div>
                  <ul className='social-icon'>
                    {value.socialNetwork.map((social, index) => (
                      <li key={index}>
                        <a href={`${social.url}`}>{social.icon}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </React.Fragment>
        );
    }
}
export default PortfolioList;