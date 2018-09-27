

import React, { Component } from 'react';
import axios from '../../axios-weedprod';
import ProductCard from '..//ProductCard/ProductCard';
import uuid from 'uuid';

  


class ProductCards extends Component {
 
        state = {
        prods: [
            {
                plantid: 10000,
                name: "1024",
                introduction: "1024 is a sativa-dominant hybrid bred in Spain by Medical Seeds Co",
                img: "../../assets/images/1024.jpg",
                data: {
                    category: "Hybrid",
                    indica: 10,
                    sativa: 90
                },
                price: "$20"
            }
        ]
        
    }

    componentDidMount () {

        axios.get( 'https://mit-location-svc.cfapps.io/api/v1/other-product')
            .then( res => {
    
                console.log(res.data);
                this.setState( { prods: res.data} );

            } )
            .catch( error => {
                console.log( error );
                // this.setState({error: true});
            } );
    }

      render() {
            return (

                <ProductCard key={this.state.prods.name} items={this.state.prods} />

            )
        }
    }

export default ProductCards;