import React, { Component } from 'react';
import axios from '../../axios-weedprod';
import ProductCard from '../ProductCard/ProductCard';
import uuid from 'uuid';

  


class ProductCardsNoSpin extends Component {
 
        state = {           
        prods: []
    }

    componentDidMount () {

        axios.get( 'https://mit-location-svc.mybluemix.net/api/v1/other-product')
            .then( res => {
    
                console.log(res.data);
                this.setState( { prods: res.data} );

            } )
            .catch( error => {
                console.log( error );

                // this.setState({error: true});
            } )
        }

      render() {

            return (
                <div>
                <ProductCard key={this.state.prods.name} items={this.state.prods} />
                </div>

            )
    }
}
export default ProductCardsNoSpin;