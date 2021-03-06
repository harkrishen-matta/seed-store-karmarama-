import React, {useCallback} from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();

    const history = useHistory();
    const toHome = useCallback(() => history.push("/"), [history]);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} onClick={() => toHome()}>
                        Seed Store
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;

