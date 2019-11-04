import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import {IconsList} from './iconsList';

export class SingleNote extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            
                <div id="NotesReceived">
                <Card id="NoteDimensions">
                   {this.props.data.title }<br/>
                   {this.props.data.description}
                   <IconsList/>
                </Card>
                </div>
            

        )
    }
}