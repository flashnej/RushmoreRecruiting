import React, {useState} from 'react';
import './JobSeekers.scss';
import { Button, Input } from 'semantic-ui-react';
import FlashMassage from 'react-flash-message';

const JobSeekers = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState('');
  const [flash, setFlash] = useState('')

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
        if (body.status ==="ok") {
          setFlash(
            <FlashMassage duration={5000}>
            <p className= "happy-notice">Resume Uploaded successfully</p>
            </FlashMassage>)
            setFirstName("")
            setLastName("")
            setEmail("")
          } else {
            // debugger
            }
          })
        } else {
          setFlash(<FlashMassage duration={5000}>
            <p className= "sad-notice">File must be a PDF</p>
            </FlashMassage>)
          }
        }

        return (
          <div className='ContactUs'>
          <h1 className='title'>Contact Us</h1>
          <h2>Hello</h2>
          {flash}
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
