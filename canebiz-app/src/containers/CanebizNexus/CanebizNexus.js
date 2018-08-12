import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Aux from '../../hoc/_Aux/_Aux';
import NavBar from '../../components/Navigation/NavBar/NavBar';
import Layout from '../../components/Layout/Layout';
import CultivatorFacilityPage from '../../containers/CultivatorFacilityPage/CultivatorFacilityPage';
import UserPage from '../../containers/UserPage/UserPage';
import ManufacturerFacilityPage from '../../containers/ManufacturerFacilityPage/ManufacturerFacilityPage';


class CanebizNexus extends Component {
    render () {
        return (
            <Aux>
                <div>
                    <Layout>
                        <NavBar name="Nexus" />
                        <Switch>
                            <Route path="/users" component={UserPage} />
                            <Route path="/cultivators" component={CultivatorFacilityPage} />
                            <Route path="/manufacturers" component={ManufacturerFacilityPage} />
                            <Route path="/" exact component={CanebizNexus} />  
                        </Switch>
                    </Layout>

                </div>

            </Aux>
        );
    }
}






  export default CanebizNexus; 