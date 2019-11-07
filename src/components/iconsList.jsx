// icons list used by every note ONLY

import React, { Component } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { updateNote } from '../services/services'

//child components
import { ColorPopover } from './colorPopover'

const noteMenuItems = ['Delete Note', 'Add Label']

export class IconsList extends Component {
    constructor() {
        super()
        this.state = {
            anchorEl: null,
            colorPallete: false
        }

        this.ColorPopover = React.createRef()
    }
    handleMenu = (event) => {
        this.setState({ anchorEl: event.currentTarget })
    }

    closeMenu = () => {
        this.setState({ anchorEl: null })
    }

    refreshBoth=()=>{
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
        else {//clicked on idex ===1 a-->Add label
            this.setState({ anchorEl: null }) // for closing the pop up
        }
    }

    openColorPallete = (event) => {
        console.log("\n\n\tOn color icon")
        this.ColorPopover.current.handlePopoverOpen(event)
    }

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl)
        return (
            <div id="Icons">
                <Button><img src={require('../assets/reminder.svg')} alt="reminder pic"></img> </Button>
                <Button onClick={(event) => this.openColorPallete(event)}><img src={require('../assets/pallete.svg')} alt="pallete pic"></img></Button>
                <Button onClick={this.archiveTheNote}> <img src={require('../assets/archive.svg')} alt="archive pic "></img> </Button>
                <Button onClick={(event) => this.handleMenu(event)}><MoreVertIcon></MoreVertIcon></Button>

                <Menu
                    anchorEl={anchorEl}
                    open={open}
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

            </div>
        )
    }
}