import React, { Component } from 'react';
import Aux from '../../hoc/_Aux/_Aux';
import PlantCards from '../../components/Cultivator/PlantCards/PlantCards';

class PlantCatalog extends Component {

    render () {
        return (
            
                <Aux>       
                <div>

                    <PlantCards  />

                </div>
                </Aux>
          
        
            
        );
    }
}

export default PlantCatalog;