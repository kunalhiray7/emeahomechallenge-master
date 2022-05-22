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
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
    const [anchorEl, setAnchorEl] = React.useState(null);

    const navigateToCart = (e) => {
        e.preventDefault()
        navigate(paths.CART)
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigateToHome = () => {
        navigate(paths.HOME)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return <div className={classes.root}>
        <AppBar id="appBar" position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={handleClick}
                >
                    <MenuIcon/>
                </IconButton>
                <Menu
                    id="bookShopMenu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={navigateToHome}>Home</MenuItem>
                    <MenuItem onClick={navigateToCart}>Cart</MenuItem>
                </Menu>
                <Typography variant="h6" className={classes.title}>
                    Book Shop
                </Typography>
                <Button onClick={navigateToCart} color="inherit">Cart</Button>
            </Toolbar>
        </AppBar>
    </div>
}
