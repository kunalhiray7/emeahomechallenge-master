import React, {Fragment, useState} from "react";
import CartService from "./cartService";
import Container from "@material-ui/core/Container";
import CartItem from "./cartItem";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    clearBtn: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        backgroundColor: "#3f51b5",
        color: "white",
    },
    btnContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    }
}));

export const Cart = () => {
    const classes = useStyles();
    const [items, setItems] = useState(CartService.fetchAllItems())

    const removeItemFromCart = (id) => {
        CartService.removeItemFromCart(id)
        setItems(CartService.fetchAllItems())
    }

    const clearCart = (e) => {
        e.preventDefault()
        CartService.clear()
        setItems([])
    }

    return <div className={classes.root}>
        {items.length > 0 ? (
            <>
                <Container className={classes.btnContainer}>
                    <Button className={classes.clearBtn} id="clearCartBtn" type="primary"
                            onClick={clearCart}>Clear</Button>
                </Container>
                <Container>
                    {items.map((item) => (
                        <Fragment key={item.ID}>
                            <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                            <Divider variant='middle' sx={{my: 3}}/>
                        </Fragment>
                    ))}
                </Container>
                <Typography
                    variant='h6'
                    align='right'
                    className='animate__animated animate__fadeInUp'
                >
                    Total: {'$' + CartService.totalCartPrice().toFixed(2)}
                </Typography>
            </>
        ) : (<><Typography id="noItems" variant='inherit'>No Items in the cart!!</Typography></>)}
    </div>
}
