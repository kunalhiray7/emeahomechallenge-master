import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    error: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    }
}));

export const Error = (props) => {
    const classes = useStyles();
    return <div className={classes.error}>
        <MuiAlert severity="error" elevation={6} variant="filled" {...props}>{props.message}</MuiAlert>
    </div>
}
