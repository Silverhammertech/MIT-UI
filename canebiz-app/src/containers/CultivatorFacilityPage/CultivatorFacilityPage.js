import React, { Component } from 'react';
//import { Route } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import LabStatusTile from '../../components/Cultivator/LabStatus/LabStatusTile';
import WeedProductCard from '../../components/Cultivator/WeedProductCard/WeedProductCard';


class CultivatorFacilityPage extends Component {
    render () {
        return (
            
                <Layout name="Cultivator" >
                
                <div>
                    <LabStatusTile id="Lab1" temperature="74" />
                </div>
                <div>
                    <LabStatusTile id="Lab2" temperature="71" />
                </div>
            
                <div>
                    <WeedProductCard />
                </div>
            
            

              </Layout>
            
        );
    }
}






  export default CultivatorFacilityPage; 