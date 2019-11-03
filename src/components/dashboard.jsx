import React, { Component } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core' // overiding default css properties
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import KeepIcon from '../assets/keep.jpg'
import bulb from '../assets/bulb.png'
import '../Dashboard.css'
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

//child components
import {TakeNote} from './TakeNote'
/**
 * @description - This prop is a inbuilt prop we are modifying it
 */
const theme = createMuiTheme({
    overrides: {
        'MuiPaper': {
            'elevation1': {
                boxShadow: "0px 0px 3px 0px #888888",
            }
        },
        'MuiFormControl': {
            'marginNormal': {
                width: "100%"
            }
        },
        'MuiButton': {
            'containedPrimary': {
                top: "90%",
                left: "80%"
            },
        },
        "MuiFilledInput": {
            "inputHiddenLabel": {
                "margin": "0px 0px 0px 26px"
            },
            "root": {
                "background": "#f1f3f4",
                "padding": "0px 0px 0px 26px",
                "backgroundColor": "#f1f3f4",
                "height": "40px",
                "top": "15px",
                "width": "260%",
                "left": "-91%",
                "borderRadius": "5px",
                "boxShadow": "2px",
                "transition": "background 100ms ease-in,width 100ms ease-out"
            },

        },
        "MuiSvgIcon": {
            "root": {
                "position": "absolute",
                "left": "10%",
                "cursor": "pointer",

            }
        },
        "MuiInputAdornment": {
            "root": {
                "position": "absolute",
                "left": "2%"
            }
        },
        "MuiAvatar": {
            "root": {
                position: "absolute",
                left: "40%",
                display: "flex",
                justifyContent: "flex-end"
            },
            "colorDefault": {
                left: "95%",
                top: "20%"
            }
        },
        "MuiDrawer": {                       //to adjust the drawer just below the dashboard
            "paperAnchorDockedLeft": {
                top: "8%",
                width: "22%", // width of the drawer
                borderRight:" 0px solid" // 0px vanishes the border of the drawer
            }
        }

    }
})

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        height: "20px",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }, dense: {
        marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
    },
    avatar: {
        margin: 10,
    },
    orangeAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500],
    },
    purpleAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },

}));

export class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            toggle: false,
            open: false

        }
        this.classes = useStyles.bind(this);

    }
    handleDrawerOpen = () => {
        //  this.setOpen(true);
        this.setState(state => ({ open: !state.open }))  //negate the state of open field
    };

    handleDrawerClose = () => {
        this.setState({ open: false })
    };

    handleView = () => {
        this.setState({ toggle: true })
    }
    spoilView = () => {
        this.setState({ toggle: false })
    }
    render() {
        return (
            <div className="MainDiv">
                <MuiThemeProvider theme={theme}>
                    <Card className="CardL">
                        {this.state.toggle ?
                            <img className="View" src={require('../assets/grid.svg')} onClick={this.spoilView} />
                            :
                            <img className="View" src={require('../assets/otherGrid.svg')} onClick={this.handleView} />
                        }
                        <div className="MenuI" onClick={this.handleDrawerOpen}><MenuIcon /></div>
                        <TextField className="SearchBar"
                            id="filled-hidden-label"
                            className={clsx(this.classes.textField, this.classes.dense)}
                            hiddenLabel
                            variant="filled"
                            placeholder="Search"
                            InputProps={{ 'aria-label': 'hidden label' }, {
                                endAdornment: (
                                    <InputAdornment position="10%">
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <img className="KeepIcon" src={KeepIcon} alt="keep pic"></img>
                        <div className="Keep">Fundoo</div>
                        <div className="AlignMent">  <Grid container justify="flex-end" alignItems="flex-end">
                            <Avatar className={this.classes.orangeAvatar}>N</Avatar>
                        </Grid></div>
                    </Card>
                    <Drawer
                        className={this.classes.drawer}
                        variant="persistent"
                        anchor="left"
                        open={this.state.open} //opens only when rhs true
                        classes={{
                            paper: this.classes.drawerPaper,
                        }}
                    >
                        <ListItem button key="Notes">
                            <ListItemIcon>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="gb_Rc"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></svg>
                                <ListItemText className="DrawerText" primary="Notes" />
                            </ListItemIcon>
                        </ListItem>

                        <ListItem button key="Reminders">
                            <ListItemIcon>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="gb_Rc"><path d="M18 17v-6c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v6H4v2h16v-2h-2zm-2 0H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"></path></svg>                                <ListItemText className="DrawerText" primary="Reminders" />
                            </ListItemIcon>
                        </ListItem>
                    </Drawer>
                    <TakeNote />
                </MuiThemeProvider></div>
        )
    }
}
