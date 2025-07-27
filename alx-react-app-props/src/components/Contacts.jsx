 import React, { useState } from 'react';

    function Contact() {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields.');
            return;
        }
        alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      };

      return (
        <div style={{ padding: '20px', backgroundColor: '#fffacd', minHeight: 'calc(100vh - 120px)' }}>
          <h1 style={{ color: '#2c3e50', textAlign: 'center' }}>Contact Us</h1>
          <form onSubmit={handleSubmit} style={{ 
              maxWidth: '500px', 
              margin: '20px auto', 
              padding: '20px', 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              backgroundColor: '#ffffff'
          }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={{ display: 'block', width: 'calc(100% - 20px)', padding: '10px', margin: '10px auto', borderRadius: '4px', border: '1px solid #ccc' }}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={{ display: 'block', width: 'calc(100% - 20px)', padding: '10px', margin: '10px auto', borderRadius: '4px', border: '1px solid #ccc' }}
              required
            />
           <textarea
             name="message"
             placeholder="Your Message"
             value={formData.message}
             onChange={handleChange}
             style={{ display: 'block', width: 'calc(100% - 20px)', padding: '10px', margin: '10px auto', borderRadius: '4px', border: '1px solid #ccc', minHeight: '80px' }}
             required
           />
           <button 
             type="submit" 
             style={{ 
                 backgroundColor: '#007bff', 
                 color: 'white', 
                 padding: '10px 20px', 
                 border: 'none', 
                 borderRadius: '5px', 
                 cursor: 'pointer', 
                 fontSize: '1em',
                 marginTop: '10px'
             }}
           >
                Send Message
           </button>
          </form>
        </div>
      );
    }

    export default Contact;
    