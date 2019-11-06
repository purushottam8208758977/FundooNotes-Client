import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

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
                   <Button id="deleteButton"><img id="deleteForever" src={require('../assets/deleteforever.png')} alt="delete pic"></img> </Button>
                </Card>
                </div>
            

        )
    }
}