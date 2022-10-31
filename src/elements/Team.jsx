import React, { Component } from "react";
// import { FaFacebookF , FaLinkedinIn , FaTwitter } from "react-icons/fa";

// let TeamContent = [
//   {
//     images: 'aymen',
//     title: 'Dr. Aymen Yahyaoui',
//     designation: 'Senior AI/ML Researcher',
//     socialNetwork: [
//       {
//         icon: <FaFacebookF />,
//         url: '#',
//       },
//       {
//         icon: <FaLinkedinIn />,
//         url: '#',
//       },
//       {
//         icon: <FaTwitter />,
//         url: '#',
//       },
//     ],
//   },
//   {
//     images: 'mosbah',
//     title: 'DVM. Aymen mosbah',
//     designation: 'Senior biomedical researcher',
//     socialNetwork: [
//       {
//         icon: <FaFacebookF />,
//         url: '#',
//       },
//       {
//         icon: <FaLinkedinIn />,
//         url: '#',
//       },
//     ],
//   }
// ];


class Team extends Component{
    render(){
        // const {column} = this.props;
        return (
          // <React.Fragment>
          //   {TeamContent.map((value, i) => (
          //     <div className={`${column}`} key={i}>
          //       <div className='team'>
          //         <img
          //           src={`/assets/images/team/${value.images}.jpg`}
          //           alt='Blog Images'
          //         />
          //       </div>
          //     </div>
          //   ))}
          // </React.Fragment>
          <img
            src={`/assets/images/team/Team.png`}
            alt='Blog Images'
          />
        );
    }
}
export default Team;