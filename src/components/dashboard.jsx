import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core' // overiding default css properties
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import KeepIcon from '../assets/keep.jpg'
import '../Dashboard.css'
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';

//child components
import { TakeNote } from './TakeNote'
import { Display } from './display'
import { DrawerMade } from './drawer'
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
                borderRight: " 0px solid" // 0px vanishes the border of the drawer
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
            open: false,
            displayNotes: true,  //when dashboard is going to open notes should be displayed 
            displayReminders: false,
            displayArchives: false,
            displayTrash: false
        }
        this.classes = useStyles.bind(this);

        //creating a reference
        this.CreatingNoteInstance = React.createRef()
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
    NoteDisplay = () => {
        this.CreatingNoteInstance.current.allNotesDisplaying()
    }

    displayNotes = (booleanValue) => {//whether to display notes or not
        console.log("\n\n\t dashboard--> notes --> boolean value-->",booleanValue)
        this.setState({
            displayNotes: true,
            displayReminders: false,
            displayArchives: false,
            displayTrash: false
        })
    }
    displayReminders = (booleanValue) => {//whether to display notes or not
        console.log("\n\n\t dashboard--> reminders --> boolean value-->",booleanValue)
        this.setState({
            displayNotes: false,
            displayReminders: true,
            displayArchives: false,
            displayTrash: false
        })
    }
    displayArchives = (booleanValue) => {//whether to display notes or not
        this.setState({
            displayNotes: false,
            displayReminders: false,
            displayArchives: true,
            displayTrash: false
        })
    }
    displayTrash = (booleanValue) => {//whether to display notes or not
        this.setState({
            displayNotes: false,
            displayReminders: false,
            displayArchives: false,
            displayTrash: booleanValue
        })
    }
    render() {
        return (
            <div className="MainDiv">
                <MuiThemeProvider theme={theme}>
                    <Card className="CardL">
                        {this.state.toggle ?
                            <img className="View" src={require('../assets/grid.svg')} alt="grid" onClick={this.spoilView} />
                            :
                            <img className="View" src={require('../assets/otherGrid.svg')} alt="grid" onClick={this.handleView} />
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
                        <div className="Keep">Fundoo Notes</div>
                        <div className="AlignMent">  <Grid container justify="flex-end" alignItems="flex-end">
                            <Avatar className={this.classes.orangeAvatar}>N</Avatar>
                        </Grid></div>
                    </Card>
                    <DrawerMade openingDrawer={this.state.open} notesArray={this.displayNotes}
                        remindersArray={this.displayReminders}
                        archivesArray={this.displayArchives}
                        trashArray={this.displayTrash} />
                    <div id="Two">
                        {/* Taking note component will render here 2  */}
                        <TakeNote refresh={this.NoteDisplay} />
                        {/* All note will be displayed here using the display component 3*/}
                        <Display ref={this.CreatingNoteInstance} fetchNotes={this.state.displayNotes}
                            fetchReminders={this.state.displayReminders}
                            fetchArchives={this.state.displayArchives}
                            fetchTrash={this.state.displayTrash} />
                    </div>
                </MuiThemeProvider></div>
        )
    }
}
