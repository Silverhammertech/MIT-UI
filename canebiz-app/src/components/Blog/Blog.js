import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';
import post1 from '../assets/posts/blog-post.1.md';
import post2 from '../assets/posts/blog-post.2.md';
import post3 from '../assets/posts/blog-post.3.md';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const sections = [
  'Recreational',
  'Medicinal',
  'New Strains',
  'Business',
  'Cultivators',
  'Dispensaries',
  'Manufacturers',
  'Distributors',
];

const featuredPosts = [
  {
    title: 'A Brief Overview of California\'s Medical Marijuana Laws',
    date: 'Sep 10',
    description:
      'In the last 15 years, California has enacted a number of laws that regulate the use, possession, cultivation and distribution of medical marijuana. \"Medical\" marijuana< is legal marijuana...that is, as long as its possession, use, cultivation and distribution strictly adhere to the following guidelines.'
  },
  {
    title: 'Green Man Cannabis ',
    date: 'Aug 11',
    description:
      'What sets Green Man apart from other shops, though, isn’t just the quality of its herb (which few shops have managed to duplicate). It’s the staff. My budtender, a tattooed woman about my age, was a total pot nerd. I could tell she\'d be able to talk strains, lineage and potency until the cows came home. Which is good, because that’s exactly what I like to do when confronted with grade-A cannabis.'
  },
];

const posts = [post1, post2, post3];

const archives = [
    'August 2019',
    'July 2019',
    'June 2019',
    'May 2019',
    'April 2019',
  'March 2019',
  'February 2019',
  'January 2019',
  'December 2018',
  'November 2018',
  'October 2018',
  'September 2018',

];

const social = ['Instagram', 'Twitter', 'Facebook'];

function Blog(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <Toolbar className={classes.toolbarMain}>
          <Button size="small">Subscribe</Button>
          <Typography
            variant="headline"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Blog
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        </Toolbar>
        <Toolbar variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Typography color="inherit" noWrap key={section}>
              {section}
            </Typography>
          ))}
        </Toolbar>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography variant="display2" color="inherit" gutterBottom>
                  Cannabis Dispensary Marijuana Cultivation + Delivery Business FOR SALE
                  </Typography>
                  <Typography variant="headline" color="inherit" paragraph>
                  Premium Quality Recreational Dispensary with Excellent Growth Potential located in Pueblo, CO. Building is 4,000 sf on 1 acre. Includes RMC License. Presently no grow associated with this dispensary. All products are purchased from the wholesale market for the store. The business is currently operating with 4 points of sale and is being expanded to 5-7 points of sale shortly. Property has preliminary approval from Pueblo County to add an extraction lab and greenhouse if.
                  </Typography>
                  <Typography variant="title" color="inherit">
                    Continue reading...
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={40} className={classes.cardGrid}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography variant="headline">{post.title}</Typography>
                      <Typography variant="subheading" color="textSecondary">
                        {post.date}
                      </Typography>
                      <Typography variant="subheading" paragraph>
                        {post.description}
                      </Typography>
                      <Typography variant="subheading" color="primary">
                        Continue reading...
                      </Typography>
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className={classes.cardMedia}
                      image="../assets/images/How_to_Start_a_Marijuana_Dispensary.png"
                      title="Dispensary"
                    />
                  </Hidden>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
          <Grid container spacing={40} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="title" gutterBottom>
                From the Weed Pipe
              </Typography>
              <Divider />
              {posts.map(post => (
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                  {post}
                </Markdown>
              ))}
            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="title" gutterBottom>
                  About
                </Typography>
                <Typography>
                  This Blog channel discusses issues, provides opinions, and provides product and plant insights and offers for all your medicinal and recreational needs.
                </Typography>
              </Paper>
              <Typography variant="title" gutterBottom className={classes.sidebarSection}>
                Archives
              </Typography>
              {archives.map(archive => (
                <Typography key={archive}>{archive}</Typography>
              ))}
              <Typography variant="title" gutterBottom className={classes.sidebarSection}>
                Social
              </Typography>
              {social.map(network => (
                <Typography key={network}>{network}</Typography>
              ))}
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </div>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="title" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subheading" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);