import React, { useState } from "react";

function ContactForm() {

  const baseUrl = "https://backend.getlinked.ai"
  // use state for form data
  const [formData, setFormData] = useState({
    "email": "",
    "phone_number": "",
    "first_name": "",
    "message": "",
  });

  // on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // console.log(JSON.stringify(formData))

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = baseUrl+"/hackathon/contact-form"

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful response
        console.log("Data sent successfully");
      } else {
        // Handle error response
        console.error("Error sending data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center justify-center"
    >
      <div className="w-full flex flex-col items-center gap-7 justify-center ">
        <div className="w-5/6">
          <input
            type="text"
            name="first_name"
            required
            value={formData.name}
            onChange={handleInputChange}
            placeholder="First Name"
            className="inp w-full px-3 py-3 text-[montserrat]  text-white outline-none bg-transparent border border-gray-300 rounded-md"
          />
        </div>
        <div className="w-5/6">
          <input
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Mail"
            className="inp w-full px-3 py-3 text-[montserrat]  text-white outline-none bg-transparent border border-gray-300 rounded-md"
          />
        </div>
        <div className="w-5/6">
          <input
            type="tel"
            name="phone_number"
            required
            value={formData.phone_number}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="inp w-full px-3 py-3 text-[montserrat]  text-white outline-none bg-transparent border border-gray-300 rounded-md"
          />
        </div>
        <div className="w-5/6">
          <textarea
            required
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            className="inp w-full h-32 text-white font-[montserrat] p-2 bg-transparent outline-none resize-none  border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="mt-5">
      <button type="submit" className="w-full text-center text-base font-[montserrat] text-white bg-gradient-to-r from-[#FE34B9] via-[#D434FE] to-[#903AFF] py-2 px-7 rounded-sm">submit</button>
        {/* <RegisterBtn type="Submit" text="Submit" /> */}
      </div>
    </form>
  );
}

export default ContactForm;
