import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import {deleteNote} from '../services/services'

export class OneTrashNote extends Component {

    componentDidMount(){
        this.handleRefresh()
    }
    handleRefresh=()=>{
        this.props.refreshDisplay()
    }

    deleteNoteForever=()=>{
        //initiating deleting process
        let deleteObject = {}
        deleteObject.noteId = this.props.data._id
        deleteNote(deleteObject).then((responseReceived) => {
            console.log("\n\n\t one Trash note --> deleting note response--->", responseReceived)
            this.props.refreshDisplay()
        })
    }

    render() {
        return (
                <div id="NotesReceived">
                <Card id="NoteDimensions">
                   {this.props.data.title }<br/>
                   {this.props.data.description}
                   <Button onClick={this.deleteNoteForever} id="deleteButton"><img id="deleteForever" src={require('../assets/deleteforever.png')} alt="delete pic"></img> </Button>
                </Card>
                </div>
            

        )
    }
}