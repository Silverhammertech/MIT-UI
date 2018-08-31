import React, { Component } from 'react';


import LabStatusTile from '../../components/Cultivator/LabStatus/LabStatusTile';
import WeedProductCards from '../../components/Cultivator/WeedProductCards/WeedProductCards';
import {Container, Row, Col } from 'reactstrap';


class PlantCatalog extends Component {

    render () {
        return (
            
                       
                <div>

                    <WeedProductCards  />

                </div>
          
        
            
        );
    }
}

export default PlantCatalog;