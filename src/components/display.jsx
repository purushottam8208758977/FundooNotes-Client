import React, { Component } from 'react';
import { allNotes } from '../services/services'

//child component
import { SingleNote } from './singleNote'

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
    }

    allNotesDisplaying = () => {
        //4
        allNotes().then((responseReceived) => {
            //console.log("\n\n\tResponse received ---->", responseReceived.data.data)
            this.setState({ notes: responseReceived.data.data })
            //console.log("-->",this.notes)
        })
    }
    render() {
        if (this.state.notes) {
            this.displayContent = this.state.notes.map((data, index) => {
                //console.log("\n\n\tdata of note -->",data)
                return (
                    <SingleNote key={index}
                        data={data}
                    />
                )
            })
        }
        else if (this.state.archives) {

        }
        else if (this.state.reminders) {

        }
        else {//trash

        }

        return (
            <div id="Content">
                {this.displayContent}
            </div>
        )
    }
}
