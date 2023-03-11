import React, { useEffect, useRef, useState } from 'react'
import { Container, Form } from 'react-bootstrap'


function MyRefEffectCompo() {

    const divRef = useRef(null)

    const [selColor, setSelColor] = useState("")
    
    useEffect(() => {
      divRef.current.style.backgroundColor=selColor
    }, [selColor])
    
    return (
        <div ref={divRef} className='mcontainer'>
            <Form>
                <Form.Group>
                    <Form.Label>Select Color</Form.Label>
                    <Form.Select onChange={(e) => {
                        // divRef.current.style.backgroundColor = e.target.value
                        setSelColor(e.target.value)
                    }}>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="cyan">Cyan</option>
                    </Form.Select>
                </Form.Group>
            </Form>

        </div>
    )
}

export default MyRefEffectCompo