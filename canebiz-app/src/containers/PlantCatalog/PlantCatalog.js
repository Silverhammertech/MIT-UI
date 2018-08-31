import React, { Component } from 'react';
//import { Route } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import LabStatusTile from '../../components/Cultivator/LabStatus/LabStatusTile';
import WeedProductCards from '../../components/Cultivator/WeedProductCards/WeedProductCards';


class PlantCatalog extends Component {

    render () {
        return (
            
                <Layout name="ProductCatalog" >
                
                <div>
                    <WeedProductCards  />
                </div>
                <div>
                    <WeedProductCards />
                </div>
            
          
            

              </Layout>
            
        );
    }
}

export default PlantCatalog;