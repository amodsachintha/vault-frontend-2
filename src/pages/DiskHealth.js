import React from 'react';
import {Grid,Segment} from 'semantic-ui-react';
import OverallStatus from '../components/diskhealth/OverallStatus';
import DiskBrowser from '../components/diskhealth/DiskBrowser';
import DiskDetails from '../components/diskhealth/DiskDetails';

class DiskHealth extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            diskIsSelected: false,
            health : null
        };
        this.handleDiskClick = this.handleDiskClick.bind(this);
    }

    handleDiskClick(data){
        this.setState({
            diskIsSelected:true,
            health : data,
        })
    }

    render() {

        return (
            <Grid>
                <Grid.Row columns='equal'>
                    <Grid.Column width={10}>
                        <Grid.Column><DiskBrowser diskClickHandler={this.handleDiskClick}/></Grid.Column>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Grid.Row >
                            <Grid.Column>
                                <OverallStatus></OverallStatus>
                            </Grid.Column>
                        </Grid.Row>
                        <br></br>

                        <Grid.Row >
                            <Grid.Column>
                                {this.state.diskIsSelected ? <DiskDetails data={this.state.health}/> :
                                <Segment raised color='red'>No disk selected!</Segment>}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={16} align='center'>
                        <small>copyright Vault 2019</small>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        );
    }
}

export default DiskHealth;
