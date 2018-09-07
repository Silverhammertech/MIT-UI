import React, { Component } from 'react';
import LabStatusCard from '../../components/Cultivator/LabStatus/LabStatusCard';
 
import axios from '../../axios-weedprod'; 
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, CardFooter } from 'reactstrap';
  import Grid from '@material-ui/core/Grid';



class FacilityLabs extends Component {
 
        state = {
        labs: [
            {

              inventory : [ {
                completedate : "2019-01-23",
                optimaltemp : "78°",
                pid : 1,
                plantname : "Northern Lights",
                plantqty : 50
              }, {
                completedate : "2019-01-07",
                optimaltemp : "73°",
                pid : 2,
                plantname : "Berry White",
                plantqty : 75
              }, {
                completedate : "2019-02-01",
                optimaltemp : "75°",
                pid : 3,
                plantname : "Ewok",
                plantqty : 35
              } ],
              labtemp : "78°",
              name : "Lab-1",
              purpose : "Germination"

            },
            {

              inventory : [ {
                completedate : "2019-01-23",
                optimaltemp : "76°",
                pid : 4,
                plantname : "Obama Kush",
                plantqty : 50
              }, {
                completedate : "2019-01-07",
                optimaltemp : "75°",
                pid : 5,
                plantname : "Space Queen",
                plantqty : 75
              }, {
                completedate : "2019-02-01",
                optimaltemp : "75°",
                pid : 3,
                plantname : "Ewok",
                plantqty : 35
              } ],
              labtemp : "77°",
              name : "Lab-2",
              purpose : "Seedling"

          }
        ]
        
    }

    componentDidMount () {

        axios.get( 'https://cultivatorlabs-663cc.firebaseio.com/labstatus/0.json' )
            .then( res => {
                const labs = res.data;
                console.log(res.data);
                this.setState( { labs: res.data.Labs } );
                console.log( {labs} );
            } )
            .catch( error => {
                console.log( "error" );
                // this.setState({error: true});
            } );
    }


      render() {

        let Labstatuscard = this.state.labs.map( lab => {
            return (

                <LabStatusCard key={lab.name} lab={lab} />

            )
        })
        return (
<div>

        {Labstatuscard} 

</div>



        )
        }
    }

export default FacilityLabs;