import React, { Component } from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';


class ProfilePicture extends Component {
    
    render() {
        return (
        <div>
            <Grid>
                <Row>
                    <Col xs={4} md={4}>
                        <Image src="../public/mario.png" rounded />
                    </Col>
                </Row>
            </Grid>
            
        </div>
        );
    }
}

export default ProfilePicture;
