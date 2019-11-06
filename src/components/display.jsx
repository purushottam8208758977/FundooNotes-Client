import React, { Component } from 'react';
import { allNotes,allReminders,allArchives,allTrash } from '../services/services'

//child component
import { SingleNote } from './singleNote'
import {OneTrashNote} from './oneTrashNote'
import {OneArchiveNote} from './oneArchiveNote'
import {OneReminderNote} from './oneReminderNote'
export class Display extends Component {
    displayContent;
    constructor() {
        super()
        this.state = {
            notes: [],
            archives: [],
            reminders: [],
            trash: []
        }
    }

    /**
     * @description- This method is invoked just after the component is invoked
     */
    componentDidMount() {
        this.allNotesDisplaying()
        this.allRemindersDisplaying()
        this.allArchivesDisplaying()
        this.allTrashDisplaying()
    }

    allNotesDisplaying = () => {
        //4
        allNotes().then((responseReceived) => {
            console.log("\n\n\tAll notes received ---->", responseReceived.data.data)
            this.setState({ notes: responseReceived.data.data })
            //console.log("-->",this.notes)
        })
    }
    allRemindersDisplaying = () => {
        //4
        allReminders().then((responseReceived) => {
            console.log("\n\n\tAll Reminders received ---->", responseReceived.data.data)
            this.setState({ reminders: responseReceived.data.data })
            //console.log("-->",this.reminders)
        })
    }
    allArchivesDisplaying = () => {
        //4
        allArchives().then((responseReceived) => {
            console.log("\n\n\tAll archives received ---->", responseReceived.data.data)
            this.setState({ archives: responseReceived.data.data })
            //console.log("-->",this.archives)
        })
    }
    allTrashDisplaying = () => {
        //4
        allTrash().then((responseReceived) => {
            console.log("\n\n\t All Trash received ---->", responseReceived.data.data)
            this.setState({ trash: responseReceived.data.data })
            //console.log("-->",this.trash)
        })
    }
    render() {
        if (this.props.fetchNotes) {
            this.displayContent = this.state.notes.map((data, index) => {
                //console.log("\n\n\tdata of notes -->",data)
                return (
                    <SingleNote key={index}
                        data={data}//props data sent to Single note component to access further 
                        refreshDisplay={this.allNotesDisplaying}
                    />
                )
            })
        }
        else if (this.props.fetchReminders) {
            this.displayContent = this.state.reminders.map((data, index) => {
                //console.log("\n\n\tdata of reminders -->",data)
                return (
                    <OneReminderNote key={index}
                        data={data}
                        refreshDisplay={this.allRemindersDisplaying}
                    />
                )
            })
        }
        else if (this.props.fetchArchives) {
            this.displayContent = this.state.archives.map((data, index) => {
                //console.log("\n\n\tdata of archives -->",data)
                return (
                    <OneArchiveNote key={index}
                        data={data}
                        refreshDisplay={this.allArchivesDisplaying}
                    />
                )
            })
        }
        else {//trash fetchtrash : true
            this.displayContent = this.state.trash.map((data, index) => {
                //console.log("\n\n\tdata of trash -->",data)
                return (
                    <OneTrashNote key={index}
                        data={data}
                        refreshDisplay={this.allTrashDisplaying}
                    />
                )
            })
        }
        return (
            <div id="Content">
                {this.displayContent}
            </div>
        )
    }
}
