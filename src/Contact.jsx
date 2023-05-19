import {Card, Container, Form, Button, FormLabel, Col, Row, Stack} from "react-bootstrap";
import "./Contact.css"


export default function Contact() {
    return (
        <>
            <Container>
                <Card className="card-contact">
                    <Card.Body>
                        <Card.Title><h2>Contact.</h2></Card.Title>
                        <Form>
                            <Stack gap={2}>
                                <Row>
                                    <Form.Group className="mb-3">
                                        <FormLabel  label="Name">
                                            <Form.Control className="form-input-bottom"  type="text" placeholder="Name" />
                                        </FormLabel>
                                        <FormLabel label="Last Name">
                                            <Form.Control className="form-input-bottom" type="text" placeholder="Last Name" />
                                        </FormLabel>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group className="mb-3">
                                        <FormLabel label="Email address">
                                            <Form.Control className="form-input-bottom" type="email" placeholder="name@example.com" />
                                        </FormLabel>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group  className="mb-3">
                                        <Form.Control className="form-input-textarea" as="textarea" placeholder="tell us about you" rows={3}/>
                                    </Form.Group>
                                </Row>
                                <Button onClick={e=>{e.preventDefault()}} className="form-button" variant="outline-secondary" type="submit">
                                    Submit
                                </Button>
                            </Stack>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}