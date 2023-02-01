import { useState  ,useEffect } from "react";
import { Container, Row , Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/logorojo.png';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Join now! ","Web Designer","Blockchain Coder"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() =>{
    let ticker = setInterval(() =>{
        tick();
    },delta)
    return () => {clearInterval(ticker)};
}, [text])

const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0 , text.length + 1);

    setText(updatedText);

    if (isDeleting) {
        setDelta(prevDelta => prevDelta /2)
    }
    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
    } else if(isDeleting && updatedText === fullText){
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);

    }
}


    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs = {12} md={6} xl={7}>
                        <span className="tagline">Welcome to BlackAndRed</span>
                        <h1>{'This page is made for you! '}<span className="wrap">{text}</span></h1>
                        <p>Welcome to our community. Here you will find a wealth of information and resources on the latest developments in these cutting-edge technologies. I showcase some of my own projects and services, which are designed to help individuals and businesses take advantage of the many benefits offered by dapps and blockchain. From tools for managing digital assets to blockchain-based solutions for various industries, I am dedicated to providing the resources and expertise you need to stay ahead of the curve. Whether you are a seasoned pro or just getting started, my website is the perfect place to explore the exciting world of dapps and blockchain.</p>
                        <button onClick={() => console.log('connect')}>Let's connect</button>
                    </Col>
                 <Col xs = {12} md={6} xl={5}>
                    <img src={headerImg} alt="Headder Img" />
                 </Col>
                </Row>
            </Container>
        </section>

    );
}