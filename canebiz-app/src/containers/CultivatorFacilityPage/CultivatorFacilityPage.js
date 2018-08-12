import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Aux from '../../hoc/_Aux/_Aux';
import NavBar from '../../components/Navigation/NavBar/NavBar';
import LabStatusTile from '../../components/Cultivator/LabStatus/LabStatusTile';

class CultivatorFacilityPage extends Component {
    render () {
        return (
            <Aux>
                <div>
                    <NavBar name="Cultivator" />
                </div>
                <div>
                    <LabStatusTile id="Lab1" temperature="74" />
                </div>
              <div>FacilityLocation</div>
              <div>FacilityLabStatus1</div>
              <div>FacilityLabStatus2</div>
              <div>Plant Catalog</div>
              <div>Transaction History</div>
            </Aux>
        );
    }
}






  export default CultivatorFacilityPage; 