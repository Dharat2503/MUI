
import React from 'react';
import { blue } from '@mui/material/colors';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Favorite, MoreVert, Share } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { IconButtonProps } from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { spacing } from '@mui/system';


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const MuiMultiCard = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
        <div style={{ display:'flex'}}>
        <Card sx={{ maxWidth: 300,paddingX: 2,marginX:2}}>
            <CardHeader
                avatar={<Avatar sx={{ bgcolor: blue[500] }}>D</Avatar>}
                action={
                    <IconButton area-label='settings'>
                        <MoreVert />
                    </IconButton>
                }
                title="Dhara's Restaurant"
                subheader='March 25, 2009'
            />
            <CardMedia
                component='img'
                height='200'
                image="data:image/jpeg;base64,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"
                alt="Burgir"
            />
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                    This impressive Burgir a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of
                    frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton area-label='add to favorites'>
                    <Favorite />
                </IconButton>
                <IconButton area-label='share'>
                    <Share />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label='show more'
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Preheat an outdoor grill for high heat and lightly oil grate.
                        Whisk together egg, salt, and pepper in a medium bowl. ...
                        Add ground beef and bread crumbs and mix with your hands or a fork until well blended. ...
                        Form into four 3/4-inch-thick patties. ...
                        Place patties on the preheated grill. ...
                        Serve hot and enjoy!
                    </Typography>
                    <Typography paragraph>
                        Meanwhile, combine ground beef, onion, cheese, egg, onion soup mix, minced garlic, garlic powder, soy sauce, Worcestershire sauce, parsley, basil, oregano, rosemary, salt, and pepper in a large bowl. Use your hands to form the mixture into 4 patties.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
        <Card sx={{ maxWidth: 300,paddingX: 2}}>
            <CardHeader
                avatar={<Avatar sx={{ bgcolor: blue[500] }}>D</Avatar>}
                action={
                    <IconButton area-label='settings'>
                        <MoreVert />
                    </IconButton>
                }
                title="Dhara's Restaurant"
                subheader='March 25, 2009'
            />
            <CardMedia
                component='img'
                height='200'
                image="data:image/jpeg;base64,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"
                alt="Burgir"
            />
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                    This impressive Burgir a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of
                    frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton area-label='add to favorites'>
                    <Favorite />
                </IconButton>
                <IconButton area-label='share'>
                    <Share />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label='show more'
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Preheat an outdoor grill for high heat and lightly oil grate.
                        Whisk together egg, salt, and pepper in a medium bowl. ...
                        Add ground beef and bread crumbs and mix with your hands or a fork until well blended. ...
                        Form into four 3/4-inch-thick patties. ...
                        Place patties on the preheated grill. ...
                        Serve hot and enjoy!
                    </Typography>
                    <Typography paragraph>
                        Meanwhile, combine ground beef, onion, cheese, egg, onion soup mix, minced garlic, garlic powder, soy sauce, Worcestershire sauce, parsley, basil, oregano, rosemary, salt, and pepper in a large bowl. Use your hands to form the mixture into 4 patties.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    
      
     
        </div>
        </>

        
    );
};

export default MuiMultiCard;
