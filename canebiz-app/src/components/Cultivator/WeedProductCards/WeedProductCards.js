import React, { Component } from 'react';
import axios from '../../../axios-weedprod';
import WeedProductCard from '../../../components/Cultivator/WeedProductCard/WeedProductCard';
import {Container, Row, Col } from 'reactstrap';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody, CardFooter } from 'reactstrap';
  


class WeedProductCards extends Component {
 
        state = {
        plants: [
            {
                id: 49857,
                name: "OG Top Shop",
                slug: "vermont-gas",
                state: "CA",
                city: "Los Angeles",
                type: "dispensary",
                wmid: 674352009,
                latitude: 33.957239,
                longitude: -118.291209,
                web_url: "https://weedmaps.com/dispensaries/vermont-gas",
                package_level: "listing_plus",
                feature_order: 1,
                ranking: 4.965271675477842,
                rating: 4.97433541188054,
                reviews_count: 3047,
                avatar_image: {
                    small_url: "https://images.weedmaps.com/dispensaries/000/049/857/avatar/square_fill/1515286542-1510571995-OG_TOP_SHOP_WEEDMAPS_PICS_.png"
                },
                license_type: "medical",
                address: "8836 South Vermont",
                distance: 0,
                zip_code: "90044",
                timezone: "America/Los_Angeles",
                intro_body: "<p>OG TOP SHOP LA is here to provide you w/ the best possible customer service along w/ award winning lab tested products. We have a very knowledgeable team of volunteers ready to help you with any needs or questions you may have. COME IN TODAY AND MAKE OG TOPSHOP YOUR LAST STOP!</p> <p> </p> <p>**<strong>NOW HIRING, ENTHUSIASTIC AND ETHICAL BUDTENDERS/RECEPTIONIST</strong>** Please send your resume and two current pictures of yourself to OGTOPSHOPLA@GMAIL.COM for consideration. </p> <p> </p> <p><strong>FIRST TIME VISTING</strong></p> <p>1) CUT OFF TIME IS 11:40PM sorry if we missed you but we will not accept any new patients after 11:45PM if we do miss you. We open again at 8:00AM the next day.</p> <p>2) VERY IMPORTANT!!! 21+ MUST HAVE ORIGINAL IDENTIFYING DOCUMENTATION (MEANING only a current valid state ID/DL or proper DMV INTERIM FORM. NO pictures on cell phone of the ID) IF YOU ARE 18 MUST have a valid ID/DL and REC or INTERIM FORM from DMV. NO pictures on cell phone of the ID) THANK YOU!</p> <p><strong>RETURNING PATIENTS </strong></p> <p>For our awesome returning patients we thank you for making our shop #1 35 CAP SHOP IN SOUTH CENTRAL!!!</p> <p>HERE are the rules LAST CALL IS 12:00 AM SORRY IF WE MISSED YOU</p> <p>1) PLEASE BRING proper current Valid state ID or PASSPORT</p> <p>2) IF YOUR ID IS LOST/STOLEN please bring DMV interim with picture on documentation</p> <p>3) IF EXPIRED YOU CAN USE YOUR EXPIRED ID W/ INTERIM FORM FROM DMV until you get your new one. Please do not ask volunteers to vouch for you to let you in without proper identification they can not do that. Do not take it personal we would love to let you in but we must follow the rules to properly check you in to keep things running smoothly.</p> <p>18+ NEED VALID CA RECOMMENDATION AND VALID DRIVERS LICENSE / ID or PASSPORT. 21+ NEED VALID ID OR LICENSE **ANY STATE ACCEPTABLE**</p> <p> </p> <p><strong>*DAILY DEALS!*</strong></p> <p class=\"MsoNormal\">MONDAY: 15% OFF EDIBLES</p> <p class=\"MsoNormal\">TUESDAY: $5 OFF ANY HOUSE WAX</p> <p class=\"MsoNormal\">WEDNESDAY: CHOOSE ANY DEAL!</p> <p class=\"MsoNormal\">THURSDAY: 10% OFF ANY VAPE PRODUCT</p> <p class=\"MsoNormal\">FRIDAY: HAPPY HOUR ALL DAY! (.5 ON A 8TH OR MORE)</p> <p class=\"MsoNormal\">SATURDAY: 10% OFF ALL PRE-ROLLS</p> <p class=\"MsoNormal\">SUNDAY: BUY 5G'S GET 1G FREE  </p> <p class=\"MsoNormal\">(DEALS MAY NOT BE COMBINED) </p> <p class=\"MsoNormal\">10 FREE JOINTS W/A DONATION OF 30 OR MORE.</p> <p>********DAILY DEALS ARE SUBJECT TO CHANGE********</p> <p> </p> <p><strong>*HAPPY HOURS!*</strong></p> <p>8:00AM-10:00AM</p> <p>2:00PM-4:20PM</p> <p>7:00PM-9:00PM</p> <p> </p>",
                static_map_url: "https://staticmap.weedmaps.com/static_map/13/33.957239/-118.291209/402/147/map.png",
                open_now: true,
                closes_in: 292,
                todays_hours_str: " 8:00am - 12:00am",
                min_age: 18,
                menu_items_count: 485,
                verified_menu_items_count: 223,
                endorsement_badge_count: 199,
                is_published: true,
                online_ordering: {
                    enabled_for_pickup: false,
                    enabled_for_delivery: false
                },
                location: {
                    coordinates: [
                        -118.291209,
                        33.957239
                    ]
                }
            }
        ]
        
    }

    componentDidMount () {

        axios.get( 'https://mit-location-svc.cfapps.io/api/v1/near?long=-118.291209&lat=33.957239&radius=100000' )
            .then( res => {
                const plants = res.data;
                console.log(res.data);
                this.setState( { plants: res.data.locations } );
                console.log( {plants} );
            } )
            .catch( error => {
                console.log( error );
                // this.setState({error: true});
            } );
    }

      render() {
        let Weedproductcard = this.state.plants.map(plant => {
            return (
                <Container>
                    <Row>
                <Col xs="6" sm="4">
                <WeedProductCard key={plant.id} plant={plant} />
                </Col>
                </Row>
                </Container>
            )
        })
        return (
            <Container>
            <Row>
                {Weedproductcard}
            </Row>
            </Container>

        )
        }
    }

export default WeedProductCards;