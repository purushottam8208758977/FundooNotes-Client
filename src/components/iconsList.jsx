// icons list used by every note ONLY

import React, { Component } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { updateNote, allLabels } from '../services/services'

//child components
import { ColorPopover } from './colorPopover'
import { LabelOnNote } from './labelOnNote'
import List from '@material-ui/core/List';

const noteMenuItems = ['Delete Note', 'Add Label']

export class IconsList extends Component {
    mappinglabels;
    constructor() {
        super()
        this.state = {
            anchorEl: null, // determines the position menu bar ...where to open
            parentMenu:false,// first menu's key ---> opens delete note and add label menu
            colorPallete: false,
            childMenu: false,
            labels: []
        }

        this.ColorPopover = React.createRef()
    }
    /**
     * @description - This method is invoked after clicking to more vert icon ...it opens a menu
     */
    handleMenu = (event) => {
        this.setState({ anchorEl: event.currentTarget ,parentMenu:true})
    }

    closeMenu = () => {
        this.setState({ parentMenu:false ,anchorEl:null,childMenu:false})
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
            //this.setState({ anchorEl: null }) // for closing the pop up
            this.setState({ childMenu: true ,parentMenu:false})
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
    render() {
        const { anchorEl } = this.state;

        this.mappingLabels = this.state.labels.map((data, index) => {
            console.log("\n\n\tData to be sent ot individual label", data)
            return (
                <LabelOnNote key={index}
                    data={data}
                />
            )
        })
        return (
            <div id="Icons">
                <Button><img src={require('../assets/reminder.svg')} alt="reminder pic"></img> </Button>
                <Button onClick={(event) => this.openColorPallete(event)}><img src={require('../assets/pallete.svg')} alt="pallete pic"></img></Button>
                <Button onClick={this.archiveTheNote}> <img src={require('../assets/archive.svg')} alt="archive pic "></img> </Button>
                <Button onClick={(event) => this.handleMenu(event)}><MoreVertIcon></MoreVertIcon></Button>

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
                    <Menu
                        anchorEl={anchorEl}
                        open={this.state.childMenu}
                        onClose={this.closeMenu}
                    ><List>{this.mappingLabels}</List></Menu>
            </div>
        )
    }
}