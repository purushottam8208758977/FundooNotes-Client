import React, { Component } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


export class DialogNote extends Component {
    state = {
        open: false,
    };

    render() {
        return (
            <div>
               
                    <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {this.props.dialogData.description}
                        </DialogContentText>
                        <Button onClick={this.handleClose} color="primary">
                            Close
                    </Button>
                    </DialogContent>
               
            </div>
        );
    }
}
