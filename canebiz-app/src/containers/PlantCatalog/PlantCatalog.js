import React, { Component } from 'react';
import Aux from '../../hoc/_Aux/_Aux';
import PlantCards from '../../components/Cultivator/PlantCards/PlantCards';
import WeedProductCards from '../../components/Cultivator/WeedProductCards/WeedProductCards';

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