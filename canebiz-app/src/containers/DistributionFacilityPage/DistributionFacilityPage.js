import React, { Component } from 'react';


import Layout from '../../components/Layout/Layout';
import ProductCards from '../../components/ProductCards/ProductCards';



class DistributionFacilityPage extends Component {
    render () {
        return (
            
                <Layout name="Distribution" >
                        
                        <ProductCards/>

              </Layout>
            
        );
    }
}



export default DistributionFacilityPage; 