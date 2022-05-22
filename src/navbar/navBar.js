import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import {useNavigate} from "react-router-dom";
import {paths} from "../common/constants/constants";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginBottom: '10px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}));

export default function NavBar() {
    const classes = useStyles();
    const navigate = useNavigate();

    const navigateToCart = (e) => {
        e.preventDefault()
        navigate(paths.CART)
    }

    return <div className={classes.root}>
        <AppBar id="appBar" position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Book Shop
                </Typography>
                <Button onClick={navigateToCart} color="inherit">Cart</Button>
            </Toolbar>
        </AppBar>
    </div>
}
