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
import DoneAll from 'react-ionicons/lib/MdCheckmark'
import { searchInNotes } from '../services/services'

//child components
import { TakeNote } from './TakeNote'
import { Display } from './display'
import { DrawerMade } from './drawer'
import CircularIndeterminate from "./loader"
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
            "adornedEnd": {
                "paddingRight": "-7px"
            }

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
                left: "93%",
                top: "24%",
                display: "flex",
                justifyContent: "flex-end",
                cursor: "pointer"
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
        alignItems: 'center'
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
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
}));

const TITLE_ARRAY = ['Reminders', 'Archive', 'Trash']

export class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            toggle: false,
            open: false,
            displayNotes: true,  //when dashboard is going to open notes should be displayed 
            displayReminders: false,
            displayArchives: false,
            displayTrash: false,
            otherTitle: false,  // this will let the dom know that a new title has to be added 
            loading: false,
            success: false,
            load: false,
            titleArrayIndex: 0,
            enableSearching: false,
            search: ""
        }
        this.classes = useStyles.bind(this);

        //creating a reference ... reference is made to invoke the method of another component
        this.CreatingNoteInstance = React.createRef()
    }

    handleDrawerOpen = () => {
        //  this.setOpen(true);
        this.setState(state => ({ open: !state.open }))  //negate the state of open field
    };
    handleDrawerClose = () => {
        this.setState({ open: false })
    };
    columnView = () => {
        console.log("\n\n\tColumn view--->", this.state.toggle)
        this.setState({ toggle: true })
    }
    rowView = () => {
        console.log("\n\n\tRow view--->", this.state.toggle)
        this.setState({ toggle: false })
    }
    NoteDisplay = () => {
        this.CreatingNoteInstance.current.allNotesDisplaying()
    }
    displayLoader = (booleanValue) => {
        this.setState({ load: booleanValue })
    }
    displayNotes = (booleanValue) => {//whether to display notes or not
        console.log("\n\n\t dashboard--> notes --> boolean value-->", booleanValue)
        //this.displayLoader(true)
        this.setState({
            displayNotes: true,
            displayReminders: false,
            otherTitle: false,  // this will let the dom know that a title has to be only notes now
            displayArchives: false,
            displayTrash: false,
            enableSearching: false
        })
    }
    displayReminders = (booleanValue) => {//whether to display notes or not
        console.log("\n\n\t dashboard--> reminders --> boolean value-->", booleanValue)
        this.setState({
            displayNotes: false,
            displayReminders: true,
            titleArrayIndex: 0,
            otherTitle: true,  // this will let the dom know that a new title has to be added 
            displayArchives: false,
            displayTrash: false,
            enableSearching: false,
            search: "",
            displaySearch: []
        })
    }

    collectSearchQuery = (event) => {
        if (event.target.value.length >= 1) {
            this.setState({
                search: event.target.value,
                enableSearching: true
            })
            console.log("\n\n\tsearch value --->", this.state.search)
        }
        else {
            this.setState({ search: event.target.value, enableSearching: false ,displaySearch:[]})
        }
    }

    initiateSearching = (event) => {
        console.log("\n\n\tIn initiate search ", event.key)

        if (event.key === "Enter") {
            let searchObject = {}
            searchObject.search = this.state.search
            console.log("\n\n\t search object", searchObject)
            searchInNotes(searchObject).then((searchResponse) => {
                console.log("\n\n\tResponse received", searchResponse.data.data)
                 this.setState({displaySearch: searchResponse.data.data})
            })
        }

    }
    displayArchives = (booleanValue) => {//whether to display notes or not
        this.setState({
            displayNotes: false,
            displayReminders: false,
            titleArrayIndex: 1,
            otherTitle: true,  // this will let the dom know that a new title has to be added 
            displayArchives: true,
            displayTrash: false
        })
    }
    displayTrash = (booleanValue) => {//whether to display notes or not
        this.setState({
            displayNotes: false,
            displayReminders: false,
            titleArrayIndex: 2,
            otherTitle: true,  // this will let the dom know that a new title has to be added 
            displayArchives: false,
            displayTrash: booleanValue
        })
    }
    searchNotes = (event) => {
        //initiating searching notes process
        this.setState({ search: event.target.value, enableSearching: true })
        console.log("\n\n\tsearching ....")
    }
    render() {

        return (
            <div className="MainDiv">
                <MuiThemeProvider theme={theme}>
                    <Card className="CardL">
                        {this.state.toggle ?
                            <img className="View" src={require('../assets/grid.svg')} alt="grid" onClick={this.rowView} />
                            :
                            <img className="View" src={require('../assets/otherGrid.svg')} alt="grid" onClick={this.columnView} />
                        }
                        <div className="MenuI" onClick={this.handleDrawerOpen}><MenuIcon /></div>
                        <TextField className="SearchBar"
                            id="filled-hidden-label"
                            className={clsx(this.classes.textField, this.classes.dense)}
                            hiddenLabel
                            variant="filled"
                            placeholder="Search"
                            onChange={this.collectSearchQuery}
                            onKeyDown={this.initiateSearching}
                            value={this.state.search}
                            InputProps={{ "disable-underline": true }, {
                                endAdornment: (
                                    <InputAdornment position="10%">
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        {this.state.otherTitle ?
                            <div className="Keep">{TITLE_ARRAY[this.state.titleArrayIndex]}</div>
                            :
                            <div>  <img className="KeepIcon" src={KeepIcon} alt="keep pic"></img>
                                <div className="Keep">Fundoo Notes</div>
                            </div>
                        }
                        <div className="AlignMent">  <Grid container justify="flex-end" alignItems="flex-end">
                            <Avatar style={{ cursor: "pointer" }} className={this.classes.orangeAvatar} src="https://fundooimages.s3.us-east-2.amazonaws.com/2019-11-04.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZ57TOXDSXSS7TFVP%2F20191109%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20191109T123353Z&X-Amz-Expires=900&X-Amz-Signature=9e579a30838a6be0fe589f1bdbaff6b82ff72fef84c66269b1c8f5a14fd992dc&X-Amz-SignedHeaders=host"></Avatar>
                        </Grid></div>
                        {this.state.load ?
                            <CircularIndeterminate />
                            :
                            <div id="Correct" onClick={this.displayNotes}><DoneAll fontSize="25px" color=" rgb(60, 64, 67)" rotate={false} /></div>}
                    </Card>
                    <DrawerMade openingDrawer={this.state.open} notesArray={this.displayNotes}
                        remindersArray={this.displayReminders}
                        archivesArray={this.displayArchives}
                        trashArray={this.displayTrash} />

                    {this.state.enableSearching ?
                        <div id="holdingCards">
                            <Display
                                ref={this.CreatingNoteInstance}
                                loadingInitiated={this.displayLoader}
                                notesView={this.state.toggle}
                                searchNotes={this.state.displaySearch}
                            />
                        </div>
                        :
                        <div id="Two">
                            {/* Taking note component will render here   */}
                            <TakeNote refresh={this.NoteDisplay} />
                            {/* All note will be displayed here using the display component 3*/}
                            <Display
                                ref={this.CreatingNoteInstance}
                                fetchNotes={this.state.displayNotes}
                                fetchReminders={this.state.displayReminders}
                                fetchArchives={this.state.displayArchives}
                                fetchTrash={this.state.displayTrash}
                                loadingInitiated={this.displayLoader}
                                notesView={this.state.toggle} />
                        </div>}

                </MuiThemeProvider></div >
        )
    }
}
