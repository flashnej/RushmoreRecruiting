import React, {useState} from 'react';
import './JobSeakers.scss';
import { Button, Input } from 'semantic-ui-react';

const JobSeakers = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState('');;

  let formData = new FormData();

  const handleSubmit = () => {
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
      }
      })
      .then((response) => response.json())
      .then((body) => {
        console.log(body)
      })
  }

	return (
		<div className='ContactUs'>
			<h1 className='title'>Contact Us</h1>
			<h2>Hello</h2>
			<div className="inputs">
				<Input onChange={e => setFirstName(e.target.value)} placeholder='First Name' />
				<Input onChange={e => setLastName(e.target.value)} placeholder='Last Name' />
				<Input onChange={e => setEmail(e.target.value)} placeholder='Email' />
				<Input type="file" onChange={e => setResume(e.target.files[0])} />
			</div>
			<Button onClick={() => handleSubmit()}>Submit</Button>
		</div>
	);
};

export default JobSeakers;
