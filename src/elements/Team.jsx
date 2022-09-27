import React, { Component } from "react";
import { FaFacebookF , FaLinkedinIn , FaTwitter } from "react-icons/fa";

let TeamContent = [
  {
    images: '01',
    title: 'Dr. Aymen Yahyaoui',
    designation: 'Senior AI/ML Researcher',
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: '#',
      },
      {
        icon: <FaLinkedinIn />,
        url: '#',
      },
      {
        icon: <FaTwitter />,
        url: '#',
      },
    ],
  },
  {
    images: '02',
    title: 'DVM. Aymen mosbah',
    designation: 'Senior biomedical researcher',
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: '#',
      },
      {
        icon: <FaLinkedinIn />,
        url: '#',
      },
    ],
  }
];


class Team extends Component{
    render(){
        const {column} = this.props;
        return(
            <React.Fragment>
                {TeamContent.map((value , i ) => (
                    <div className={`${column}`} key={i}>
                        <div className="team">
                            <div className="thumbnail">
                                <img src={`/assets/images/team/team-${value.images}.jpg`} alt="Blog Images"/>
                            </div>
                            <div className="content">
                                <h4 className="title">{value.title}</h4>
                                <p className="designation">{value.designation}</p>
                            </div>
                            <ul className="social-icon" >
                                {value.socialNetwork.map((social, index) =>
                                    <li key={index}><a href={`${social.url}`}>{social.icon}</a></li>
                                )}
                            </ul>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        )
    }
}
export default Team;