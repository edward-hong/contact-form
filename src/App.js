import { useState, useRef } from 'react'
import { FormGroup, Label, Input, FormFeedback, Button } from 'reactstrap'

import Heading from './styled/Heading'
import Form from './styled/Form'

const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [tiger, setTiger] = useState('')
  const [colour, setColour] = useState(null)
  const [animals, setAnimals] = useState([])
  const [isTigerChecked, setIsTigerChecked] = useState(false)

  const emailRef = useRef(null)

  // Handling form changes

  const handleChange = setValue => e => setValue(e.target.value)

  const handleAnimalsChange = e => {
    if (e.target.checked) {
      setAnimals([...animals, e.target.value])
    } else {
      setAnimals(animals.filter(animal => animal !== e.target.value))
    }
  }

  const handleTigerChecked = e => {
    setIsTigerChecked(e.target.checked)
    handleAnimalsChange(e)
  }

  // Validation

  // Email
  const handleEmailValidation = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  // Password
  const handlePasswordValidation = () => {
    return password.length > 8
  }

  // Submit

  const handleSubmit = e => {
    e.preventDefault()

    if (handleEmailValidation() && handlePasswordValidation()) {
      // send data to server
      console.log(email)
      console.log(password)
      console.log(colour)
      console.log(animals)
    }
  }

  return (
    <>
      <Heading>Contact Form</Heading>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="John.doe@email.com"
            valid={handleEmailValidation()}
            onChange={handleChange(setEmail)}
            value={email}
            ref={emailRef}
          />
          <FormFeedback valid>Valid Email</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="email">Password:</Label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            valid={handlePasswordValidation()}
            onChange={handleChange(setPassword)}
            value={password}
          />
          <FormFeedback valid>Valid Password</FormFeedback>
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Colour</legend>
          <FormGroup check>
            <Input
              name="colour"
              type="radio"
              value={'blue'}
              checked={colour === 'blue'}
              onChange={handleChange(setColour)}
            />{' '}
            <Label check>Blue</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              name="colour"
              type="radio"
              value={'green'}
              checked={colour === 'green'}
              onChange={handleChange(setColour)}
            />{' '}
            <Label check>Green</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              name="colour"
              type="radio"
              value={'red'}
              checked={colour === 'red'}
              onChange={handleChange(setColour)}
            />{' '}
            <Label check>Red</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              name="colour"
              type="radio"
              value={'black'}
              checked={colour === 'black'}
              onChange={handleChange(setColour)}
            />{' '}
            <Label check>Black</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              name="colour"
              type="radio"
              value={'brown'}
              checked={colour === 'brown'}
              onChange={handleChange(setColour)}
            />{' '}
            <Label check>Brown</Label>
          </FormGroup>
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Animals</legend>
          <FormGroup check>
            <Input
              name="animals"
              type="checkbox"
              value="bear"
              onChange={handleAnimalsChange}
            />{' '}
            <Label check>Bear</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              name="animals"
              type="checkbox"
              onChange={handleTigerChecked}
              value="tiger"
            />{' '}
            <Label check>Tiger</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              name="animals"
              type="checkbox"
              value="snake"
              onChange={handleAnimalsChange}
            />{' '}
            <Label check>Snake</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              name="animals"
              type="checkbox"
              value="donkey"
              onChange={handleAnimalsChange}
            />{' '}
            <Label check>Donkey</Label>
          </FormGroup>
        </FormGroup>

        {isTigerChecked && (
          <FormGroup>
            <Label for="email">Type of tiger*:</Label>
            <Input
              id="tiger"
              type="text"
              name="tiger"
              placeholder="Siberian"
              required
              onChange={handleChange(setTiger)}
              ref={emailRef}
              value={tiger}
            />
          </FormGroup>
        )}

        <Button type="submit" color="primary">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default App
