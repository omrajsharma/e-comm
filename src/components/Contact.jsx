import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import './Contact.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Contact() {
  const [validated, setValidated] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, phoneNumber, message)

    if (name === '' || email === '' || phoneNumber === '' || message === '') {
      alert('Please fill in all the fields')
      return
    }

    axios.post("https://learning-dd51f-default-rtdb.asia-southeast1.firebasedatabase.app/e-comm__contact.json", {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      message: message
    })
    .then((response) => {
      alert('Message sent successfully')
      setName('')
      setEmail('')
      setPhoneNumber('')
      setMessage('')
    })
    .catch((error) => {
      alert('Error sending message')
    })
  }

  return (
    <div>
      <Container>
        <div className='contact-header'>
          <h1>Contact Us</h1>
        </div>

        <div className='contact-form'>
        <Form
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter name"
            value={name} 
            onChange={
              (e) => {
                setName(e.target.value)
              }
            } />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={email}
            onChange={
              (e) => {
                setEmail(e.target.value)
              }
            }
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control 
            type="nunber" 
            placeholder="Enter phone number" 
            value={phoneNumber}
            onChange={
              (e) => {
                setPhoneNumber(e.target.value)
              }
            }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control 
            as="textarea" 
            rows={3} 
            value={message}
            onChange={
              (e) => {
                setMessage(e.target.value)
              }
            }
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
      </Container>
    </div>
  )
}

export default Contact