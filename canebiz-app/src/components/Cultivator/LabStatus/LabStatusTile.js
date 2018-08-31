import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const styles = theme => ({

  card: {

    maxWidth: 400,
    backgroundColor: '#8BC34A',

  },

  media: {

    height: 0,

    paddingTop: '56.25%', // 16:9

  },

  actions: {

    display: 'flex',

  },

  expand: {

    transform: 'rotate(0deg)',

    transition: theme.transitions.create('transform', {

      duration: theme.transitions.duration.shortest,

    }),

    marginLeft: 'auto',

    [theme.breakpoints.up('sm')]: {

      marginRight: -8,

    },

  },

  expandOpen: {

    transform: 'rotate(180deg)',

  },

  avatar: {

    backgroundColor: red[500],

  },

});



class LabStatusTile extends Component {

  state = { expanded: false
};



  handleExpandClick = () => {

    this.setState(state => ({ expanded: !state.expanded }));

  };



  render() {

    const { classes } = this.props;



    return (

      <div>

        <Card className={classes.card}>

          <CardHeader

            avatar={

              <Avatar aria-label="Cultivation Lab" className={classes.avatar}>

                CL

              </Avatar>

            }

            action={

              <IconButton>

                <MoreVertIcon />

              </IconButton>

            }

            title={this.props.id}

            subheader={this.props.temperature}

          />

          <CardMedia

            className={classes.media}

            image="../../assets/images/white-rhino.jpg"

            title="White Rhino: Indica 90 / Sativa 10"

          />

          <CardContent>

            <Typography component="p">

              White Rhino is a strong, fast-growing, near-pure indica strain with ancestry in the same lineage as her more famous relative, White Widow.  As the name suggests, this plant is tough and sturdy, with a thick skin for high temperatures as well as cold nights. This strain delivers a knockout, medicinal-grade indica stone.

            </Typography>

          </CardContent>

          <CardActions className={classes.actions} disableActionSpacing>

            <IconButton aria-label="Add to favorites">

              <FavoriteIcon />

            </IconButton>

            <IconButton aria-label="Share">

              <ShareIcon />

            </IconButton>

            <IconButton

              className={classnames(classes.expand, {

                [classes.expandOpen]: this.state.expanded,

              })}

              onClick={this.handleExpandClick}

              aria-expanded={this.state.expanded}

              aria-label="Show more"

            >

              <ExpandMoreIcon />

            </IconButton>

          </CardActions>

          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>

            <CardContent>

              <Typography paragraph variant="body2">

                White Rhino adapts well to any environment, and is known for her massive yields, especially in hydro grows. Green House recommends starting her with a medium-low pH (5.7 hydro / 5.8 soil) that is slowly increased until it reaches 6.5 at the end of flowering. EC levels should be kept under 2.4 in hydro and 2.0 in soil. Plants ripen in 9 weeks, or early October. To really see the rhino’s “white”, let her ripen one extra week.

              </Typography>

              <Typography paragraph>

                While these plants flourish in SOG or SCROG systems, they can also be grown in larger containers and allowed to vegetate into bushes. The White Rhino plant has a typical short squat stature, with short, thick branches and extremely compact internodes. She is a smart choice for indoor gardeners with space limitations, or indoor growers looking for a shorter plant. Plants grown in 5-gallon containers will finish at 4-5 feet if allowed to grow vegetatively for at least two weeks. With less veg time, or in small conatiners, plants stay at about 3 feet tall. Even plants with no root limitations finish no taller than 6 feet. When White Rhino is allowed to grow big, pruning is necessary to allow light and air to penetrate the inner and lower areas of the plant.

              </Typography>

              <Typography paragraph>

                
                The leaves on White Rhino are huge, full, and midnight green, and her stalks are very thick. her calyxes are small, round and super dense, forming rock hard colas. While not terrible odiferous while growing, the White Rhino harvest will have a pleasantly sweet smell. The toke is also sweetened with indica berry flavor, followed by a sharp aftertaste and sometimes about of coughing. White Rhino delivers a full-throttle indica stone. The buzz goes straight to the body, giving a rubbery, relaxed feeling that is nearly narcotic. It is a down-tempo smoke that endures, ideal for slow-paced recreation. White Rhino is prized in the medical community for effective relief of chronic pain.

              </Typography>

            </CardContent>

          </Collapse>

        </Card>

      </div>

    );

  }

}



LabStatusTile.propTypes = {

  classes: PropTypes.object.isRequired,

};


export default withStyles(styles)(LabStatusTile);

