import React from 'react';
import './ContactUs.scss';
import { Button, Form, Checkbox, Input } from 'semantic-ui-react';

const ContactUs = () => {
	return (
		<div className='ContactUs'>
			<h1 className='title'>Contact Us</h1>
			<h2>Hello</h2>
			<div>
				<Input placeholder='First Name' />
				<Input placeholder='Last Name' />
				<Input placeholder='Email' />
				<Input placeholder='Phone' />
				<Input placeholder='Company' />
				<Input placeholder='Location' />
				<Input placeholder='Title' />
				<Input placeholder='Message' />
			</div>
			<Button type='submit'>Submit</Button>
		</div>
	);
};

export default ContactUs;
