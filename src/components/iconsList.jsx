// icons list used by every note ONLY

import React, { Component } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { updateNote, allLabels } from '../services/services'

//child components
import { ColorPopover } from './colorPopover'
import { IndividualLabel } from './individualLabel'
import { LabelOnNote } from './labelOnNote'
import List from '@material-ui/core/List';

const noteMenuItems = ['Delete Note', 'Add Label']

export class IconsList extends Component {
    mappinglabels;
    constructor() {
        super()
        this.state = {
            anchorEl: null,
            openMenu:false,
            colorPallete: false,
            openLabelMenu: false,
            labels: []
        }

        this.ColorPopover = React.createRef()
    }
    handleMenu = (event) => {
        this.setState({ anchorEl: event.currentTarget ,openMenu:true})
    }

    closeMenu = () => {
        this.setState({ openMenu:false ,anchorEl:null,openLabelMenu:false})
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
            this.setState({ openLabelMenu: true ,openMenu:false})
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
                    open={this.state.openMenu}
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
                        open={this.state.openLabelMenu}
                        onClose={this.closeMenu}
                    ><List>{this.mappingLabels}</List></Menu>

            </div>
        )
    }
}