import { Col } from "react-bootstrap"

export const MinerCard = ({tittle, description, imgUrl}) => {
    return (
        <Col sm={6} md={4}>
        <div className="miner-imgbx">
                <img src={imgUrl} />
            <div className="miner-txtx">
                <h4>{tittle}</h4>
                <span>{description}</span>
            </div>
        </div>


        </Col>
    )
}