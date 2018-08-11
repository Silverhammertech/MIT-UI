import React, { Component } from 'react';



import Layout from './components/Layout/Layout';
import UserPage from './containers/UserPage/UserPage';
import ManufacturerFacilityPage from './containers/ManufacturerFacilityPage/ManufacturerFacilityPage';
import CultivatorFacilityPage from './containers/CultivatorFacilityPage/CultivatorFacilityPage';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <UserPage/>
          <CultivatorFacilityPage/>
          <ManufacturerFacilityPage/>
        </Layout>
      </div>
    );
  }
}

export default App;
