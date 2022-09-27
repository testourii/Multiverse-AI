import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Testimonial extends Component{
    render(){
        return (
          <React.Fragment>
            <div className='row'>
              <div className='col-lg-12'>
                <Tabs>
                  <TabPanel>
                    <div className='rn-testimonial-content text-center'>
                      <div className='inner'>
                        <p>Polytechnic School of Tunisia</p>
                      </div>
                      {/* <div className="author-info">
                                        <h6><span>Aklima </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div> */}
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className='rn-testimonial-content text-center'>
                      <div className='inner'>
                        <p>
                          National school of veterinary medicine of sidi thabet
                        </p>
                      </div>
                      {/* <div className="author-info">
                                        <h6><span>Fatima Asrafy </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div> */}
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className='rn-testimonial-content text-center'>
                      <div className='inner'>
                        <p>Faculty of Pharmacy of Monastir</p>
                      </div>
                      {/* <div className="author-info">
                                        <h6><span>Jannat Tumpa </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div> */}
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className='rn-testimonial-content text-center'>
                      <div className='inner'>
                        <p>
                          International Center for Agricultural Research in the
                          Dry Areas
                        </p>
                      </div>
                      {/* <div className="author-info">
                                        <h6><span>Johns Due </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div> */}
                    </div>
                  </TabPanel>
                  

                  <TabList className='testimonial-thumb-wrapper'>
                    <Tab>
                      <div className='testimonial-thumbnai'>
                        <div className='thumb'>
                          <img
                            src='/assets/images/client/EPT.jpg'
                            alt='Testimonial Images'
                          />
                        </div>
                      </div>
                    </Tab>
                    <Tab>
                      <div className='testimonial-thumbnai'>
                        <div className='thumb'>
                          <img
                            src='/assets/images/client/ENMV.png'
                            alt='Testimonial Images'
                          />
                        </div>
                      </div>
                    </Tab>
                    <Tab>
                      <div className='testimonial-thumbnai'>
                        <div className='thumb'>
                          <img
                            src='/assets/images/client/FPM.png'
                            alt='Testimonial Images'
                          />
                        </div>
                      </div>
                    </Tab>
                    <Tab>
                      <div className='testimonial-thumbnai'>
                        <div className='thumb'>
                          <img
                            src='/assets/images/client/ICARDA.png'
                            alt='Testimonial Images'
                          />
                        </div>
                      </div>
                    </Tab>
                  
                  </TabList>
                </Tabs>
              </div>
            </div>
          </React.Fragment>
        );
    }
}
export default Testimonial;