import React, { Component } from 'react';


import Layout from '../../components/Layout/Layout';
import ProductCardsNoSpin from '../../components/ProductCards/ProductCardsNoSpin';



class DispensaryFacilityPage extends Component {
    render () {
        return (
            
                <Layout name="Dispensary" >
                        
                        <ProductCardsNoSpin/>

              </Layout>
            
        );
    }
}



export default DispensaryFacilityPage; 