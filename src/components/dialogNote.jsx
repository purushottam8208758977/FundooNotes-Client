import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { IconsList } from './iconsList';


export class DialogNote extends Component {


    render() {
        return (
            <div>
                <Card  onClick={this.handleClickOpen}>
                    <div id="dialog">{this.props.dialogData.title}<br />
                    {this.props.dialogData.description}</div>
                    <IconsList individualNoteData={this.props.data} refreshingAfterTrashing={this.handleRefresh} />
                    <Button onClick={this.props.closeDialog} >
                        Close
                    </Button>
                </Card>
            </div>
        );
    }
}
