import React, { Component } from 'react';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
}));




export class ColorPopover extends Component {
    constructor() {
        super()
        this.state = {
            anchorEl: false,
        }
        this.classes = useStyles.bind(this);
    }

    handlePopoverOpen = (event) => {
        this.setState({ anchorEl: event.currentTarget })
    };

    handlePopoverClose =(event)=> {
       // console.log("\n\n\tIn color popover to close ")
        this.setState({ anchorEl: !event.currentTarget })
    };
    render() {
        const {anchorEl} = this.state
        const open = Boolean(anchorEl)

        return (
            <Popover
                id="mouse-over-popover"
                className={this.classes.popover}
                classes={{
                    paper: this.classes.paper,
                }}
                anchorEl={anchorEl}
                open={open}
                
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                //onClose={this.handlePopoverClose}
                disableRestoreFocus
            >
               Color popover
        </Popover>
        )
    }
}