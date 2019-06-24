import React from 'react';
import { Card, Image, List } from 'semantic-ui-react';

const CardExampleCard = () => (
    <Card>
        <Image src='/img/logo.jpg' />
        <Card.Content>
            <Card.Header>Vault</Card.Header>
            <Card.Meta>
                <span className='date'>v0.11</span>
            </Card.Meta>
            <Card.Description>
                <b>A shared distributed and redundant storage solution</b>
                <br></br>
                <List>
                    <List.Item >
                        <List.Content>Niran  Peiris</List.Content>
                        <List.Content>Amod Sachintha</List.Content>
                        <List.Content>Binura Ganegoda</List.Content>
                        <List.Content>Udesh Kumara</List.Content>
                    </List.Item>
                </List>
            </Card.Description>
        </Card.Content>
    </Card>
);

export default CardExampleCard;
