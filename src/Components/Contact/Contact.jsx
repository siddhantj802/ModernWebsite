import React from 'react'
import msgIcon from '../../assets/msg-icon.png'
import phoneIcon from '../../assets/phone-icon.png'
import mailIcon from '../../assets/mail-icon.png'
import locationIcon from '../../assets/location-icon.png'
import whiteArrow from '../../assets/white-arrow.png'
import './Contact.css'


function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "01e124ab-079e-4084-aa69-22b9fbfdf702");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='container contact' id='Contact'>
        <div className="contactInfo">
            <h3>Some Text<img src = {msgIcon} alt='msg-icon'/></h3>
            <p>Some Text again and again again and again again and again again and again 
            again and again again and again again and again again and again again and again
            again and again again and again again and again.
            </p>
            <ul>
                <li><img src = {mailIcon} /> someemail@gmail.com</li>
                <li><img src={phoneIcon} />+91 1234-456-789</li>
                <li><img src={locationIcon} />123/321 <br/> LajpatNagar, Near Narayanpura Crossing <br/> Ahmedabad</li>
            </ul>
        </div>
        <div className="contactInfo">
            <form onSubmit={onSubmit}>
                <label >Name</label>
                <input type='text' name='name' placeholder='Your Name?'required/>
                <label >Email</label>
                <input type='email' placeholder='Your Email' name='email' required />
                <label >Ph-Number</label>
                <input type='tel' placeholder='Your Phone Number' name='ph-no' required />
                <label >Message</label>
                <textarea name='message' rows='6' cols='60' required/>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={whiteArrow}  /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact