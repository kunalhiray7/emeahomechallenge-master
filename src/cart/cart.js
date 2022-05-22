import React, {Fragment, useState} from "react";
import CartService from "./cartService";
import Container from "@material-ui/core/Container";
import CartItem from "./cartItem";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

export const Cart = () => {

    const [items, setItems] = useState(CartService.fetchAllItems())

    const removeItemFromCart = () => {
    }

    return <>
        {items.length > 0 ? (
            <>
                <Container>
                    {items.map((item) => (
                        <Fragment key={item.ID}>
                            <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                            <Divider variant='middle' sx={{my: 3}}/>
                        </Fragment>
                    ))}
                </Container>
            </>
        ) : (<><Typography variant='inherit'>No Items in the cart!!</Typography></>)}
    </>
}
