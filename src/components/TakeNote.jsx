//take note component
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import '../Dashboard.css'


const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export class TakeNote extends Component {
    constructor() {
        super()
        this.classes = useStyles.bind(this);
    }
    render() {
        return (
            <Card id="TakeN" className={this.classes.card}>
                <input>
                    label="Read Only"
              defaultValue="Hello World"
                </input>
            </Card>
        )
    }
}