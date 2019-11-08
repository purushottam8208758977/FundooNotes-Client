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
        labelName: null
    };

    componentDidMount() {
        if (this.props.data.label.length > 0) {
            this.setState({ checkLabel: true, labelName: this.props.data.label[0].labelName })
        }
    }

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
    render() {
        return (
            <div id="NotesReceived">
                <Card id="NoteDimensions" style={{ backgroundColor: this.props.data.color }}>
                    <div onClick={this.handleClickOpen} id="SingleNote">
                        {this.props.data.title}<br />
                        {this.props.data.description}</div>
                    {this.state.checkLabel ?
                        <div id="LabelOnNote" style={{marginRight:"165px"}}>{this.state.labelName}</div>
                        :
                        <div></div>
                    }
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