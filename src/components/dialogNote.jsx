import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


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

export class DialogNote extends Component {
    constructor(){
        super()
        this.classes = useStyles.bind(this);
    }
    
    render() {
        return (
            <Card onClick={this.handleClickOpen}>


                <div id="dialog">
                <TextField
                            id="standard-basic"
                            defaultValue={this.props.dialogData.title}
                            readOnly="true"
                            className={this.classes.textField}
                            // value={this.state.title}  //binding title ...entry point into front end
                            // onChange={this.fetchingTitle}  //invoking respective method to initiate reponse process to backend
                            margin="normal"
                            InputProps={{
                                disableUnderline: true,
                            }}
                        />
                        <TextField
                            id="standard-basic"
                            defaultValue={this.props.dialogData.description}
                            readOnly="true"
                            className={this.classes.textField}
                            // value={this.state.description}  //binding description ...entry point into front end
                            // onChange={this.fetchingDescription}  //invoking respective method to initiate reponse process to backend
                            margin="normal"
                            InputProps={{
                                disableUnderline: true,
                            }}
                        />
                {/* {this.props.dialogData.title}<br /> */}
                {/* {this.props.dialogData.description} */}
                </div>


                <div id="dialogIcons">
                    <Button><img src={require('../assets/reminder.svg')} alt="reminder pic"></img> </Button>
                    <Button> <img src={require('../assets/pallete.svg')} alt="pallete pic"></img>  </Button>
                    <Button> <img src={require('../assets/archive.svg')} alt="archive pic "></img> </Button>
                    <Button onClick={(event) => this.handleMenu(event)}><MoreVertIcon></MoreVertIcon></Button>
                    <Button onClick={this.props.closeDialog} ><b>close</b></Button></div>
            </Card >
        );
    }
}
