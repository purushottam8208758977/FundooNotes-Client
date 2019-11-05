// icons list used by every note ONLY

import React, { Component } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import {updateNote} from '../services/services'

const noteMenuItems = ['Delete Note', 'Add Label']

export class IconsList extends Component {
    constructor() {
        super()
        this.state = {
            anchorEl: null,
        }
    }
    handleMenu = (event) => {
        this.setState({ anchorEl: event.currentTarget })
    }

    closeMenu = () => {
        this.setState({ anchorEl: null })
    }

    handleNoteEvents = (event, index) => {
        if(index===0){
            //initiating trashing process
            this.setState({ anchorEl: null }) // for closing the pop up
            let deletionObject={}
            deletionObject.noteId=this.props.individualNoteData._id
            deletionObject.updating={trash:true}

            this.props.refreshingAfterTrashing()
            updateNote(deletionObject).then((responseReceived)=>{
                console.log("\n\n\tIcons list --> trash response--->",responseReceived)
            })
        }
        else{
            this.setState({ anchorEl: null }) // for closing the pop up
        }
    }
    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl)
        return (
            <div id="Icons">
                <Button><img src={require('../assets/reminder.svg')} alt="reminder pic"></img> </Button>
                <Button> <img src={require('../assets/pallete.svg')} alt="pallete pic"></img>  </Button>
                <Button> <img src={require('../assets/archive.svg')} alt="archive pic "></img> </Button>
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
            </div>
        )
    }
}