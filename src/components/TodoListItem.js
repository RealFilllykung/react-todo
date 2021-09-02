
import { Col } from "react-bootstrap"

function TodoListItem(props){
    return(
        <Col className="text-dark">
            {props.item.taskName}
        </Col> 
    )
}

export default TodoListItem