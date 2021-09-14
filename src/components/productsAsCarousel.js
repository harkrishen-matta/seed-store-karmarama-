import React, {useCallback} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import {Button} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles({
    card: {
        maxWidth: 500,

    },
    media: {
        height: 140,
    },

    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    photo: {
        height: 20,
        width: 20
    }
});

const Item = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const toProduct = useCallback((id) => history.push(`/product/${id}`), [history]);
    return (

        <Card className={classes.card}>
            <CardHeader
                avatar={(props.item.ukOnly) ?
                    <img src={process.env.PUBLIC_URL + "/united-kingdom.png"} alt={"ukOnly"} className={classes.photo}/>
                    :
                    <div></div>
                }
                title={props.item.title}
                subheader={<div>
                    <Typography
                        variant="subtitle2">{props.item.binomialName}
                    </Typography>
                    <Typography
                        variant="subtitle2">{(props.item.price) ? `£${props.item.price}` : "TBC"}
                    </Typography>
                </div>}
            />
            <CardActionArea onClick={() => toProduct(props.item.id)}>
                <CardMedia
                    className={classes.media}
                    image={props.item.image1}
                    title={props.item.title}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.item.description}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => toProduct(props.item.id)}>
                    Learn More
                </Button>
            </CardActions>
        </Card>

    );
};

const ProductsAsCarousel = (props) => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Carousel
                NextIcon={<ArrowForwardIosIcon/>}
                PrevIcon={<ArrowBackIosIcon/>}
                autoPlay={true}
                timeout={500}
            >
                {
                    props.products.map((item) => <Item key={item.order} item={item}/>)
                }
            </Carousel>
        </div>
    );
};

export default ProductsAsCarousel;
