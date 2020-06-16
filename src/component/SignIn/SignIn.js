import React, { useState } from 'react';
import './SignIn.scss';
import { Button, Input } from 'semantic-ui-react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    const droppackage = {email, password};
    console.log(droppackage);
    fetch(`http://localhost:5000/api/v1/admin`, {
      method: "POST",
      body: droppackage,
    })
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        return response
      }
    })
    .then((response) => response.json())
    .then((body) => {
      console.log(body);
      if (body === 200) {
        setMessage('Resume Uploaded Successfully');
        setEmail("")
        setPassword('')
      } else {
        setMessage('Error on Upload');
      }
    })
  }

	return (
    <div className="SignIn">
      <Input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
      <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />
      <Button onClick={() => handleSubmit()}>Submit</Button>
    </div>
  )
};

export default SignIn;
