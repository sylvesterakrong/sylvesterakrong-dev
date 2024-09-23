'use client'

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react"
import { useState } from 'react';


const Form = () => {
    const  [formData, setFormData] = useState ({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState ('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
    try {
        const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        });

        const result = await res.json();

        if (res.status === 200) {
        setResponseMessage('Thank you for reaching out!');
        setFormData({
            name: '',
            email: '',
            message: '',
        });
        } else {
        setResponseMessage('Something went wrong. Please try again.');
        }
    } catch (error) {
        setResponseMessage('Error sending message. Please try again.');
    }
    setIsSubmitting(false);
    };
    // Clear the response message after 20 seconds
    setTimeout(() => {
        setResponseMessage('');
    }, 20000); // 20 seconds


  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
        <div className="relative flex items-center">
            <Input 
            type='name' 
            id='name' 
            placeholder='Name'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            />
            <User 
            className="absolute right-6" 
            size={20}
            />
        </div>
        <div className="relative flex items-center">
            <Input 
            type='email' 
            id='email' 
            placeholder='Email'
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            />
            <MailIcon 
            className="absolute right-6" 
            size={20}
            />
        </div>
        <div className="relative flex items-center">
            <Textarea 
            type='name' 
            id='name' 
            placeholder='Type Your Message Here'
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            />
            <MessageSquare 
            className="absolute top-4 right-6" 
            size={20}
            />
        </div>
        <Button 
        className='flex items-center gap-x-1 max-w-[166px]'
        type="submit">
            Let's talk
            <ArrowRightIcon size={20}/>
        </Button>
        {responseMessage && <p>{responseMessage}</p>}
    </form>
  )
}

export default Form