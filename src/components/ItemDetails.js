import React,{Component} from 'react';
import {Row,Col,Button,Collapse,Card} from 'react-bootstrap';

export default class ItemDetails extends Component {
    state={
        open:false,
    }
 
 
    render(){
        return (
            <div>
                <Button
                className="item-details-button"
                bsStyle="link"
                onClick={()=>{
                    this.setState({open:!this.state.open})
                }}
                >
                {this.state.open===false? `See`:`Hide`} item details{' '}
                {this.state.open===false? `+`:`-`}                
                </Button>
                <Collapse in={this.state.open}>
                
                    <Card >
                    <Card.Img variant="top"                     src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" />
                    <Card.Body>
                        <Card.Text>
                        Essentials by OFM ESS-3085 Racing Style Leather Gamin Chair, Red
                        </Card.Text>
                        <Row className='show-grid'>
                           <Col md={6}>
                           <strong>{`$${this.props.price}`}</strong>
                           <br/>
                           <strong className='price-strike'>{`$${this.props.price}`}</strong>
                           </Col>
                           <Col md={6}>
                           <strong>Qty: 1</strong>
                           </Col>
                        </Row>
                    </Card.Body>
                    </Card>

                </Collapse>




            </div>
            );
    }
}
