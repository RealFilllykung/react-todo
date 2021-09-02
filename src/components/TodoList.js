import { Button, Container, Row, Col, Card } from 'react-bootstrap'
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

    function handleKeyPress(e){
        if(e.charCode === 13){
            if (input === '') return

            var newItemList = itemList
            newItemList.push({taskName: input})
            setItemList(newItemList)
            setInputBinding('')
        }
    }

    function handleClick(){
        if (input === '') return

        var newItemList = itemList
        newItemList.push({taskName: input})
        setItemList(newItemList)
        setInputBinding('')
    }

    function RemoveTodoItem(e){
        const value = e.target.value
        const targetItem = itemList[value]
        const newArray = itemList.filter((item) => {return item !== targetItem})

        setItemList(newArray)
    }

    
    function RenderTodoListItem(){
        const RenderedTodoListItem = itemList.map((item,index) => {
            return (
                <Card className="mb-2">
                    <Row>
                        <Col xs={10}>
                            
                            <TodoListItem key={index} item={item}/>
                        </Col>
                        <Col xs={2} className="mb-2">
                            <Button variant="danger" value={index} onClick={(e) => RemoveTodoItem(e)}>-</Button>
                        </Col>
                    </Row>
                </Card>
            
            )
        })

        return RenderedTodoListItem
    }

    return(
        <div>
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <Form.Control type="text" value={inputBinding} onChange={e => handleChange(e)} onKeyPress={e => handleKeyPress(e)} placeholder="Enter todo name"></Form.Control>
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