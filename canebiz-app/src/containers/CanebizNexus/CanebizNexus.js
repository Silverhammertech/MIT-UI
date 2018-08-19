import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Aux from '../../hoc/_Aux/_Aux';
import Layout from '../../components/Layout/Layout';
import CultivatorFacilityPage from '../../containers/CultivatorFacilityPage/CultivatorFacilityPage';
import UserPage from '../../containers/UserPage/UserPage';
import ManufacturerFacilityPage from '../../containers/ManufacturerFacilityPage/ManufacturerFacilityPage';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import ButtonBases from '../../components/Navigation/ButtonBases/ButtonBases';


class CanebizNexus extends Component {
    render () {
        return (
            <Aux>
                <div>
                    <Layout name="Nexus">
                        <Switch>
                            {/* /nexus is used as base screen, as Root / is App and there is no screen associated */}
                            <Route path="/nexus" exact component={CanebizNexus} /> 
                            <Route path="/users" component={UserPage} />
                            <Route path="/cultivators" component={CultivatorFacilityPage} />
                            <Route path="/manufacturers" component={ManufacturerFacilityPage} />
                             
                        </Switch>
                        <ButtonBases>
                        <Route path="/cultivators" component={CultivatorFacilityPage} />
                        Cultivator
                        </ButtonBases>
                        <Button component={Link} to="/cultivators">
                        Cultivator
                        </Button>
                    </Layout>

                </div>

            </Aux>
        );
    }
}






  export default CanebizNexus; 