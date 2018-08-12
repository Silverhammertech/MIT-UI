import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Nexus</NavigationItem>
        <NavigationItem link="/users">User</NavigationItem>
        <NavigationItem link="/cultivators">Cultivator</NavigationItem>
        <NavigationItem link="/manufacturers">Manufacturer</NavigationItem>
        
    </ul>
);

export default navigationItems;