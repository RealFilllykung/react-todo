import { Button, Container, Row, Col } from 'react-bootstrap'
import React from 'react'
import { Form } from 'react-bootstrap'

class TodoList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            input: '',
            itemList: []
        }
    }

    handleChange(e){
        this.setState({input: e.target.value})
    }

    handleClick(){
        var newItemList = this.state.itemList
        newItemList.push(this.state.input)

        this.setState({
            itemList: newItemList
        })
    }

    render(){
        return(
            <div>
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <Form.Control type="text" onChange={e => this.handleChange(e)} placeholder="Enter todo name"></Form.Control>
                        </Col>
                        <Col xs="auto">
                            <Button variant="success" type="submit" className="mb-2" onClick={() => this.handleClick()}>+</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default TodoList