//take note component
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import '../Dashboard.css'
import TextField from '@material-ui/core/TextField';
import { IconsList } from './iconsList'
import Button from '@material-ui/core/Button';

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
            title: "",
            description: ""
        }
        this.classes = useStyles.bind(this);
    }

    handleTakeNote = () => { // this will toggle the both cards
        this.setState({ toggle: true })
    }

    fetchingTitle = (event) => {
        let fetchedTitle = event.target.value
        this.setState({
            title: fetchedTitle
        })
        console.log("\n\nTitle-->", title);

    }

    fetchingDescription=()=>{
        let fetchedDescription = event.target.value
        this.setState({
            description: fetchedDescription
        })
        console.log("\n\nDescription-->", description);
    }
    
    creatingNote = () => {
        console.log("\n\nCreating a note ... data to be sent -->")
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
                            value={this.state.title}  //binding title ...entry point into front end
                            onChange={this.fetchingTitle}  //invoking respective method to initiate reponse process to backend
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
                            value={this.state.description}  //binding description ...entry point into front end
                            onChange={this.fetchingDescription}  //invoking respective method to initiate reponse process to backend
                            margin="normal"
                            InputProps={{
                                disableUnderline: true,
                            }}
                        />
                        <div id="IconsList"> <IconsList />
                            <Button >close</Button></div>
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