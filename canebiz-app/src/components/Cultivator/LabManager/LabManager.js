import React, { Component } from 'react';
import axios from '../../../axios-weedprod';
import LabCard from '../../../components/Cultivator/LabManager/LabCard';


  

        {/* Need to add flocation with long,lat as well?  */}
class LabManager extends Component {
 
        state = {
        cid: "CULT1",
        cultivatorname: "Dummy Cult LLC",
        facilityid: "Facilty1",
        facilityname : "Dummy Facility",

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

        axios.get( 'https://cultivatorlabs-663cc.firebaseio.com/labstatus/0.json')
            .then( res => {
    
                console.log(res.data);
                this.setState( { labs: res.data.Labs} );
                this.setState( {facilityname: res.data.facilityname});

            } )
            .catch( error => {
                console.log( error );
                // this.setState({error: true});
            } );
    }

      render() {
            return (

                <LabCard key={this.state.labs.id} items={this.state.labs} facilityname={this.state.facilityname}/>

            )
        }
    }

export default LabManager;