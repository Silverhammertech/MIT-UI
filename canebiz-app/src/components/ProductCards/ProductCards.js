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
        axios.get( 'https://mit-location-svc.mybluemix.net/api/v1/other-product')
            .then( res => {
    
                console.log(res.data);
                this.setState( { prods: res.data} );
                this.setState({
                    loading: false
                  });
             

            } )
            .catch( error => {
                console.log( error );
                this.setState({
                    loading: false
                  });
            } );}
        );}

      render() {
        const prods = this.state.prods;
        const loading = this.state.loading;

            return (
<div>
                {loading ? <Spinner /> : <ProductCard key={prods.name} items={prods} />} 
</div>
            );
        }
    }

export default ProductCards;