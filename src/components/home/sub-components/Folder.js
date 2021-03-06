import React, {Component} from 'react';
import {List} from "semantic-ui-react";

class Folder extends Component{


    render(){
        const {data} = this.props;

        return(
            <List.Item>
                <List.Icon name='folder outline' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header as='a'>{data.folder_name}</List.Header>
                    <List.Description as='small'>{data.created_at.toDateString()}</List.Description>
                </List.Content>
            </List.Item>
        );
    }
}


export default Folder;