import React, { Component } from 'react';
import Aux from '../../hoc/_Aux/_Aux';
import GoogleMapsContainer from '../Mapping/GoogleMapsContainer';
import BusinessInfoCards from '../../components/Cultivator/WeedProductCards/WeedProductCards';


class UserPage extends Component {
    render () {
        return (
            <Aux>

              <div>
                  <GoogleMapsContainer/>
                  <BusinessInfoCards  />
              </div>


            </Aux>
        );
    }
}






export default UserPage; 