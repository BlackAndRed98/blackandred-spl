import { Container, Row , Col, Nav, Tab} from "react-bootstrap";
import { Projector } from "react-bootstrap-icons";
import { MinerCard } from "./MinerCards";
import infoimg from '../assets/img/info.png';
import whitepaperimg from '../assets/img/whitepaperimg.png';
import contractimg from '../assets/img/contractimg.png';
import bonusimg from '../assets/img/bonusimg.png';
import rulesimg from '../assets/img/rulesimg.png';
import supportimg from '../assets/img/supportimg.png';
import { MinerStake } from "./MinerStake";
import { MinerSwap } from "./MinerSwap";






export const Miner = () => {

    const Miner= [
        {    
            tittle:"Info",
            description: "See all the info",
            imgUrl: infoimg,
        },
        {
            tittle:"Whitepaper",
            description: "See all the whitepaper",
            imgUrl: whitepaperimg,
        },
        {
            tittle:"Contract",
            description: "See all the contract",
            imgUrl: contractimg,
        },
        {
            tittle:"Promotions",
            description: "See all the Bonuses",
            imgUrl: bonusimg,
        },
        {
            tittle:"Rules",
            description: "See the rules",
            imgUrl: rulesimg,
        },
        {
            tittle:"Support",
            description: "Contct with us",
            imgUrl: supportimg,
        },
    ]
    

    return (
    <section className="miner" id="miner">
        <Container>
            <Row>
                <Col>
                        <h2>Miner Info</h2>
                        <p>This project is a community-driven cryptocurrency stake that is gamified, where the more people participate, the more the mining is distributed among them. It is a decentralized application (DApp) that runs on a blockchain network and is open to anyone with an internet connection. The DApp allows users to stake their cryptocurrency in order to earn a share of the mining rewards. The unique aspect of this project is its gamified approach, which encourages participation and engagement among users. Additionally, the DApp only takes a 5% commission on all transactions as a fee for the service provided, ensuring that the majority of the rewards go directly to the stakers.</p>
                      
                    <Tab.Container id="miner-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                       <Nav.Item>
                         <Nav.Link eventKey="first">MINER INFO </Nav.Link>
                       </Nav.Item>
                       <Nav.Item>
                         <Nav.Link eventKey="second">MINER GAME</Nav.Link>
                       </Nav.Item>
                       <Nav.Item>
                         <Nav.Link eventKey="third">
                            MAKE A SWAP 
                         </Nav.Link>
                       </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row className="miner-row">
                                {
                                    Miner.map((Miner, index) => {
                                    return (
                                        <MinerCard
                                        key={index}
                                        {...Miner} />
                                    )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second" className="Minerstakerow">
                            <Row className="miner-stake-row">
                                
                                    <MinerStake/>
                                
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third"><MinerSwap/></Tab.Pane>
                        


                      </Tab.Content>
                    </Tab.Container>
                  </Col>
                </Row>
            </Container>
        </section>
    )


}