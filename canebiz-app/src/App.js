
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import CanebizNexus from './containers/CanebizNexus/CanebizNexus';
import CultivatorFacilityPage from './containers/CultivatorFacilityPage/CultivatorFacilityPage';
import CultivatorDashboard from './containers/CultivatorFacilityPage/CultivatorDashboard';
import ManufacturerFacilityPage from './containers/ManufacturerFacilityPage/ManufacturerFacilityPage';
import DistributionFacilityPage from './containers/DistributionFacilityPage/DistributionFacilityPage';
import DispensaryFacilityPage from './containers/DispensaryFacilityPage/DispensaryFacilityPage';
import PlantCatalog from './containers/PlantCatalog/PlantCatalog';
import UserPage from './containers/UserPage/UserPage';
import Aux from './hoc/_Aux/_Aux';
import Layout from './components/Layout/Layout';
import Blog from './components/Blog/Blog';
import CanaChat from './containers/CanaChat/CanaChat';

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
                            <Route path="/cultivatorsdash" exact component={CultivatorDashboard} />
                            <Route path="/manufacturers" exact component={ManufacturerFacilityPage} />
                            <Route path="/distributors" exact component={DistributionFacilityPage} />
                            <Route path="/dispensariess" exact component={DispensaryFacilityPage} />
                            <Route path="/canebizNexus" exact component={CanebizNexus} />
                            <Route path="/plantcatalog" exact component={PlantCatalog} />
                            <Route path="/caneblog" exact component={Blog} />
                            <Route path="/canechat" exact component={CanaChat} />
                       </Switch>

                </div>
                </Layout>
           </Aux>
      </BrowserRouter>
    );
  }
} 

export default App;
