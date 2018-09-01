import React, { Component } from 'react';
import Aux from '../../hoc/_Aux/_Aux';
import Layout from '../../components/Layout/Layout';
import FacilityLabs from './FacilityLabs';


class CultivatorFacilityPage extends Component {

    render () {
        return (
            <Aux>
                <Layout name="Cultivator" >
                
                <div>
                    <FacilityLabs />
                </div>
            

              </Layout>
            </Aux>
        );
    }
}



  export default CultivatorFacilityPage; 