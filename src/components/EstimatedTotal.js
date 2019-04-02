import React,{Component} from 'react';
import {Row,Col} from 'react-bootstrap';

export default class EstimatedTotal extends Component {
    render(){
        const {price}=this.props;
        return (
            <Row className="show-grid">
                <Col md={6}>Est. total</Col>
                <Col md={6}>
                    <h2>
                        {`${price}`}
                    </h2>
                </Col>

            </Row>
        
            );
    }
}
