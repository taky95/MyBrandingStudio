import { useState } from 'react';
import styles from '../styles/form.module.scss'
import { AnimatePresence, motion } from 'framer-motion';

const Form = () :React.JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const googleFormAction = "FORM_ACTION_URL"; // Replace with your Google Form action URL
  const [formData, setFormData] = useState({
    name: '',
    phone:'',
    email: '',
    message: '',
    address: '',
    category: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    setShowWarning(false); 
  };

  const handlePopup = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setIsOpen(!isOpen)
  };

  const handleSubmit = async (event: React.FormEvent) => {
    if (!isChecked) {
      event.preventDefault(); // Prevent form submission if unchecked
      setShowWarning(true); // Show warning message
    } else {
      event.preventDefault();
      // Create FormData object with Google Form's entry IDs
      const googleFormData = new URLSearchParams();
      googleFormData.append("entry.2005620554", formData.name);     
      googleFormData.append("entry.2005940827", formData.phone);
      googleFormData.append("entry.653595531", formData.email); 
      googleFormData.append("entry.1065046570", formData.address); 
      googleFormData.append("entry.1021057893", formData.category);     
      googleFormData.append("entry.1166974658", formData.message); 
      
      try {
        const response = await fetch(googleFormAction, {
          method: 'POST',
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: googleFormData.toString(),
          mode: 'no-cors', // To avoid CORS issues with Google Forms
        });

        // this will not work due to google form. Customers are advised to check confirmation email.  
        if (!(response.ok)) {
          throw new Error("Failed to fetch data");
        }
      
        setSuccess(true);
        setFormData({ name: '', phone: '', category: '', email: '', address:'', message: '' }); // Reset form on success
      } catch (error) {
        setFail(true);
        console.log(error)
      }
    }
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit} className={(success?styles.submitted:"") + (fail?styles.submitted:"")}>
        <label htmlFor='email'>
          Email*
        </label>
        <input id="email" name="email" type="email"           
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete='email'
        />
        
        <label htmlFor='name'>
          Name*
        </label>
        <input id="name" name="name"               
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete='name'
        />
        
        <label htmlFor='phoneNumber'>
          Phone Number*
        </label>
        <input id="phoneNumber" name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          autoComplete='tel'
        />
        
        <label htmlFor='address'>
          Address
        </label>
        <input id="address" name="address"               
          value={formData.address}
          onChange={handleChange}
          autoComplete='address-level1'
        />
        
        <label htmlFor='category'>
          Category*
        </label>
        <select id="category" name="category" 
          value={formData.category}
          onChange={handleChange}
          required                        
        >
          <option value="General">General Inquiry</option>
          <option value="Service">Service</option>
          <option value="Other">other</option>
        </select>
        
        <label htmlFor='message'>
          Message*
        </label>
        <textarea id="message" name="message" 
          value={formData.message}
          onChange={handleChange}
          required
        />

        <div className={styles.privacy}>
          <input type="checkbox" id="privacy" name="privacy" checked={isChecked} onChange={handleCheckboxChange} />
          <label htmlFor='privacy'>
            <a href="" className="popupBtn" onClick={handlePopup}>Terms and Conditions</a>
          </label>
        </div>

        {showWarning && (
          <p style={{color: "red", textAlign: "center"}}>Please agree on terms and conditions</p>
        )}

        <button type="submit" className={isChecked?"":styles.disabledBtn}>Submit</button>
      </form>

      {success?
        <div className={styles.response}>
          <p>Your message has <br/>successfully submitted</p>
          <p>Please check the confirmation email.</p>
          <p>If you have not received the confirmation, please resubmit from <a href="GOOGLE FORM LINK" target="_blank">this link.</a></p>
        </div>
        :<></>
      }
      {fail?
        <div className={styles.response}>
          <p>Error has occured during the submittion.</p>
          <p>Please reload the page and try again.</p>
          <p>If it keeps failing, please resubmit from <a href="GOOGLE FORM LINK" target="_blank">this link.</a></p>
        </div>
        :<></>
      }

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="popup"
            className={styles.popup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" onClick={handlePopup}>
              <span className="btn_close" />
              X 
            </a>
            <div>
              <p>Terms and Conditions</p>
            </div>
            <a href="#" onClick={handlePopup}>
              <span className="btn_close" />
              X Close
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Form
