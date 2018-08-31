import React, { Component } from 'react';


import Layout from '../../components/Layout/Layout';
import WeedProductCard from '../../components/Cultivator/WeedProductCard/WeedProductCard';
import WeedProductTable from '../../components/Cultivator/WeedProductTable/WeedProductTable';


class DispensaryFacilityPage extends Component {
    render () {
        return (
            
                <Layout name="Cultivator" >
                
                <div>
                    <WeedProductCard id="id1" temperature="74" />
                </div>
                <div>
                    <WeedProductCard id="id2" temperature="71" />
                </div>
            
                <div>
                    <WeedProductTable />
                </div>
            
            

              </Layout>
            
        );
    }
}



export default DispensaryFacilityPage; 