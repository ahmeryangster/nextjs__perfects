'use client'
import React, { useState } from 'react'

const ContactForm = () => {
  const [status, setStatus] = useState(null);
    const [user, setUser] = useState({
        enterName: "",
        email: "",
        phone: "",
        message: "",
      });
      const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser((prevUser)=> ({...prevUser,[name]:value}))
      };


      const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method:'POST',
                headers:{"Content_Type":"application/json"},
                body: JSON.stringify({
                    username:user.username,
                    email:user.email,
                    phone:user.phone,
                    message:user.message
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus('success');
            } else {
                setStatus('error');
            }

        }catch (e) {
            console.log(e)
        }

    }

  return (
    <>
                  <div>
                <form onSubmit={handleSubmit}>
                  <div className="contact_form_main">
                    <div className="mb-3">
                      <label htmlFor="enterName" className="form-label">
                        Enter Your Name
                      </label>
                      <input
                        type="text"
                        name="enterName"
                        className="form-control"
                        id="enterName"
                        required
                        onChange={handleChange}
                        value={user.enterName}
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        required
                        onChange={handleChange}
                        value={user.email}
                        placeholder="name@example.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        name="phone"
                        className="form-control"
                        id="phone"
                        required
                        onChange={handleChange}
                        value={user.phone}
                        placeholder="03123457878"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        rows={3}
                        value={user.message}
                        onChange={handleChange}
                        placeholder="Enter Your Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="mb-3">
                    {status === 'success' && <p >Thank you for your message!</p>}
                {status === 'error' && <p >There was an error submitting your message. Please try again.</p>}
                      <button type="submit" className="hero_explore_btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
    </>
  )
}

export default ContactForm