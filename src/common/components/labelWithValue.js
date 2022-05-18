import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    singleRowField: {
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
        width: "70%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        margin: "5px",
        padding: "6px",
    }
}));

export const LabelWithValue = ({label, value, fieldName}) => {
    const classes = useStyles();

    return <div className={classes.singleRowField}>
        <div className={classes.labelAndIcon}>
            <Typography id={`${fieldName}Label`}>{label}</Typography>
        </div>
        <div className={classes.value}>
            <Typography id={`${fieldName}Value`} variant="h8">{value}</Typography>
        </div>
    </div>;
};
