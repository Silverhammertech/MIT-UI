import React, { Component } from 'react';
//import { Route } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import LabStatusTile from '../../components/Cultivator/LabStatus/LabStatusTile';
import WeedProductCard from '../../components/Cultivator/WeedProductCard/WeedProductCard';
import WeedProductTable from '../../components/Cultivator/WeedProductTable/WeedProductTable';


class CultivatorFacilityPage extends Component {

    render () {
        return (
            
                <Layout name="Cultivator" >
                
                <div>
                    <WeedProductCard id="Lab1" temperature="74" />
                </div>
                <div>
                    <WeedProductCard id id="Lab2" temperature="71" />
                </div>
            
                <div>
                    <WeedProductTable />
                </div>
            
            

              </Layout>
            
        );
    }
}






  export default CultivatorFacilityPage; 