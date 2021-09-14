import React, {useEffect, useCallback, useState} from "react";
import {useHistory} from "react-router-dom";
import {useParams} from "react-router-dom";
import api from "../services/api";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIosIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 20
    },
    paper: {
        padding: theme.spacing(2),
        margin: "auto",
        minWidth: 1000,
    },
    image: {
        width: 250,
        height: 250,
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
    },
    photo: {
        height: 20,
        width: 20
    }
}));


const Product = () => {
    const classes = useStyles();
    const history = useHistory();
    const toHome = useCallback(() => history.push("/"), [history]);

    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [imgArr, setImgArr] = useState([]);

    useEffect(() => {
        api.get(`/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoading(false);
                let tempImgArr = [];
                tempImgArr.push(res.data.image1);
                tempImgArr.push(res.data.image2);
                setImgArr(tempImgArr);
            });
    }, []);

    return (
        <div className={classes.root}>
            {loading ? (
                <div> Product is Loading</div>
            ) : (
                <div>
                    <Paper data-testid={`product-info-${product.id}`} className={classes.paper}
                           style={{backgroundColor: `${product.backgroundColor}`, color: `${product.textColor}`}}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Carousel
                                    NextIcon={<ArrowForwardIosIcon/>}
                                    PrevIcon={<ArrowBackIosIcon/>}
                                    autoPlay={true}
                                    timeout={500}
                                >
                                    {
                                        imgArr.map((item) => <img className={classes.image} alt="complex" src={item}/>)
                                    }
                                </Carousel>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        {(product.ukOnly) ?
                                            <Grid container
                                                  direction="row"
                                                  justify="flex-start"
                                                  alignItems="center"
                                                  spacing={2}
                                            >
                                                <Grid item>
                                                    <Typography gutterBottom variant="h3">
                                                        {product.title}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <img src={process.env.PUBLIC_URL + "/united-kingdom.png"}
                                                         alt={"ukOnly"}
                                                         className={classes.photo}/>
                                                </Grid>
                                            </Grid>
                                            :
                                            <Typography gutterBottom variant="h3">
                                                {product.title}
                                            </Typography>
                                        }
                                        <Typography variant="h5" gutterBottom>
                                            {product.binomialName}
                                        </Typography>
                                        <Typography variant="body2">
                                            {product.description}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" style={{backgroundColor: `${product.accentColor}`}}
                                                onClick={() => toHome()}>All Products</Button>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h3">£{product.price}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            )}
        </div>
    );
};

export default Product;
