// icons list used by every note ONLY

import React, { Component } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


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
                    {noteMenuItems.map((option, index) => (
                        <MenuItem key={index}
                            id="dropMenu">
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        )
    }
}