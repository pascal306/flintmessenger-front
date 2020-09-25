import React, { Fragment } from 'react';
import { Avatar, createStyles, ListItemAvatar, ListItemText, makeStyles, Theme } from '@material-ui/core';

interface ContactListItemProps {
  firstname: string;
  lastname: string;
}

class ContactListItem extends React.Component<ContactListItemProps>{
  render(){
    const {  firstname,lastname} = this.props;
    const initials = `${firstname[0]}${lastname[0]}`;
    return (
      <Fragment>
        
        <ListItemAvatar>
            <Avatar >{initials}</Avatar>
        </ListItemAvatar>
        <ListItemText>{firstname} {lastname}
        </ListItemText> 
       </Fragment>);
  }
}

export default ContactListItem;