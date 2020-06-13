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
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PeopleIcon from '@material-ui/icons/People';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Avatar from '@material-ui/core/Avatar';
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';

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
    paperRight: {
        padding: theme.spacing(2),
        textAlign: 'right',
        color: '#032C26',
    },
    paperCenter: {
        padding: theme.spacing(2),
        textAlign: 'center',
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
        minWidth: 200,
    },
    container: {
        flexWrap: 'wrap',
        marginLeft: theme.spacing(3),
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

export function NetworkPage() {
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
            <Grid container spacing={0} justify='flex-start' alignItems='flex-start'>
                <Grid item xs={6}>

                    <Grid container>
                        <Grid item xs={12}>
                            <Paper className={classes.paperCenter} >
                                <PersonPinCircleIcon fontSize='large' />
                                <a><h4>Peter</h4></a>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paperCenter} >
                                <PersonPinIcon fontSize='large' />
                                <a><h4>Peter Pain</h4></a>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paperCenter} >
                                <PersonPinIcon fontSize='large' />
                                <a><h4>Ken</h4></a>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paperCenter} >
                                <PeopleIcon fontSize='large' />
                                <a><h4>Shi</h4></a>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paperCenter} >
                                <PeopleIcon fontSize='large' />
                                <a><h4>Berba</h4></a>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paperCenter} >
                                <PeopleIcon fontSize='large' />
                                <a><h4>Lenk</h4></a>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paperCenter} >
                                <PeopleIcon fontSize='large' />
                                <a><h4>Popa</h4></a>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>

                            <Paper className={classes.paperCenter}>
                                <Button variant="contained" color="primary" className={classes.button}>
                                    Back to your binary
                            </Button>
                                <form className={classes.container} noValidate autoComplete="off">
                                    <TextField
                                        id="outlined-bare"
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <Button variant="contained" color="primary" className={classes.button}>
                                        Search
                                    </Button>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid item xs={6}>
                    <Paper className={classes.paperLeft}>
                        <h3 >Member: MP99999</h3>
                        <Paper className={classes.rootTable}>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">LEFT</StyledTableCell>
                                        <StyledTableCell align="center">STATUS: INACTIF</StyledTableCell>
                                        <StyledTableCell align="center">RIGHT</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                        <StyledTableRow >
                                            <StyledTableCell align="center">12</StyledTableCell>
                                            <StyledTableCell align="center">TOTAL MEMBERS</StyledTableCell>
                                            <StyledTableCell align="center">0</StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow >
                                            <StyledTableCell align="center">$500</StyledTableCell>
                                            <StyledTableCell align="center">CURRENT VOLUME</StyledTableCell>
                                            <StyledTableCell align="center">0</StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow >
                                            <StyledTableCell align="center">$1500</StyledTableCell>
                                            <StyledTableCell align="center">TOTAL VOLUME</StyledTableCell>
                                            <StyledTableCell align="center">0</StyledTableCell>
                                        </StyledTableRow>   
                                </TableBody>
                            </Table>
                        </Paper>
                        <br/>
                        <p >Note: To have an active binary you need an active direct in your left and right side.</p>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}


