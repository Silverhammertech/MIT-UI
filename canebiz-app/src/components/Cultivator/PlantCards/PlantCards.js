import React, { Component } from 'react';
import axios from '../../../axios-weedprod';
import PlantCard from '../../../components/Cultivator/PlantCard/PlantCard';
import {Container, Row, Col } from 'reactstrap';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody, CardFooter } from 'reactstrap';
  


class PlantCards extends Component {
 
        state = {
        weeds: [
            {
                plantid: 10000,
                name: "1024",
                introduction: "1024 is a sativa-dominant hybrid bred in Spain by Medical Seeds Co",
                img: "../../assets/images/1024.jpg",
                data: {
                    category: "Hybrid",
                    indica: 10,
                    sativa: 90
                },
                price: "$20"
            }
        ]
        
    }

    componentDidMount () {

        axios.get( 'https://plantcatalog-836e7.firebaseio.com/canabisplants.json')
            .then( res => {
    
                console.log(res.data);
                this.setState( { plants: res.data.canabisplants } );

            } )
            .catch( error => {
                console.log( error );
                // this.setState({error: true});
            } );
    }

      render() {
            return (

                <PlantCard items={this.state.weeds} />

            )
        }
    }

export default PlantCards;