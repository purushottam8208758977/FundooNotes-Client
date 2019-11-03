// icons list

import React, { Component } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';


export class IconsList extends Component {
    constructor() {
        super()
        
    }
    render() {
        return (
            <div id="Icons">
             <Button><img src={require('../assets/reminder.svg') }></img> </Button>
             <Button> <img src={require('../assets/pallete.svg') }></img>  </Button>
             <Button> <img src={require('../assets/archive.svg') }></img> </Button>
             <Button><MoreVertIcon></MoreVertIcon></Button>
            </div>
        )
}
}