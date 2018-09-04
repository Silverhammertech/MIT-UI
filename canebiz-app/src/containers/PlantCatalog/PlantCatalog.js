import React, { Component } from 'react';
import Aux from '../../hoc/_Aux/_Aux';
import PlantCard from '../../components/Cultivator/PlantCard/PlantCard';
import WeedProductCards from '../../components/Cultivator/WeedProductCards/WeedProductCards';

class PlantCatalog extends Component {

    render () {
        return (
            
                <Aux>       
                <div>

                    <PlantCard  />

                </div>
                </Aux>
          
        
            
        );
    }
}

export default PlantCatalog;