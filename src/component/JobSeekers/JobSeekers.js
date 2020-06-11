import React, {useState} from 'react';
import './JobSeekers.scss';
import { Button, Input } from 'semantic-ui-react';

const JobSeekers = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState('');
  const [flash, setFlash] = useState('')
  const [message, setMessage] = useState('');

  let formData = new FormData();

  const handleSubmit = () => {
    if (resume.type === "application/pdf") {
      const droppackage = JSON.stringify({firstName: firstName, lastName: lastName, email: email});
      formData.append('resume', resume)
      formData.append('info', droppackage)
      fetch(`http://localhost:5000/api/v1/candidates`, {
        method: "POST",
        body: formData,
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
        if (body.status ==="ok") {
          setMessage('Resume Uploaded Successfully');
          setFirstName("")
          setLastName("")
          setEmail("")
          setResume('')
        } else {
          setMessage('Error on Upload');
        }
      })
    } else {
      setMessage('Resume Must Be Saved as a PDF');
    }
  }

  const submitMessage = () => {
    if (message === "Resume Uploaded Successfully") {
      return("happy-notice")
    } else if (message === "Resume Must Be Saved as a PDF")  {
        return ("sad-notice")
        }
      }

      return (
        <div className='ContactUs'>
        <h1 className='title'>Contact Us</h1>
        <h2>Hello</h2>
        <div className={submitMessage()}>
        {message}
        </div>
        <div className="inputs">
        <Input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder='First Name' />
        <Input value={lastName} onChange={e => setLastName(e.target.value)} placeholder='Last Name' />
        <Input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
        <Input type="file" onChange={e => setResume(e.target.files[0])} />
        </div>
        <Button onClick={() => handleSubmit()}>Submit</Button>
        </div>
      );
    };

    export default JobSeekers;
