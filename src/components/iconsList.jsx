// icons list

import React, { Component } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';


export class IconsList extends Component {
    render() {
        return (
            <div id="Icons">
             <Button><img src={require('../assets/reminder.svg' ) }alt="reminder pic"></img> </Button>
             <Button> <img src={require('../assets/pallete.svg') }alt="pallete pic"></img>  </Button>
             <Button> <img src={require('../assets/archive.svg') }alt="archive pic "></img> </Button>
             <Button><MoreVertIcon></MoreVertIcon></Button>
            </div>
        )
}
}