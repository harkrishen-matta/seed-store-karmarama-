import React, {useCallback} from "react";
import {makeStyles} from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Typography from "@material-ui/core/Typography";
import {useHistory} from "react-router-dom";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        width: 1000,
        height: 800,
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)",
    },
    photo: {
        height: 20,
        width: 20,
        marginTop: 4,
        marginRight: 3
    }
}));


const ProductsAsList = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const toProduct = useCallback((id) => history.push(`/product/${id}`), [history]);


    return (
        <div className={classes.root}>
            <ImageList rowHeight={200} className={classes.imageList}>
                {props.products.map((item) => (
                    <ImageListItem data-testid="products-as-list" key={item.image1} onClick={() => toProduct(item.id)}>
                        <img src={item.image1} alt={item.title}/>
                        <ImageListItemBar
                            title={<Typography variant="h6"> {item.title} </Typography>}
                            subtitle={
                                <div>
                                    <Typography variant="caption">{item.binomialName} </Typography>
                                    <Typography
                                        variant="subtitle2">{(item.price) ? `£${item.price}` : "TBC"} </Typography>
                                </div>
                            }
                            actionIcon={
                                <Grid container
                                      direction="row"
                                      justify="center"
                                      alignItems="center" >
                                    <Grid item>
                                    <IconButton data-testid={`product-list-item-infoBtn${item.id}`} aria-label={`Full Details ${item.title}`} className={classes.icon}
                                                onClick={() => toProduct(item.id)}>
                                        <InfoIcon/>
                                    </IconButton>
                                    </Grid>
                                    <Grid item>
                                        {(item.ukOnly) ?
                                            <img src={process.env.PUBLIC_URL + "/united-kingdom.png"} alt={"ukOnly"}
                                                 className={classes.photo}/>
                                            :
                                            <div></div>
                                        }
                                    </Grid>
                                </Grid>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
};

export default ProductsAsList;
