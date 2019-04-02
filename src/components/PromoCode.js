import React,{Component} from 'react';
import {
    Button,
    Collapse,
    Card,
    Form,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl
  } from 'react-bootstrap';


export default class EstimatedTotal extends Component {

    state={
        open:false,
    }

    handleChange=(e)=>{
        this.props.handleChange(e);
    }


    render(){
        return (
            <div>
            <Button
            className="promo-code-button"
            bsStyle="link"
            onClick={()=>{
                this.setState({open:!this.state.open})
            }}
            >
            {this.state.open===false? `Apply`:`Hide`} promo code{' '}
            {this.state.open===false? `+`:`-`}                
            </Button>
            <Collapse in={this.state.open}>
                <Card >
                    <Row className='show-grid'>
                    <Form>
                        <FormGroup controlId='formInlineName'>

                            <FormControl
                                type="text"
                                placeholder="Enter Promo Code"
                                value={this.props.promoCode}
                                onChange={this.handleChange}
                            />

                        </FormGroup>

                        <Button
                        block
                        bsStyle='success'
                        className='btn-round'
                        disabled={this.props.isDisabled}
                        onClick={this.props.giveDiscount}
                        >Apply</Button>                    
                    
                    
                    </Form>
                    </Row>

                </Card>

            </Collapse>




        </div>
        
            );
    }
}
