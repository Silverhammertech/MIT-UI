import React from 'react';

import canebizLogo from '../assets/images/Marijuana-Leaf-Green.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={canebizLogo} alt="Can-E-Biz" />
    </div>
);

export default logo;