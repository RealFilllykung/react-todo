import { Button, Container, Row, Col } from 'react-bootstrap'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

import TodoListItem from './TodoListItem'

function TodoList(){
    const [inputBinding,setInputBinding] = useState("")
    const [input,setInput] = useState("")
    const [itemList,setItemList] = useState([])

    function handleChange(e){
        setInput(e.target.value)
        setInputBinding(e.target.value)
    }

    function handleClick(){
        var newItemList = itemList
        newItemList.push({taskName: input})
        setItemList(newItemList)
        setInputBinding('')
    }

    
    function RenderTodoListItem(){
        const RenderedTodoListItem = itemList.map((item,index) => {
            return <TodoListItem key={index} item={item}/>
        })

        return RenderedTodoListItem
    }

    return(
        <div>
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <Form.Control type="text" value={inputBinding} onChange={e => handleChange(e)} placeholder="Enter todo name"></Form.Control>
                    </Col>
                    <Col xs="auto">
                        <Button variant="success" type="submit" className="mb-2" onClick={() => handleClick()}>+</Button>
                    </Col>
                </Row>             
            </Container>
            <RenderTodoListItem/>
        </div>
    )
}

export default TodoList