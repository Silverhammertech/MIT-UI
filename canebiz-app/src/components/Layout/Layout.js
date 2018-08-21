import React, { Component } from 'react';

import Aux from '../../hoc/_Aux/_Aux';
import classes from './Layout.css';
import NavBar from '../../components/Navigation/NavBar/NavBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false

    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        
        return (
            
            <Aux>
                <NavBar name={this.props.name} drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                   {this.props.children}
                </main> 
            </Aux>
        )
    }
}

export default Layout;

