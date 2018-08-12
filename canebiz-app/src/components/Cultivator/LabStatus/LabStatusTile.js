import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const LabStatusTile = (props) => {
    return (
        <div>
            {props.id ? (
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.id}
                        </Typography>

                        <Typography component="p">
                            {props.temperature}
                        </Typography>
                    </CardContent>
                </Card>
            ) : null}
        </div>
    )
}


export default LabStatusTile;