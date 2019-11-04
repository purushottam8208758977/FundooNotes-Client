//take note component
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import '../Dashboard.css'
import TextField from '@material-ui/core/TextField';
import {IconsList} from './iconsList'

const useStyles = makeStyles(theme => ({
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
        this.state = {
            toggle: false,
        }
        this.classes = useStyles.bind(this);
    }

    handleTakeNote = () => {
        this.setState({ toggle: true })
    }
    render() {
        return (
            <div id="NoteDiv">
                {this.state.toggle ?
                    <Card id="TakeN" className={this.classes.card}>
                        <TextField
                            id="standard-basic"
                            placeholder="Title"
                            readOnly="true"
                            className={this.classes.textField}
                            margin="normal"
                            InputProps={{
                                disableUnderline: true,
                            }}
                        />
                        <TextField
                            id="standard-basic"
                            placeholder="Description"
                            readOnly="true"
                            className={this.classes.textField}
                            margin="normal"
                            InputProps={{
                                disableUnderline: true,
                            }}
                        />
                        <IconsList />
                        {/* <Button /> */}
                    </Card>
                    
                    :
                    <Card id="TakeN" onClick={this.handleTakeNote} className={this.classes.card}>
                        <TextField
                            id="standard-basic"
                            placeholder="Take a note ..."
                            readOnly="true"
                            className={this.classes.textField}
                            underline="none"
                            margin="normal"
                            InputProps={{
                                disableUnderline: true,
                            }}
                        />
                    </Card>
                }

            </div>
        )

    }
}