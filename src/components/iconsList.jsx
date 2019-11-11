// icons list used by every note ONLY

import React, { Component } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { updateNote, allLabels, addLabelOnNote } from '../services/services'
import Tooltip from '@material-ui/core/Tooltip';

import { makeStyles } from '@material-ui/core/styles';

//child components
import { ColorPopover } from './colorPopover'
import { LabelOnNote } from './labelOnNote'
import List from '@material-ui/core/List';

const noteMenuItems = ['Delete Note', 'Add Label']

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));
export class IconsList extends Component {
    mappinglabels;
    constructor() {
        super()
        this.state = {
            anchorEl: null, // determines the position menu bar ...where to open
            parentMenu: false,// parent menu's key ---> opens delete note and add label menu
            colorPallete: false,// key to open color pallete
            childMenu: false, // childe menu which opens after parent menu closed 
            reminderMenu=false,
            labels: []
        }
        this.ColorPopover = React.createRef()
        this.classes = useStyles.bind(this);

    }
    /**
     * @description - This method is invoked after clicking to more vert icon ...it opens a menu
     */
    handleMenu = (event) => {
        this.setState({ anchorEl: event.currentTarget, parentMenu: true })
    }

    closeMenu = () => {
        this.setState({ parentMenu: false, anchorEl: null, childMenu: false })
    }

    refreshBoth = () => {
        this.props.refreshing()
    }
    archiveTheNote = () => {
        //initiating archiving process
        let archiveObject = {}
        archiveObject.noteId = this.props.individualNoteData._id
        archiveObject.updating = { archive: true }

        updateNote(archiveObject).then((responseReceived) => {
            console.log("\n\n\tIcons list --> archive response--->", responseReceived)
            this.refreshBoth()
        })
    }

    handleNoteEvents = (event, index) => {
        if (index === 0) {
            //initiating trashing process
            this.setState({ anchorEl: null }) // for closing the pop up of menu
            let deletionObject = {}
            deletionObject.noteId = this.props.individualNoteData._id
            deletionObject.updating = { trash: true }
            updateNote(deletionObject).then((responseReceived) => {
                console.log("\n\n\tIcons list --> trash response--->", responseReceived)
                this.props.refreshing()
            })
        }
        else {//clicked on index ===1 a-->Add label
            //close the parent menu first and open the child menu
            this.setState({ childMenu: true, parentMenu: false })
            //adding a label (displaying labels list)
            allLabels().then((responseReceived) => {
                console.log("\n\n\tIcons list --> Labels --->", responseReceived.data.data)
                this.setState({ labels: responseReceived.data.data })

            })

        }
    }
    openColorPallete = (event) => {
        console.log("\n\n\tOn color icon")
        this.ColorPopover.current.handlePopoverOpen(event)
    }

    openReminderMenu = () => {

    }

    addingLabelOnNote = (event, index) => {
        this.closeMenu()
        let labelObject = {}
        console.log("\n\n\tIndex received  labels ->", this.state.labels[index]._id)
        labelObject.noteId = this.props.individualNoteData._id
        labelObject.labelId = this.state.labels[index]._id
        addLabelOnNote(labelObject).then((reponseOfAddingLabel) => {
            console.log("\n\n\tResponse of adding label on note", reponseOfAddingLabel)
            this.refreshBoth()
        })

    }
    render() {
        const { anchorEl } = this.state;

        this.mappingLabels = this.state.labels.map((data, index) => {
            console.log("\n\n\tData to be sent to individual label", data)
            return (
                <LabelOnNote key={index}
                    data={data}
                />
            )
        })
        return (
            <div id="Icons">
                <Tooltip title="Reminder"><Button onClick={this.openReminderMenu}><img src={require('../assets/reminder.svg')} alt="reminder pic"></img> </Button></Tooltip>
                <Tooltip title="Change color"><Button onClick={(event) => this.openColorPallete(event)}><img src={require('../assets/pallete.svg')} alt="pallete pic"></img></Button></Tooltip>
                <Tooltip title="Archive"><Button onClick={this.archiveTheNote}> <img src={require('../assets/archive.svg')} alt="archive pic "></img> </Button></Tooltip>
                <Tooltip title="More"><Button onClick={(event) => this.handleMenu(event)}><MoreVertIcon></MoreVertIcon></Button></Tooltip>
                {/* PARENT MENU */}
                <Menu
                    anchorEl={anchorEl}
                    open={this.state.parentMenu}
                    onClose={this.closeMenu}
                >
                    {noteMenuItems.map((choice, index) => (
                        <MenuItem onClick={(event) => this.handleNoteEvents(event, index)} key={index}
                            id="dropMenu">
                            {choice}
                        </MenuItem>
                    ))}
                </Menu>
                <ColorPopover refreshPostColorChange={this.refreshBoth} settingColor={this.props.individualNoteData} ref={this.ColorPopover} openPallete={this.state.colorPallete} />
                {/* CHILD MENU */}
                <Menu
                    anchorEl={anchorEl}
                    open={this.state.childMenu}
                    onClose={this.closeMenu}
                >
                    {this.state.labels.map((currentLabel, index) => (
                        <List onClick={(event) => this.addingLabelOnNote(event, index)} key={index}>
                            {currentLabel.labelName}
                        </List>
                    ))}
                </Menu>
                {/* REMINDER MENU */}
                <Menu
                    anchorEl={anchorEl}
                    open={this.state.reminderMenu}
                    onClose={this.closeMenu}
                >
                    <MenuItem>
                    </MenuItem>
                    ))}
                </Menu>
            </div>
        )
    }
}