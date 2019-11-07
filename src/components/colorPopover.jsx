import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core' // overiding default css properties
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';

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
            }
        },
        'MuiPopover':{
        'paper':{
            minWidth:"0px",
            maxWidth:"1000px",
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            width:"75%"
        }
    }
    }
})
const useStyles = makeStyles(theme => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
    
}));


const colorsPallete = ["#ffffff", "#fdcfe8", "#f0deca", "#e8eaed","#aecbfa", "#cbf0f8", "#a7ffeb", "#ccff90","#fff475", "#fbbc04", "#f28b82", "#d7adfb"]

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
    changingColorOfNote = (event,index) => {
        console.log("\n\n\tInitiating color change -->");
        
    }
    render() {
        const { anchorEl } = this.state
        const open = Boolean(anchorEl)

        return (

            <div >
                 <MuiThemeProvider theme={theme}>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handlePopoverClose}
                    id="HandleMenu"
                >
                   
                    {colorsPallete.map((choice, index) => (
                        <IconButton style={{margin:"2px",borderRadius:"40px", backgroundColor:choice}}onClick={(event) => this.changingColorOfNote(event, index)} key={index}
                            id="dropMenu">
                           {/* <IconButton style={{backgroundColor:choice}} />  */}
                        </IconButton>
                    ))}
                </Menu>
                </MuiThemeProvider>
            </div>
        )
    }
}