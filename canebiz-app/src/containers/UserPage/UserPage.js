import React, { Component } from 'react';
import Aux from '../../hoc/_Aux/_Aux';
import TitlebarGridList from '../../components/Cultivator/GridList/GridList';


class UserPage extends Component {
    render () {
        return (
            <Aux>

              <div>
                  <TitlebarGridList />
              </div>


            </Aux>
        );
    }
}






export default UserPage; 