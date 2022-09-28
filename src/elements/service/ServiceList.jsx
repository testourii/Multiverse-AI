import React ,{ Component }from "react";
import { FiDroplet} from 'react-icons/fi';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';
import { FaFish } from 'react-icons/fa'
const ServiceList = [
  {
    icon: <FiDroplet />,
    title: 'Blood Scan',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <CoronavirusOutlinedIcon sx={{ fontSize: 50 }} />,
    title: 'ATB Scan',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <FaFish />,
    title: 'Aqua Scan',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <LunchDiningOutlinedIcon sx={{ fontSize: 50 }} />,
    title: 'Food Scan',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <VaccinesOutlinedIcon sx={{ fontSize: 50 }} />,
    title: 'Immuno Scan',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <MedicationOutlinedIcon sx={{ fontSize: 50 }} />,
    title: 'Drug Scan',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
];


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
