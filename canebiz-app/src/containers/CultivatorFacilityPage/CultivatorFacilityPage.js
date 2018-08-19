import React, { Component } from 'react';
//import { Route } from 'react-router-dom';
import Aux from '../../hoc/_Aux/_Aux';
import Layout from '../../components/Layout/Layout';
import LabStatusTile from '../../components/Cultivator/LabStatus/LabStatusTile';
import ProductCard from '../../components/Cultivator/ProductCard/ProductCard';

class CultivatorFacilityPage extends Component {
    render () {
        return (
            <Aux>
                <Layout name="Cultivator" >
                <div>
                    <LabStatusTile id="Lab1" temperature="74" />
                </div>
                <div>
                    <LabStatusTile id="Lab2" temperature="71" />
                </div>

                <div>
                    <ProductCard />
                </div>

              </Layout>
            </Aux>
        );
    }
}






  export default CultivatorFacilityPage; 