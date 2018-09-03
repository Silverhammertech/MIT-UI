import React, { Component } from 'react';
import Aux from '../../hoc/_Aux/_Aux';
import GoogleMapsContainer from '../Mapping/GoogleMapsContainer';


class UserPage extends Component {
    render () {
        return (
            <Aux>

              <div>
                  <GoogleMapsContainer/>
              </div>


            </Aux>
        );
    }
}






export default UserPage; 