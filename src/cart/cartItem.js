import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FormHelperText from "@material-ui/core/FormHelperText";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const sampleBookImage = require("../../static/sample_book.png")

const CartItem = ({item, removeItemFromCart}) => {
    const handleRemoveItem = () => removeItemFromCart(item.ID);

    return (
        <>
            <Grid container>
                <Grid
                    item
                    xs={12}
                    md={2}
                    display='grid'
                >
                    <img id={`image${item.ID}`} src={sampleBookImage} alt={item.ID} height='150' width='150'/>
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={2}
                    display='grid'
                >
                    <Typography id="title" variant='inherit'>{item.Title}</Typography>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={3}
                    md={2}
                    display='grid'
                >
                    <Box>
                        <FormHelperText>Price </FormHelperText>
                        <Typography id="price" variant='inherit'>{'$' + item.Price}</Typography>
                    </Box>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={3}
                    md={2}
                    display='grid'
                >
                    <FormHelperText>Quantity </FormHelperText>
                    <Typography id="quantity" variant='inherit'>{item.quantity}</Typography>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={3}
                    md={2}
                    display='grid'
                >
                    <FormHelperText>Subtotal </FormHelperText>
                    <Typography id="subtotal" variant='inherit'>
                        {'$' + (item.Price * item.quantity).toFixed(2)}
                    </Typography>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={2}
                    md={1}
                    display='grid'
                >
                    <Tooltip title='Delete' placement='top'>
                        <IconButton id="deleteBtn" onClick={handleRemoveItem}>
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
        </>
    );
};

export default CartItem;
