import React, {useState} from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    quantityPanel: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.grey.A100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    labelAndIcon: {
        width: "30%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        margin: "5px",
        padding: "6px",
    },
    value: {
        width: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        margin: "5px",
        padding: "6px",
    },
    buttonGroup: {
        width: "60%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        margin: "5px",
        padding: "6px",
    }
}));
export const Quantity = ({callback}) => {
    const classes = useStyles();
    const [quantity, setQuantity] = useState(0);
    const increment = () => {
        let newQuantity = quantity + 1;
        setQuantity(newQuantity);
        callback(newQuantity);
    };
    const decrement = () => {
        let newQuantity;
        if (quantity > 0) {
            newQuantity = quantity - 1
        }
        else {
            newQuantity = 0
        }
        setQuantity(newQuantity)
        callback(newQuantity)
    };

    return <>
        <div className={classes.root}>
            <div className="center_div">
                <div id="quantityPanel" className={classes.quantityPanel}>
                    <div className={classes.labelAndIcon}>
                        <Typography>Quantity</Typography>
                    </div>
                    <div className={classes.value}>
                        <Typography id="quantity" variant="h6">{quantity}</Typography>
                    </div>
                    <div className={classes.buttonGroup}>
                    <Tooltip title="Add">
                        <Button id="incrementBtn" onClick={increment}>
                            <AddIcon/>
                        </Button>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button id="decrementBtn" onClick={decrement}>
                            <RemoveIcon/>
                        </Button>
                    </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    </>
}
