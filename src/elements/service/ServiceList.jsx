import React ,{ Component }from "react";
import { FiDroplet} from 'react-icons/fi';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';
import { FaFish } from 'react-icons/fa'
import Badge from '@mui/material/Badge';

const ServiceList = [
  {
    icon: <FaFish />,
    title: 'Aqua Scan',
    description:
      'Aquaculture management system',
  },
  {
    icon: <LunchDiningOutlinedIcon sx={{ fontSize: 50 }} />,
    title: 'Food Scan',
    description:
      'Food safety assessments',
  },
  // {
  //   icon: <VaccinesOutlinedIcon sx={{ fontSize: 50 }} />,
  //   title: 'Immuno Scan',
  //   description:
  //     'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  // },
  {
    icon: <MedicationOutlinedIcon sx={{ fontSize: 50 }} />,
    title: 'Drug Scan',
    description:
      'Drug combination to reduce therapeutic failure',
  },
];

const ServiceListReady = [
  {
    icon: <FiDroplet />,
    title: 'Blood Scan',
    description:
      'Blood Cells anomalies detection',
    url: 'http://www.bloodscan.tn:5000',
  },
  {
    icon: <CoronavirusOutlinedIcon sx={{ fontSize: 50 }} />,
    title: 'ATB Scan',
    description:
      'Antibiotic susceptibility test interpretation',
    url: 'http://www.atbscan.tech:5000',
  },
  {
    icon: <VaccinesOutlinedIcon sx={{ fontSize: 50 }} />,
    title: 'Tick Scan ',
    description:
      'Ectoparasite identification',
    url: 'http://tickscan.icarda.org/',
  }
];




class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        
        return (
          <React.Fragment>
            <div className='row'>
              {ServiceListReady.map((val, i) => (
                <div className={`${column}`} key={i}>
                  <a href={val.url}>
                    <div className='service service__style--2'>
                      <Badge badgeContent={0} color='warning'>
                        <div className='icon'>{val.icon}</div>
                        <div className='content'>
                          <h3 className='title'> &nbsp;{val.title}</h3>
                          <p>{val.description}</p>
                        </div>
                      </Badge>{' '}
                    </div>
                  </a>
                </div>
              ))}
              {ServiceList.map((val, i) => (
                <div className={`${column}`} key={i}>
                  {' '}
                  <div className='service service__style--2'>
                    {' '}
                    <Badge badgeContent={'Under construction'} color='warning'>
                      <div className='icon'>{val.icon}</div>
                      <div className='content'>
                        <h3 className='title'>{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </Badge>{' '}
                  </div>{' '}
                </div>
              ))}
            </div>
          </React.Fragment>
        );
    }
}
export default ServiceThree;
