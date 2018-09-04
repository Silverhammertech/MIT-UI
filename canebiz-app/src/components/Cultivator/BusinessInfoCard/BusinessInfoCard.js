import React, {Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, CardFooter } from 'reactstrap';


class BusinessInfoCard extends Component {
  constructor(props) {
    super(props);
    }

    render() {

    return (
      <div >

        <Card>

        <CardImg top width="25%" src="../../assets/images/white-rhino.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.props.biz.name}</CardTitle>
          <CardSubtitle>{this.props.biz.city}</CardSubtitle>
          <CardText>{this.props.biz.address}</CardText>
          <CardText>{this.props.biz.intro_body}</CardText>

          <Button>Add to cart</Button>
          <CardFooter>Footer</CardFooter>
        </CardBody>
      </Card>

      </div>
    );
  }
}

export default BusinessInfoCard;