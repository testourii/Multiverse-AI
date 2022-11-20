import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import Helmet from '../component/common/Helmet';
import HeaderThree from '../component/header/HeaderThree';
import FooterTwo from '../component/footer/FooterTwo';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import ContactThree from '../elements/contact/ContactThree';
import PortfolioList from '../elements/portfolio/PortfolioList';
import BlogContent from '../elements/blog/BlogContent';
import Slider from 'react-slick';

// import CounterOne from '../elements/counters/CounterOne';
import Testimonial from '../elements/Testimonial';
import Goals from '../elements/Goals';
import Team from '../elements/Team';

const slideSlick = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  fade: true,
  easing: 'fade',
  adaptiveHeight: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  pauseOnHover: false,
};

const SlideList = [
  {
    textPosition: 'text-center',
    category: '',
    bgImage: 'bg_image--28',
    title: 'Multiverse AI',
    description:
      'AI-Empowered Digital Transition towards Sustainable Development.',
    buttonText: 'Blood Scan',
    buttonLink: 'http://www.bloodscan.tn:5000',
  },
  {
    textPosition: 'text-center',
    bgImage: 'bg_image--33',
    category: '',
    title: 'Better lives through livestock',
    description:
      'We work to improve food security and reduce poverty through research for better and more sustainable use of livestock',
    buttonText: 'Read more',
    buttonLink: '',
  },
  {
    textPosition: 'text-center',
    bgImage: 'bg_image--31',
    category: '',
    title: 'Why livestock matter',
    description:
      'Livestock in developing countries contribute up to 80% of agricultural GDP; 600 million rural poor people rely on livestock for their livelihoods.',
    buttonText: 'Read more',
    buttonLink: '',
  },
  {
    textPosition: 'text-center',
    bgImage: 'bg_image--32',
    category: '',
    title: 'ILRI at COP 27.',
    description:
      'ILRI and partners will be engaging in a number of events during the  27th session of the Conference of the Partiesto the UNFCCC, happening from 7-18 November 2022, Sharm El-Sheikh, Egypt.',
    buttonText: 'Read more',
    buttonLink: '',
  },
];
const PortfolioLanding = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  const PostList = [BlogContent[6], BlogContent[7], BlogContent[8]];
  return (
    <div>
      <Helmet pageTitle='Multiverse AI' />

      <HeaderThree
        homeLink='/'
        headertransparent='header--transparent'
        logo='symbol-dark'
      />
      {/* Start Slider Area   */}
      <div
        className='slider-activation slider-creative-agency with-particles'
        id='home'
      >
        <div className='slider-wrapper'>
          <div className='slider-activation slider-startup'>
            <Slider className='rn-slick-dot dot-light' {...slideSlick}>
              {SlideList.map((value, index) => (
                // Start Single Slider
                <div
                  className={`slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image ${value.bgImage}`}
                  key={index}
                >
                  {' '}
                { value.title==="Multiverse AI" && <div className='frame-layout__particles'>
                    <Particles
                      id='tsparticles'
                      init={particlesInit}
                      loaded={particlesLoaded}
                      options={{
                        fullScreen: { enable: false },
                        fpsLimit: 30,
                        interactivity: {
                          events: {
                            onClick: {
                              enable: true,
                              mode: 'push',
                            },
                            onHover: {
                              enable: true,
                              mode: 'repulse',
                            },
                            resize: true,
                          },
                          modes: {
                            push: {
                              quantity: 4,
                            },
                            repulse: {
                              distance: 200,
                              duration: 0.4,
                            },
                          },
                        },
                        particles: {
                          color: {
                            value: '#ffffff',
                          },
                          links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                          },
                          collisions: {
                            enable: true,
                          },
                          move: {
                            directions: 'none',
                            enable: true,
                            outModes: {
                              default: 'bounce',
                            },
                            random: false,
                            speed: 3,
                            straight: false,
                          },
                          number: {
                            density: {
                              enable: true,
                              area: 1600,
                            },
                            value: 80,
                          },
                          opacity: {
                            value: 0.5,
                          },
                          shape: {
                            type: 'circle',
                          },
                          size: {
                            value: { min: 1, max: 5 },
                          },
                        },
                        detectRetina: true,
                      }}
                    />{' '}
                  </div>}
                  <div className='container'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className={`inner ${value.textPosition}`}>
                          {value.category ? <span>{value.category}</span> : ''}
                          {value.title ? (
                            <h1 className='title theme-gradient'>
                              {value.title}
                            </h1>
                          ) : (
                            ''
                          )}
                          {value.description ? (
                            <p className='description'>{value.description}</p>
                          ) : (
                            ''
                          )}
                          {value.buttonText ? (
                            <div className='slide-btn'>
                              <a
                                className='rn-button-style--2 btn-primary-color'
                                href={`${value.buttonLink}`}
                              >
                                {value.buttonText}
                              </a>
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                // End Single Slider
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* End Slider Area   */}

      <div className='rn-testimonial-area bg_color--1 ptb--120' id='SDG'>
        <div className='container'>
          <div className='col-lg-12'>
            <div className='section-title text-center service-style--3 mb--30 mb_sm--0'>
              <h2 className='title'>Sustainable Development Goals</h2>
            </div>
          </div>
          <Goals />
        </div>
      </div>
      {/* Start Service Area  */}

      {/* End Service Area  */}

      {/* Start Research Area */}
      <div id='research' className='fix'>
        <div className='rn-blog-area ptb--120 bg_color--1 mb-dec--30'>
          <div className='container'>
            <div className='row align-items-end'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                <div className='section-title text-center'>
                  <h2>Research</h2>
                  <p>
                    One of most important goals of Multiverse AI is to
                    contribute in the research domain and promote AI and its use
                    to propose innovative and scientific solutions related to
                    Agrihealth and Computational Biology.
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
            <div className='row'>
              <div className='col-lg-12'>
                <div className='view-more-btn mt--60 mt_sm--30 text-center'>
                  <a
                    className='rn-button-style--2 btn-solid'
                    href={`${process.env.PUBLIC_URL}/research`}
                  >
                    <span>More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Research Area */}

      {/* Start CounterUp Area */}
      {/* <div className='rn-counterup-area pt--140 p pb--110 bg_color--1'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='section-title text-center'>
                  <h3 className='fontWeight500'>Our Fun Facts</h3>
                </div>
              </div>
            </div>
            <CounterOne />
          </div>
        </div> */}
      {/* End CounterUp Area */}

      {/* Start Team Area  */}
      <div className='rn-team-area ptb--120 bg_color--5' id='team'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='section-title service-style--3 text-left mb--25 mb_sm--0'>
                <h2 className='title'>Meet the Team</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <Team column='col-lg-4 col-md-6 col-sm-6 col-12' />
          </div>
        </div>
      </div>
      {/* End Team Area  */}

      {/* Start About Area */}
      <div className='about-area ptb--120 bg_color--1' id='about'>
        <div className='about-wrapper'>
          <div className='container'>
            <div className='row row--35 align-items-center'>
              <div className='col-lg-5'>
                <div className='thumbnail'>
                  <img
                    className='w-100'
                    src='/assets/images/about/about-45.jpg'
                    alt='About Images'
                  />
                </div>
              </div>
              <div className='col-lg-7'>
                <div className='about-inner inner'>
                  <div className='section-title'>
                    <h2 className='title'>About Us</h2>
                    <p className='description'>
                      Multiverse AI is a polyvalent scientific platform
                      dedicated to helping veterinarians and husbandry
                      professionals in optimizing their workflows using AI
                      solutions. It is also a virtual workspace where
                      stakeholders and experts could interact with each other
                      and share experiences while promoting best practices in
                      both AgriHealth and AI ecosystems.
                    </p>
                  </div>
                  {/* <div className='row mt--30'>
                      <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                        <div className='about-us-list'>
                          <h3 className='title'>Who we are</h3>
                          <p>
                            There are many vtions of passages of Lorem Ipsum
                            available, but the majority have suffered.
                          </p>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                        <div className='about-us-list'>
                          <h3 className='title'>Who we are</h3>
                          <p>
                            There are many vtions of passages of Lorem Ipsum
                            available, but the majority have suffered.
                          </p>
                        </div>
                      </div>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Area */}

      {/* Start expert Panel Area */}
      <div id='experts-panel' className='fix'>
        <div className='portfolio-area ptb--120 bg_color--5'>
          <div className='portfolio-sacousel-inner'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='section-title text-center service-style--3 mb--30 mb_sm--0'>
                    <h2 className='title'>Experts Panel</h2>
                    <p>
                      Our experts bring together expertise in medical sciences,
                      artificial intelligence and different life sciences
                      industries.
                    </p>
                  </div>
                </div>
              </div>
              <div className='row'>
                <PortfolioList
                  styevariation='text-center mt--40'
                  column='col-lg-4 col-md-6 col-sm-6 col-12'
                  item='6'
                />
              </div>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='view-more-btn mt--60 mt_sm--30 text-center'>
                    <a
                      className='rn-button-style--2 btn-solid'
                      href='https://docs.google.com/forms/d/e/1FAIpQLSdOFnBlw_M8cprPTYSEynFh3TKDujLCQOLvHK5J_5WqSv_V9g/viewform'
                    >
                      <span>Join Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End expert Panel Area */}

      {/* Start partners Area */}
      <div className='rn-testimonial-area bg_color--1 ptb--120' id='partners'>
        <div className='container'>
          <div className='col-lg-12'>
            <div className='section-title text-center service-style--3 mb--30 mb_sm--0'>
              <h2 className='title'>We Work With the Best Partners</h2>
            </div>
          </div>
          <Testimonial />
        </div>
      </div>
      {/* End partners Area */}

      {/* Start Contact Area */}
      <div id='contact' className='fix'>
        <div className='rn-contact-area ptb--120 bg_color--5'>
          <ContactThree
            contactImages='/assets/images/about/about-9.jpg'
            contactTitle='Contact Us'
          />
        </div>
      </div>
      {/* End COntact Area */}

      <FooterTwo />
      {/* Start Back To Top */}
      <div className='backto-top'>
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default PortfolioLanding;
