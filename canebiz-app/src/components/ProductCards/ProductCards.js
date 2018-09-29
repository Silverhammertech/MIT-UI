import React, { Component } from 'react';
import axios from '../../axios-weedprod';
import ProductCard from '..//ProductCard/ProductCard';
import Spinner from '../UI/Spinner';
import uuid from 'uuid';

  


class ProductCards extends Component {
 
        state = {
            
        prods: [],
        loading: false
        
    }

    componentDidMount () {
        this.setState({ loading: true }, () => {
        axios.get( 'https://mit-location-svc.cfapps.io/api/v1/other-product')
            .then( res => {
    
                console.log(res.data);
                this.setState( { prods: res.data} );
                this.setState.loading = false;

            } )
            .catch( error => {
                console.log( error );
                this.setState.loading = false;
                // this.setState({error: true});
            } );}
        );}

      render() {
        const { prods, loading} = this.state;
            return (
<div>
                {loading ? <Spinner /> : <ProductCard key={this.state.prods.name} items={this.state.prods} />} 
</div>
            );
        }
    }

export default ProductCards;