import { Card } from "react-bootstrap";
import TodoList from './TodoList'

function TodoListBox(){
    return(
        <Card>
            <Card.Body>
                <TodoList></TodoList>
            </Card.Body>
        </Card>
    )
}

export default TodoListBox