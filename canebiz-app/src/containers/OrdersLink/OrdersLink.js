import React, { Component } from 'react';
import Aux from '../../hoc/_Aux/_Aux';
import Layout from '../../components/Layout/Layout';
import OrdersTable from './OrdersTable';


class OrdersLink extends Component {

    render () {
        return (
            <Aux>
                <Layout name="Orders" >
                
                <div>
                    <OrdersTable />
                </div>
            

              </Layout>
            </Aux>
        );
    }
}



  export default OrdersLink; 