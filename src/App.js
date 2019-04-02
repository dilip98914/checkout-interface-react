import React, { Component } from 'react';
import Subtotal from './components/Subtotal';
import PickupSavings from './components/PickupSavings';
import TaxFees from './components/TaxFees';
import EstimatedTotal from './components/EstimatedTotal';
import ItemDetails from './components/ItemDetails';
import PromoCode from './components/PromoCode';
import {Grid} from 'react-bootstrap';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      total:100.0,
      taxes:0,
      pickupSavings:-3.85,
      estimatedTotal:0,
      disablePromoButton:false,
      promoCode:'DISCOUNT',
    }
  }

  giveDiscountHandler=()=>{
    if(this.state.promoCode==='DISCOUNT'){
      this.setState({
        estimatedTotal:this.state.estimatedTotal*0.9
      },()=>{
        this.setState({
          disablePromoButton:true
        });
      });
    }
  }


  componentDidMount(){
    this.setState({
      taxes:(this.state.total+this.state.pickupSavings)*0.0875,
    },()=>{
      this.setState({
        estimatedTotal:this.state.total+this.state.pickupSavings+this.state.taxes
      });
    });
  }


  render() {
    const {total,taxes}=this.state;

    return (
      <div className="container">
        <div className="purchase-card">
              <Subtotal price={total.toFixed(2)}/>
              <PickupSavings price={total.toFixed(2)}/>
              <TaxFees taxes={taxes.toFixed(2)}/>
              <EstimatedTotal price={total.toFixed(2)}/>
              <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
              <br/>
              <PromoCode  isDisabled={this.state.disablePromoButton} giveDiscount={()=>{
                this.giveDiscountHandler()
              }} />
          </div>
      </div>
    );
  }
}

export default App;
