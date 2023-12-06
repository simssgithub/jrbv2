import React, {useState} from 'react'
import emailjs from '@emailjs/browser';

function EmailForm () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] =useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        //emailjs serviceID, templateId, PublicKey
        const serviceId = 'service_vh5u7bg';
        const templateId = 'template_3zy73ry';
        const publickey ='pnMw0Hi5N8kv9SQxn';

        //new object template params
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name:'Web Wizard',
            message: message,
        };

        //send the email using emailjs
        emailjs.send(serviceId, templateId, templateParams ,publickey)
        .then((response)=>{
            console.log("SUCCESS!", response);
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((error) => {
            console.error('error sending email:', error);
        });
}
  return (
    <form onSubmit={handleSubmit} className='emailForm'>
        <input type='text'
        placeholder='Your Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input
        type='email'
        placeholder='Your Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
        cols="30"
        row="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        >
        </textarea>
        <button type='submit'>Send Email</button>
    </form>
  )
}

export default EmailForm