import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core' // overiding default css properties
import Card from '@material-ui/core/Card';
import { IconsList } from './iconsList';
import Dialog from '@material-ui/core/Dialog';
import Chip from '@material-ui/core/Chip';
import CloseIcon from '@material-ui/icons/Close'
//child components
import { DialogNote } from './dialogNote'

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

const theme = createMuiTheme({
    overrides: {
        "MuiChip": {
            "deleteIcon": {
                "height": "15px"
            }
        }
    }
})


export class SingleNote extends Component {

    constructor() {
        super()
        this.classes = useStyles.bind(this);
    }
    state = {
        open: false,
        labelName: null,
        checkLabel: false
    };

    // componentDidMount() {
    //     if (this.props.data.label.length > 0) {
    //         console.log(`\n\n\tNote ${this.props.data.title} has '${this.props.data.label[0].labelName}' label`)
    //         this.setState({ checkLabel: true, labelName: this.props.data.label[0].labelName })
    //     }
    // }

    handleRefresh = () => {
        this.props.refreshDisplay()
    }

    handleClickOpen = () => {
        //console.log("label name--->",this.props.data.label[0].labelName)
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    removingLabelOnNote = () => {
        //initiating removing label process on note 

    }

    render() {
        return (

            <div id="NotesReceived">
                <MuiThemeProvider theme={theme}>
                    <Card id="NoteDimensions" style={{ backgroundColor: this.props.data.color }}>
                        <div onClick={this.handleClickOpen} id="SingleNote">
                            {this.props.data.title}<br />
                            {this.props.data.description}</div>
                        {this.props.data.label.map((label, index) => (
                            <div id="LabelOnNote" style={{ marginRight: "165px" }}>
                                <Chip
                                    className={this.classes.root}
                                    label={label.labelName}
                                    variant="outlined"
                                    onClick={this.clickedLabel}
                                    onDelete={this.removingLabelOnNote}
                                    deleteIcon={<CloseIcon />}
                                />
                            </div>
                            ))}
                            <IconsList individualNoteData={this.props.data} refreshing={this.handleRefresh} />
                    </Card>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <DialogNote dialogData={this.props.data} closeDialog={this.handleClose} refreshAfterEditing={this.handleRefresh} />
                    </Dialog>

                </MuiThemeProvider>
            </div >
        )
    }
}