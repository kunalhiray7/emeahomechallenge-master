import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import {LabelWithValue} from "../common/components/labelWithValue";
import {fetchBook} from "../api/booksApi";
import CartService from "../cart/cartService";
import {Quantity} from "../common/components/qunatity";
import {Error} from "../common/components/error";

const sampleBookImage = require("../../static/sample_book.png")

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.grey.A100
    },
    addToCartBtn: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
        backgroundColor: "#3f51b5",
        color: "White"
    }
}));

export function BookDetails(props) {
    const classes = useStyles();
    const [book, setBook] = useState({
        ID: "",
        Title: "",
        Author: "",
        Genre: "",
        SubGenre: "",
        Price: 0,
        Publisher: ""
    });

    const [error, setError] = useState(undefined)
    const [quantity, setQuantity] = useState(0)
    const [open, setOpen] = React.useState(false);
    let {id} = useParams();

    React.useEffect(() => {
        fetchBook(id).then(setBook).catch(setError);
    }, [id])

    const handleAddToCart = (e) => {
        e.preventDefault();
        CartService.addItemToCart({...book, quantity})
        setOpen(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return <>

        {error ? (<Error id="error" message={`Error while fetching book details! - ${error.message}`}/>)
            : (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <Card raised>
                                <CardMedia component='img' image={sampleBookImage} alt={123}/>
                            </Card>
                        </Paper>
                    </Grid>
                    <Grid id="bookDetails" item xs={8}>
                        <Typography variant="h4">{book.Title} by {book.Author}</Typography>
                        <Paper className={classes.paper}>
                            <LabelWithValue label="Title" value={book.Title} fieldName="title"/>
                            <LabelWithValue label="Author" value={book.Author} fieldName="author"/>
                            <LabelWithValue label="Genre" value={book.Genre} fieldName="genre"/>
                            <LabelWithValue label="SubGenre" value={book.SubGenre} fieldName="subgenre"/>
                            <LabelWithValue label="Publisher" value={book.Publisher} fieldName="publisher"/>
                            <LabelWithValue label="Price" value={`$${book.Price}`} fieldName="price"/>
                        </Paper>
                        <Quantity id="quantity" callback={setQuantity}/>
                        <Button className={classes.addToCartBtn} id="addToCart" type="primary"
                                onClick={handleAddToCart}><ShoppingCartIcon/> Add To Cart</Button>
                    </Grid>
                </Grid>
                <Snackbar id="snackbar" open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Book is added in the cart!
                    </Alert>
                </Snackbar>
            </div>
        )}
    </>
}
