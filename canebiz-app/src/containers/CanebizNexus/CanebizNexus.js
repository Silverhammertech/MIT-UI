import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Aux from '../../hoc/_Aux/_Aux';
import Layout from '../../components/Layout/Layout';
import CultivatorFacilityPage from '../../containers/CultivatorFacilityPage/CultivatorFacilityPage';
import UserPage from '../../containers/UserPage/UserPage';
import ManufacturerFacilityPage from '../../containers/ManufacturerFacilityPage/ManufacturerFacilityPage';
import TitlebarGridList from '../../components/Cultivator/GridList/GridList';


class CanebizNexus extends Component {
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






  export default CanebizNexus; 

  {/*
                                <Button component={Link} to="/cultivators">
                                Cultivator
</Button> */}