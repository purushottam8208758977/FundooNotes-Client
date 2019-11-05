import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

export class OneArchiveNote extends Component {

    handleRefresh = () => {
        this.props.refreshDisplay()
    }
    render() {
        return (
            <div id="NotesReceived">
                <Card id="NoteDimensions">
                    {this.props.data.title}<br />
                    {this.props.data.description}
                    <div id="icons">
                        <Button><img src={require('../assets/reminder.svg')} alt="reminder pic"></img> </Button>
                        <Button> <img src={require('../assets/pallete.svg')} alt="pallete pic"></img>  </Button>
                    </div></Card>
            </div>


        )
    }
}