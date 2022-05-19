import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

export function BookCard(props) {
    const classes = cardStyles();
    const navigate = useNavigate();

    const {books} = props;

    const navigateToBookDetails = (e, book) => {
        e.preventDefault()
        navigate(`/books/${book.ID}`)
    }

    return (
        <>
            {Object.keys(books).map(bookIndex => {
                const book = books[bookIndex];

                return (
                    <Card id={`book_${bookIndex}`} key={book.Title} className={classes.root}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {book.Title}
                            </Typography>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                {book.Author}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={(e) => navigateToBookDetails(e, book)}>Book in detail</Button>
                        </CardActions>
                    </Card>
                );
            })}
        </>
    );
}

const cardStyles = makeStyles({
    root: {
        minWidth: '50%',
        marginBottom: 8,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
