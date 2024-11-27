import React from 'react';
import { toast } from 'react-toastify';
import { motion  } from 'framer-motion';

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "07a5e2e3-2a59-420e-a85c-fad863d4aa34");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });


    const data = await response.json();

    if (data.success) {
      toast.success("Form submitted Sucessfully");
      setResult(""); // Reset to "Send message"
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult(""); // Reset to "Send message"
    }
  };

  return (
    < motion.div
    
    initial={{opacity:0, x:-200}}
    transition={{duration:1 }}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
     
    className="text-center p-6 oy-20 lg:px-32 w-full overflow-hidden" id="Contact Us">
      <h1 className="text-2xl sm:text-center mb-6">
        Contact <span>with us</span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">
        Ready to make a move? Let's Build Your Future Together
      </p>
      
      <form 
        onSubmit={onSubmit} 
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input 
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2" 
              type="text" 
              name="Name" 
              placeholder="Your Name" 
              required
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input 
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2" 
              type="email" 
              name="Email" 
              placeholder="Your Email" 
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea 
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none" 
            name="Message" 
            placeholder="Message" 
            required
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">
          {result || "Send message"}
        </button>
      </form>
    </motion.div>
  );
}

export default Contact;
