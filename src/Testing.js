import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class Testing extends Component {
    render() {
      return (
            <Menu size='small'>
                
                <Menu.Menu position='right'>
                   
                    <Menu.Item>
                        <Button primary as={Link} name='Login' to='/login'>Testing</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}
