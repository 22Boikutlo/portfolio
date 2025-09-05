import { useEffect, useState } from 'react'
import styles from './Contact.module.css'
import { ArrowForward, GitHub, Email, LinkedIn, Phone } from '@mui/icons-material';


const Contact = () => {
  const [contact, setContact] = useState(null);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cb664fc8-02da-4f86-8394-117c2cc8cb6f");


    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useEffect(() => {
    async function fetchContact() {
      try {
        const res = await fetch('https://boikutloportfolioapi.azurewebsites.net/api/Owner/1003');
        const data = await res.json();
        setContact(data[0]); // assuming API returns array
      } catch (error) {
        console.error('Failed to fetch contact data:', error);
        alert('Failed to fetch contact data. Please try again later.');
      }
    }
    fetchContact();
  }, []);
  return (

    <div className={styles.contact}>

        {/* Contact Form */}
        <div className={styles.contactCol}>
          <div className={styles.contactItem}>
            <h2>Contact Information</h2>
            <p>Interested in working together? Reach out and I’ll respond as soon as possible.</p>
            {contact ? (
              <ul>
                <li> <Email /> Email <a href={contact.EmailURL} target='blank' rel='nonopener nonreferrer' /></li>
                <li> <Phone /> {contact.Phone || '+27 72 873 5988'} <a href={`tel"${contact.EmailURL}`} target='blank' rel='nonopener nonreferrer' /></li>
                <li> <GitHub /> GitHub <a href={contact.GitHub} target='blank' rel='nonopener nonreferrer' /></li>
                <li> <LinkedIn /> LinkedIn <a href={contact.LinkedIn} target='blank' rel='nonopener nonreferrer' /></li>
              </ul>
            ) : (<p>Loading contact info..</p>)}
          </div>
        </div>


        {/* Contact Form */}
        <div className={styles.contactCol}>

          <div className={styles.contactItem}>

            <h2>Should you have any business or queries</h2>
            <form onSubmit={onSubmit} id="contact">
              <label>Your Name</label>
              <input type="text" placeholder='Enter your name' name="name" required />

              <label>Email Address</label>
              <input type="email" placeholder='Enter your email address' name="email" required />

              <label>Message</label>
              <textarea placeholder='Enter your message' name="message" rows="4" required></textarea>

              <button type="submit" className='desktopMenuBtn'>
                Submit Now <ArrowForward />
              </button>
            </form>
            <p>{result}</p>

          </div>
        </div>
      </div>

   




  )
}

export default Contact