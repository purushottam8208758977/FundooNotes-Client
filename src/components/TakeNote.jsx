//take note component
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import '../Dashboard.css'
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme =>({
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
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
}));

export class TakeNote extends Component {
    constructor() {
        super()
        this.classes = useStyles.bind(this);
    }
    render() {
        return (
            <Card id="TakeN" className={this.classes.card}>
               <TextField
          id="standard-basic"
          placeholder="Take a note ..."
          className={this.classes.textField}
          underline="none"
          margin="normal"
          InputProps={{
            disableUnderline: true,
           }}
        />
            </Card>
        )
    }
}