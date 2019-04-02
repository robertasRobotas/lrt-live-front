import React, { Component } from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import styles from './TvShow.module.css';

class TvShow extends Component {


  render() {
    return (

<div className={styles.Show}>
<Card bg="primary" text="white" style={{ width: '18rem' }}>
    <Card.Header>{this.props.channel}</Card.Header>
    <Card.Body>
      <Card.Title>{this.props.show}</Card.Title>
    </Card.Body>
  </Card>


</div>
    );
  }
}

export default TvShow;
