import React, { useEffect, useState } from "react";
import RegistrationSuccess from "./RegistrationSuccess";

function RegisterForm() {
  const [data, setData] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState(null);

  const toggleStatus = () => {
    setIsRegistered(!isRegistered);
  };


  //   fetch data for select everytime page loads
  useEffect(() => {
    // Fetch data from your API
    fetch("https://backend.getlinked.ai/hackathon/categories-list")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const baseUrl = "https://backend.getlinked.ai";
  // use state for form data

  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    group_size: 0,
    project_topic: "",
    category: 0,
    privacy_poclicy_accepted: false,
  });

  const handleCheckboxChange = (event) => {
    const newValue = event.target.checked;
    setIsChecked(newValue);

    // Update the formData with the checkbox value
    setFormData((prevFormData) => ({
      ...prevFormData,
      privacy_poclicy_accepted: newValue,
    }));
  };

  // on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(JSON.stringify(formData));
  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = baseUrl + "/hackathon/registration";
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
        setIsRegistered(true);
      } else {
        // Handle error response
        setIsRegistered(false);
        const errorData = await response.json(); // Assuming the error message is in JSON format
        alert(errorData.email);
        
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="w-full flex flex-col items-start">
        <div className="w-full flex flex-col items-start lg:flex-row gap-3 lg:gap-1">
          <div className="w-[90%] lg:w-1/2 lg:my-2">
            <div className="">
              <label className="font-[montserrat] text-[14px] text-white">
                Team's Name
              </label>
              <div className="w-full lg:w-5/6 py-1">
                <input
                  type="text"
                  required
                  name="team_name"
                  value={formData.team_name}
                  onChange={handleInputChange}
                  placeholder="Enter the name of your group"
                  className=" w-full px-3 py-3 text-[montserrat] text-[14px]  text-white outline-none bg-transparent border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="w-[90%] lg:w-1/2 lg:my-2">
            <div className="">
              <label className="font-[montserrat] text-[14px] text-white">
                Phone
              </label>
              <div className="w-full lg:w-5/6 py-1">
                <input
                  type="tel"
                  required
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className=" w-full px-3 py-3 text-[montserrat] text-[14px] text-white outline-none bg-transparent border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-start my-1 lg:flex-row gap-1">
          <div className="w-[90%] lg:w-1/2 lg:my-2">
            <div className="">
              <label className="font-[montserrat] text-[14px] text-white">
                Email
              </label>
              <div className="w-full lg:w-5/6 py-1">
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className=" w-full px-3 py-3 text-[montserrat] text-[14px] text-white outline-none bg-transparent border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="w-[90%] lg:w-1/2 lg:my-2">
            <div className="">
              <label className="font-[montserrat] text-[14px] text-white">
                Project Topic
              </label>
              <div className="w-full lg:w-5/6 py-1">
                <input
                  type="text"
                  required
                  name="project_topic"
                  value={formData.project_topic}
                  onChange={handleInputChange}
                  placeholder="What is your group project topic"
                  className=" w-full px-3 py-3 text-[montserrat] text-[14px] text-white outline-none bg-transparent border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex lg:gap-1 my-1 pr-2">
          <div className="w-[60%] lg:w-1/2">
            <label className="font-[montserrat] text-[14px] text-white">
              Category
            </label>
            <div className="w-5/6 py-1">
              <select
                name="category"
                required
                value={formData.category}
                onChange={handleInputChange}
                className=" w-full px-3 py-3 text-[montserrat] text-[14px] text-white outline-none bg-transparent border border-gray-300 rounded-md"
              >
                <option className="text-black" value="">
                  Select your category
                </option>
                {data.map((item) => (
                  <option className="text-black" key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-[40%] lg:w-1/2 ">
            <label className="font-[montserrat] text-[14px] text-white">
              Group Size
            </label>
            <div className="w-5/6 py-1">
              <select
                name="group_size"
                required
                value={formData.group_size}
                onChange={handleInputChange}
                className=" w-full px-3 py-3 text-[montserrat] text-[14px] text-white outline-none bg-transparent border border-gray-300 rounded-md"
              >
                <option className="text-black" value="">
                  Select
                </option>
                <option className="text-black" value="2">
                  2
                </option>
                <option className="text-black" value="4">
                  4
                </option>
                <option className="text-black" value="6">
                  6
                </option>
                <option className="text-black" value="8">
                  8
                </option>
                <option className="text-black" value="10">
                  10
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-5/6 mt-2 lg:w-4/6">
          <p className="font-[montserrat] text-[14px] text-[#D434FE] italic">
            Please review your registration details before submitting
          </p>
        </div>
        <div className="w-5/6 flex gap-2 my-2">
          <input
            type="checkbox"
            name="group_size"
            checked={isChecked}
            onChange={handleCheckboxChange}
            required
          />
          <p className="text-white font-[montserrat] text-[12px]">
            I agreed with the event terms and conditions and privacy policy
          </p>
        </div>
        <div className="w-full flex flex-col items-center lg:justify-start">
          <div className="mt-5 lg:w-[95%]">
            <button
              type="submit"
              className="w-full text-center text-base font-[montserrat] text-white bg-gradient-to-r from-[#FE34B9] via-[#D434FE] to-[#903AFF] py-2 px-7 rounded-sm"
            >
              submit
            </button>
            {/* <RegisterBtn type="Submit" text="Submit" /> */}
          </div>
          {/* {isVisible && (
            <div className="mt-3">
              <p className="text-white">{error}</p>
            </div>
          )} */}
        </div>
      </div>
      <RegistrationSuccess isRegistered={isRegistered} onClose={toggleStatus} />
    </form>
  );
}

export default RegisterForm;
