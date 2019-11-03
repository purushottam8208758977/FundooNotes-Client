import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import {allNotes} from '../services/services'

export class Display extends Component {
    constructor() {
        super()
        
    }
    loadNotes = () => {
       allNotes()
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
