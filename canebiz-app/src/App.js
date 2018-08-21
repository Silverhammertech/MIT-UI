
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import CanebizNexus from './containers/CanebizNexus/CanebizNexus';
import CultivatorFacilityPage from './containers/CultivatorFacilityPage/CultivatorFacilityPage';
import ManufacturerFacilityPage from './containers/ManufacturerFacilityPage/ManufacturerFacilityPage';
import DistributionFacilityPage from './containers/DistributionFacilityPage/DistributionFacilityPage';
import DispensaryFacilityPage from './containers/DispensaryFacilityPage/DispensaryFacilityPage';
import UserPage from './containers/UserPage/UserPage';
import Aux from './hoc/_Aux/_Aux';
import Layout from './components/Layout/Layout';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
            <Aux>
            <Layout name="CanebizNexus">
                <div>
                    
                        <Switch>
                            {/* /nexus is used as base screen, as Root / is App and there is no screen associated */}
                            
                            <Route path="/users" exact component={UserPage} />
                            <Route path="/cultivators" exact component={CultivatorFacilityPage} />
                            <Route path="/manufacturers" exact component={ManufacturerFacilityPage} />
                            <Route path="/distributors" exact component={DistributionFacilityPage} />
                            <Route path="/dispensariess" exact component={DispensaryFacilityPage} />
                            <Route path="/canebizNexus" exact component={CanebizNexus} />
                       </Switch>

                </div>
                </Layout>
           </Aux>
      </BrowserRouter>
    );
  }
} 

export default App;
