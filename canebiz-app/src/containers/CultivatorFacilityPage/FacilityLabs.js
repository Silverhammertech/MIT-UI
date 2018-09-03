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

                  cultivator : "CID-19",
                  inventory : [ {
                    completedate : "2019-01-23",
                    optimaltemp : 78,
                    pid : 1,
                    plantname : "Northern Lights",
                    plantqty : 50
                  }, {
                    completedate : "2019-01-07",
                    optimaltemp : 73,
                    pid : 2,
                    plantname : "Berry White",
                    plantqty : 75
                  }, {
                    completedate : "2019-02-01",
                    optimaltemp : 75,
                    pid : 3,
                    plantname : "Ewok",
                    plantqty : 35
                  } ],
                  labtemp : 78,
                  location : {
                    latitude : 2,
                    longitude : 1
                  },
                  name : "Lab-1",
                  purpose : "Germination"

            },
            {

                cultivator : "CID-20",
                inventory : [ {
                  completedate : "2019-01-23",
                  optimaltemp : 78,
                  pid : 1,
                  plantname : "Northern Lights",
                  plantqty : 50
                }, {
                  completedate : "2019-01-07",
                  optimaltemp : 73,
                  pid : 2,
                  plantname : "Berry White",
                  plantqty : 75
                }, {
                  completedate : "2019-02-01",
                  optimaltemp : 75,
                  pid : 3,
                  plantname : "Ewok",
                  plantqty : 35
                } ],
                labtemp : 78,
                location : {
                  latitude : 2,
                  longitude : 1
                },
                name : "Lab-1",
                purpose : "Germination"

          }
        ]
        
    }

    componentDidMount () {

        axios.get( 'https://cultivatorlabs-663cc.firebaseio.com/labstatus.json' )
            .then( res => {
                const labs = res.data;
                console.log(res.data);
                this.setState( { labs: res.data } );
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