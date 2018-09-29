import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import CanebizNexus from './containers/CanebizNexus/CanebizNexus';
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
import Checkout from './containers/Checkout/Checkout';
import PlantSearch from './containers/Search/PlantSearch';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
            <Aux>
            <Layout name="CanebizNexus">
                <div>
                    
                        <Switch>
                            {/* /nexus is used as base screen, as Root / is App and there is no screen associated */}
                            
                            <Route path="/caneblog" exact component={Blog} />
                            <Route path="/users" exact component={UserPage} />
                            <Route path="/cultivatorsdash" exact component={CultivatorDashboard} />
                            <Route path="/manufacturers" exact component={ManufacturerFacilityPage} />
                            <Route path="/distributors" exact component={DistributionFacilityPage} />
                            <Route path="/dispensaries" exact component={DispensaryFacilityPage} />
                            <Route path="/plantsearch" exact component={PlantSearch} />
                            <Route path="/canebizNexus" exact component={CanebizNexus} />
                            <Route path="/plantcatalog" exact component={PlantCatalog} />
                            <Route path="/canechat" exact component={CanaChat} />
                            <Route path="/checkout" exact component={Checkout} />
                       </Switch>

                </div>
                </Layout>
           </Aux>
      </BrowserRouter>
    );
  }
} 

export default App;
