import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DirectionsIcon from '@material-ui/icons/Directions';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp';
import ChatBubbleOutlineSharpIcon from '@material-ui/icons/ChatBubbleOutlineSharp';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];


const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paperLeft: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: '#032C26',
    },
    textBlue: {
        color: '#032C26',
    },
    textOrange: {
        color: '#DF6E0A',
    },
    rootTable: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    container: {
        flexWrap: 'wrap',
    },
    textField: {

    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));

export function ProfilePage() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3} justify='flex-start' alignItems='flex-start'>
            <Grid item xs={4}>
                    <Paper className={classes.paperLeft}>
                        <h3>Profile </h3>
                        <p>Name: Nguyen</p>
                        <p>Firstname: Van Diep</p>
                        <p>Login: MP99999</p>
                        <p>Email: nmq88129@gmail.com</p>
                        <p>Country: Vietnam</p>
                        <p>Status: Not active</p>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paperLeft}>
                        <h3>E-wallet balance: $ 0.00</h3>
                        <form className={classes.container} noValidate autoComplete="off">
                            <p>GOOGLE AUTH CODE</p>
                            <Button variant="contained" color="primary" className={classes.button}>
                                Active your Google Auth
                            </Button>
                        </form>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paperLeft}>
                        <h3>Change your current pasword:</h3>
                        <form className={classes.container} noValidate autoComplete="off">
                            <p>Enter your current password:</p>
                            <TextField
                                id="outlined-bare"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            <p>Your new password:</p>
                            <TextField
                                id="outlined-bare"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            <p>Repeat your new password:</p>
                            <TextField
                                id="outlined-bare"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            <p>GOOGLE AUTH (mandatory to be activated):</p>
                            <TextField
                                id="outlined-bare"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            <Button variant="contained" color="primary" className={classes.button}>
                                Change your password
                            </Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}


