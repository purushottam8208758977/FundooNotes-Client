import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import MoreVertIcon from '@material-ui/icons/MoreVert';


export class DialogNote extends Component {


    render() {
        return (
            <div>
                <Card onClick={this.handleClickOpen}>
                    <div id="dialog">{this.props.dialogData.title}<br />
                        {this.props.dialogData.description}</div>
                    <div id="Icons">
                        <Button><img src={require('../assets/reminder.svg')} alt="reminder pic"></img> </Button>
                        <Button> <img src={require('../assets/pallete.svg')} alt="pallete pic"></img>  </Button>
                        <Button> <img src={require('../assets/archive.svg')} alt="archive pic "></img> </Button>
                        <Button onClick={(event) => this.handleMenu(event)}><MoreVertIcon></MoreVertIcon></Button>
                    
                    <Button onClick={this.props.closeDialog} ><b>close</b></Button></div>
                </Card >
            </div >
        );
    }
}
