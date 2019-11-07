import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';


const useStyles = makeStyles(theme => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
}));

const colorsPallete = [#d7adfb, '#fdcfe8',#f0deca,#e8eaed,#aecbfa,#cbf0f8,#a7ffeb,#ccff90,#fff475,#fbbc04,#f28b82]


export class ColorPopover extends Component {
    constructor() {
        super()
        this.state = {
            anchorEl: null,
            show: false
        }
        this.classes = useStyles.bind(this);
    }
 
    handlePopoverOpen = (event) => {
        this.setState({ anchorEl: event.currentTarget })
    }
   

    handlePopoverClose = () => {
       
        this.setState({ anchorEl: null })
    }
    render() {
        const { anchorEl } = this.state
        const open = Boolean(anchorEl)

        return (

            <div>
               <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handlePopoverClose}
                >
                    try
                </Menu>
            </div>
        )
    }
}