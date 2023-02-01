import { Container, Row , Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.png';
import meter2 from '../assets/img/meter2.png';
import meter3 from '../assets/img/meter3.png';
import meter4 from '../assets/img/meter4.png';


export const Projects = () => {
    const responsive = {
        superLargeDesktop: {
            //the naming can be any, depends on you..
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint:{ max:3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint:{max:1024, min:464},
            items: 2
        },
        mobile: {
            breakpoint: {max:464, min: 0},
            items: 1
        }
    };

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                    <div className="projects-bx">
                        <h2>Projects</h2>
                        <p>I present several online projects related to blockchain and decentralized applications (dapps). These projects include tools and applications designed to help people manage their digital assets, such as cryptocurrencies, and take advantage of blockchain technology in areas such as security, transparency and decentralization. I also offer dapp development services to help companies and projects build blockchain solutions. All of my projects are designed with a focus on ease of use and efficiency, so that anyone can benefit from them. I am committed to helping people and businesses effectively integrate blockchain and dapps into their operations.</p>
                        <Carousel responsive={responsive} infinite={true} className="projects-slide">
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Blog</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Blockchain</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="" />
                                <h5>Miner BlackAndRed</h5>
                            </div>
                        </Carousel>
                    </div>
                  </Col>
                </Row>
            </Container>
        </section>
    )

};