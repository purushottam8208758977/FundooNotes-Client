import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { allNotes } from '../services/services'

export class Display extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        allNotes().then((responseReceived) => {
            console.log("\n\n\tResponse received ---->", responseReceived)
        })
    }
    render() {
        return (
            <div>
                <Card>

                </Card>
            </div>
        )
    }
}
