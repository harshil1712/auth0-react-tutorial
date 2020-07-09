import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Card, Col, Row } from 'react-bootstrap';

export default () => {
  const { user } = useAuth0();
  const [userInfo, setUserInfo] = useState({
    nickname: 'Not Logged In',
    picutre: 'https://bulma.io/images/placeholders/1280x960.png',
    email: 'dummy@dummy.com',
  });

  useEffect(() => {
    if (user) {
      setUserInfo({
        nickname: user.nickname,
        picutre: user.picture,
        email: user.email,
      });
    }
  }, [user]);

  console.log(user);

  return (
    <Container style={{ marginTop: 16 }}>
      <Row>
        <Col></Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={userInfo.picutre} />
            <Card.Body>
              <Card.Title>{userInfo.nickname}</Card.Title>
              <Card.Text>{userInfo.email}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
