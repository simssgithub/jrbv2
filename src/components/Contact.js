import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false); // State for confirmation message

  const handleSubmit = (e) => {
    e.preventDefault();
    //emailjs serviceID, templateId, PublicKey
    const serviceId = "service_vh5u7bg";
    const templateId = "template_3zy73ry";
    const publickey = "pnMw0Hi5N8kv9SQxn";

    //new object template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Web Wizard",
      message: message,
    };

    //send the email using emailjs
    emailjs
      .send(serviceId, templateId, templateParams, publickey)
      .then((response) => {
        console.log("SUCCESS!", response);
        setName("");
        setEmail("");
        setMessage("");
        setIsEmailSent(true); // Update state when email is sent
      })
      .catch((error) => {
        console.error("error sending email:", error);
        setIsEmailSent(false); // Optionally handle error state
      });
  };
  return (
    <section className="py-16 lg:section pb-24" id="contact">
      {" "}
      {/* Added pb-24 for padding at the bottom */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4
                className="text-xl uppercase font-medium text-gradient mb-2
              tracking-wide"
              >
                {"Let's Connect"}
              </h4>
              <h2 className="text-[20px] lg:text-[40px] leading-none mb-12">
                {"I'm currently looking for new opportunities"}
              </h2>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 max-w-[500px] border rounded-2xl flex flex-col gap-y-6 pb-10 p-6 items-start"
          >
            {isEmailSent && ( // Render confirmation message if email is sent
              <p className="text-green-500 text-[20px]" >Email sent!</p>
            )}
            {/* form */}
            <form onSubmit={handleSubmit}>
              <input
                className="bg-transparent border-b py-3 outline-none w-full
               placeholder:text-white focus:border-accent transition-all"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="bg-transparent border-b py-3 outline-none w-full
               placeholder:text-white focus:border-accent transition-all"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className="bg-transparent border-b py-12 outline-none 
              w-full placeholder:text-white focus:border-accent transition-all 
              resize-none mb-12"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit" className="btn btn-lg">
                Send message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
