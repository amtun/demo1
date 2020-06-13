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

import {
    MixedWidget1,
    MixedWidget14,
    ListsWidget9,
    StatsWidget11,
    StatsWidget12,
    ListsWidget1,
    AdvanceTablesWidget2,
    AdvanceTablesWidget4,
    ListsWidget3,
    ListsWidget4,
    ListsWidget8
} from "../../_metronic/_partials/widgets";
import Button from '@material-ui/core/Button';
import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp';
import ChatBubbleOutlineSharpIcon from '@material-ui/icons/ChatBubbleOutlineSharp';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

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
}));

export function FxDashboardPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>


            <Grid container spacing={3} justify='flex-start' alignItems='flex-start'>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        <AttachMoneyIcon />

                        <div className={classes.textBlue}>
                            <p >Total Income ($)</p>
                        </div>
                        <p >50$</p>
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        <DirectionsIcon />
                        <div className={classes.textBlue}>
                            <p>Direct Income ($)</p>
                        </div>
                        <p>50$</p>
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        <DirectionsIcon />
                        <div className={classes.textBlue}>
                            <p>Team Income ($)</p></div>
                        <p>50$</p>
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        <DirectionsIcon />
                        <div className={classes.textBlue}>
                            <p>Current Cycle ($)</p></div>
                        <p>50$</p>
                    </Paper>
                </Grid>
                <Grid item xs={4} >
                    <Paper className={classes.paperLeft}>
                        <h3 className={classes.textBlue}>Affiliate link</h3>
                        <p>http://localhost:3000/dashboard                         <Button variant="contained" color="primary" className={classes.button}>
                            Copy
                        </Button></p>
                        <p className={classes.textOrange}>Please purchase a license to activate your affiliate link.</p>
                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <StatsWidget11 className="card-stretch card-stretch-half gutter-b" />
                </Grid>
                <Grid item xs={6} >
                    <Paper className={classes.paper} >
                        <h3 className={classes.textBlue}>Presentation</h3>
                        <iframe width="365" height="205" src="https://www.youtube.com/embed/C872QMmfJPA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Download our Presentation (English)
                        </Button>
                    </Paper>
                </Grid>

                <Grid item xs={6}>
                    <Paper className={classes.paperLeft}>
                        <h3>Recent News</h3>
                        <p><AssignmentSharpIcon />5000 MEMBERS</p>
                        <p>2020-05-25 20:49:38</p>
                        <p><AssignmentSharpIcon />SCHEDULE CHANGE PRESENTATION</p>
                        <p>2020-05-25 20:49:38</p>
                        <p><AssignmentSharpIcon />New Youtube address</p>
                        <p>2020-05-25 20:49:38</p>
                        <p><AssignmentSharpIcon />IMPORTANT INFORMATION</p>
                        <p>2020-05-25 20:49:38</p>
                        <p><AssignmentSharpIcon />PROMISED THING.</p>
                        <p>2020-05-25 20:49:38</p>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paperLeft}>
                        <h3>Tickets </h3>
                        <p><ChatBubbleOutlineSharpIcon />Please reset 2FA</p>
                        <p>2020-05-25 20:49:38</p>
                        <p><ChatBubbleOutlineSharpIcon />I need more coin!</p>
                        <p>2020-05-25 20:49:38</p>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paperLeft}>
                        <h3 >My direct partners (0 partners in total)</h3>
                        <Paper className={classes.rootTable}>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Username</StyledTableCell>
                                        <StyledTableCell align="right">Email</StyledTableCell>
                                        <StyledTableCell align="right">Licence</StyledTableCell>
                                        <StyledTableCell align="right">Registration Date</StyledTableCell>
                                        <StyledTableCell align="right">Licence amount</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map(row => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                            <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Paper>
                </Grid>
            </Grid>


        </div>
    );
}






