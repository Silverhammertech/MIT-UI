import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/users">User</NavigationItem>
        <NavigationItem link="/cultivators">Cultivator</NavigationItem>
        <NavigationItem link="/cultivatorsdash">CultivatorDash</NavigationItem>
        <NavigationItem link="/manufacturers">Manufacturer</NavigationItem>
        <NavigationItem link="/distrubutors">Distributors</NavigationItem>
        <NavigationItem link="/dispensaries">Dispensaries</NavigationItem>
        <NavigationItem link="/CanebizNexus">CanebizNexus</NavigationItem>
        <NavigationItem link="/PlantCatalog">PlantCatalog</NavigationItem>

        
    </ul>
);

export default navigationItems;