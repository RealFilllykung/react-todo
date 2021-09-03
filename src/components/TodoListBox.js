import { Card, Col, Container, Row } from "react-bootstrap";
import TodoList from './TodoList'

function TodoListBox(){
    return(
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <Card>
                        <Card.Body>
                            <TodoList></TodoList>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        
    )
}

export default TodoListBox