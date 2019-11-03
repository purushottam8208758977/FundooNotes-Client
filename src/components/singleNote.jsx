import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


export class SingleNote extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Card>
                   {this.props.data.title }
                </Card>
            </div>

        )
    }
}