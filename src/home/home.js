import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {BookCard} from "../books/bookCard";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
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

export default function Home() {
    const classes = useStyles();

    const [books, setBooks] = useState({});
    const [error, setError] = useState({});

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch('http://localhost:3000/api/books')
            const books = await response.json();
            setBooks(books);
        }
        fetchBooks().catch(error => setError(error));
    }, []);

    return (
        <div className={classes.root}>
            <AppBar id="appBar" position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Book Shop
                    </Typography>
                    <Button color="inherit">Cart</Button>
                </Toolbar>
            </AppBar>
            <main className={classes.content}>
                <BookCard books={books} />
            </main>
        </div>
    );
}