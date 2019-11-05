import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
export class OneTrashNote extends Component {

    handleRefresh=()=>{
        this.props.refreshDisplay()
    }
    render() {
        return (
                <div id="NotesReceived">
                <Card id="NoteDimensions">
                   {this.props.data.title }<br/>
                   {this.props.data.description}
                   <div><DeleteForeverIcon /></div>
                </Card>
                </div>
            

        )
    }
}