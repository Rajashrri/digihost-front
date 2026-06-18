import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { contactApi } from "../../utils/frontApi";
const ContactForm = () => {

const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

const [formData, setFormData] = useState({
  fullName: "",
  phone: "",
  email: "",
  message: "",
});

const [errors, setErrors] = useState({});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });

  setErrors({
    ...errors,
    [e.target.name]: "",
  });
};

const validate = () => {
  let newErrors = {};

  if (!formData.fullName.trim()) {
    newErrors.fullName = "Full Name is required";
  }

  if (!formData.phone.trim()) {
    newErrors.phone = "Phone Number is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email Address is required";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  setIsLoading(true);

  try {
    const response = await contactApi(formData);

    if (response.data.success) {
      navigate("/thank-you");
    }
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};
  return (
    <div>
      <form onSubmit={handleSubmit} data-gsap>
        <div className="row">
          <div className="col-lg-12">
            <div className="contt">
              <input
  type="text"
  name="fullName"
  placeholder="Full Name"
  value={formData.fullName}
  onChange={handleChange}
/>

{errors.fullName && (
  <small className="text-danger">{errors.fullName}</small>
)}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contt">
             <input
  type="text"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={handleChange}
/>

{errors.phone && (
  <small className="text-danger">{errors.phone}</small>
)}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contt">
             <input
  type="email"
  name="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={handleChange}
/>

{errors.email && (
  <small className="text-danger">{errors.email}</small>
)}
            </div>
          </div>
          
          <div className="col-lg-12">
            <div className="contt">
             <textarea
  rows={6}
  name="message"
  placeholder="Message"
  value={formData.message}
  onChange={handleChange}
/>
            </div>
          </div>
          <div className="col-lg-12">
          <button
  type="submit"
  className="btn1"
  disabled={isLoading}
>
  {isLoading ? (
    <>
      <span
        className="spinner-border spinner-border-sm me-2"
        role="status"
        aria-hidden="true"
      ></span>
      Submitting...
    </>
  ) : (
    "Submit"
  )}
</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
