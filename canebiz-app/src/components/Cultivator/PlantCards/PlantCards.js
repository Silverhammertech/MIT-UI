import React, { Component } from 'react';
import axios from '../../../axios-weedprod';
import PlantCard from '../../../components/Cultivator/PlantCard/PlantCard';

  


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
                this.setState( { weeds: res.data} );

            } )
            .catch( error => {
                console.log( error );
                // this.setState({error: true});
            } );
    }

      render() {
            return (

                <PlantCard key={this.state.weeds.id} items={this.state.weeds} />

            )
        }
    }

export default PlantCards;