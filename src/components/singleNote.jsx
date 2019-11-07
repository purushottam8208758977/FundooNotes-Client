import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { IconsList } from './iconsList';
import Dialog from '@material-ui/core/Dialog';

//child components
import { DialogNote } from './dialogNote'


export class SingleNote extends Component {

    constructor() {
        super()


    }
    state = {
        open: false,
    };

    handleRefresh = () => {
        this.props.refreshDisplay()
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        return (
            <div id="NotesReceived">
                <Card id="NoteDimensions" style={{backgroundColor:this.props.data.color}}>
                    <div onClick={this.handleClickOpen} id="SingleNote">
                        {this.props.data.title}<br />
                        {this.props.data.description}</div>
                    <IconsList individualNoteData={this.props.data} refreshing={this.handleRefresh} />
                </Card>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <DialogNote dialogData={this.props.data} closeDialog={this.handleClose} refreshAfterEditing={this.handleRefresh} />
                </Dialog>
            </div>
        )
    }
}