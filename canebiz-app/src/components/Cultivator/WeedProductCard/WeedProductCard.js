import React, {Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody } from 'reactstrap';


class WeedProductCard extends Component {
  constructor(props) {
    super(props);
    }

    render() {

    return (
      <div>
        <Card>

        <CardImg top width="100%" src="../../../../public/assets/images/white-rhino.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.props.plant.city}</CardTitle>
          <CardSubtitle>{this.props.plant.city}</CardSubtitle>
          <CardText>{this.props.plant.city}</CardText>
          <CardText>{this.props.plant.city}</CardText>
          <CardText>{this.props.plant.city}</CardText>
          <Button>Add to cart</Button>
        </CardBody>
      </Card>
      </div>
    );
  }
}

export default WeedProductCard;