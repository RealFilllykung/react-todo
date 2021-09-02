import { Button } from "react-bootstrap"
import { Col, Row } from "react-bootstrap"

function TodoListItem(props){
    return(
        <Row>
            <Col className="text-dark">
                {props.item.taskName}
            </Col>
            <Col xs="auto">
                <Button variant="primary">-</Button>
            </Col>
        </Row>
    )
}

export default TodoListItem