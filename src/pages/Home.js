import React, {useEffect, useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {GetProducts} from "../store/modules/products/actions";
import ProductsAsList from "../components/productsAsList";
import ProductsAsCarousel from "../components/productsAsCarousel";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
}));


const Home = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const products = useSelector(state => state.products.Products);
    const loading = useSelector(state => state.products.loading);

    useEffect(() => {
        dispatch(GetProducts());
    }, []);

    return (
        <div>
            {loading ? (
                <div> Products are Loading</div>
            ) : (
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                    className={classes.root}
                    data-testid="home-grid"
                >
                    <Grid item>
                        <Typography variant="h2"> Products as a List </Typography>
                    </Grid>
                    <Grid item>
                        <ProductsAsList products={products}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h2"> Products as a Carousel </Typography>
                    </Grid>
                    <Grid item>
                        <ProductsAsCarousel products={products}/>
                    </Grid>
                </Grid>
            )}
        </div>
    );

};

export default Home;
