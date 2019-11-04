import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

export class IndividualLabel extends Component {
    constructor() {
        super()

    }
    render() {
        return (
            <ListItem button key="Labels">
                <ListItemIcon>
                </ListItemIcon>
            </ListItem>
        )
    }
}