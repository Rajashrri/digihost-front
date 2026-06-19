import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { careerApi } from "../../utils/frontApi"; // apna path
const Popupform = ({ showPopup, setShowPopup }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    experience: "",
    location: "",
    position : "",
    coverLetter: "",
  });

  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

  const validate = () => {
    let err = {};

    if (!formData.fullName.trim()) err.fullName = "Full Name is required";

    if (!formData.email.trim()) err.email = "Email is required";

    if (!formData.mobile.trim()) err.mobile = "Mobile Number is required";
    else if (!/^\d{10}$/.test(formData.mobile))
      err.mobile = "Mobile Number must be 10 digits";

    if (!formData.experience.trim()) err.experience = "Experience is required";

    if (!formData.location.trim()) err.location = "Location is required";
    if (!formData.position.trim()) err.position = "Position is required";

    if (!resume) err.resume = "Resume is required";

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      const fd = new FormData();

      Object.keys(formData).forEach((key) => {
        fd.append(key, formData[key]);
      });

      fd.append("resume", resume);

      const response = await careerApi(fd);

      if (response.data.success) {
        toast.success(response.data.message);

        setTimeout(() => {
          navigate("/thank-you");
        }, 1000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

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
  return (
    <div className={`career-popup ${showPopup ? "active" : ""}`}>
      <div
        className="career-popup-overlay"
        onClick={() => setShowPopup(false)}
      ></div>

      <div className="career-popup-box">
        <button
          className="career-popup-close"
          onClick={() => setShowPopup(false)}
        >
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="36"
              y="11"
              width="12"
              height="36"
              rx="6"
              transform="rotate(45 36 11)"
              fill="#B1EBE0"
            />
            <rect
              x="11"
              y="19.5147"
              width="12"
              height="36"
              rx="6"
              transform="rotate(-45 11 19.5147)"
              fill="#B1EBE0"
            />
          </svg>
        </button>

        <div>
          <h3>Application Form</h3>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter name"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && (
                      <small className="text-danger">{errors.fullName}</small>
                    )}{" "}
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                    {errors.email && (
                      <small className="text-danger">{errors.email}</small>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Mobile Number *</label>
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Enter number"
                      maxLength={10}
                      value={formData.mobile}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");

                        setFormData({
                          ...formData,
                          mobile: value,
                        });

                        setErrors({
                          ...errors,
                          mobile: "",
                        });
                      }}
                    />

                    {errors.mobile && (
                      <small className="text-danger">{errors.mobile}</small>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Total Experience *</label>
                    <input
                      type="text"
                      name="experience"
                      placeholder="2 Years"
                      value={formData.experience}
                      onChange={handleChange}
                    />

                    {errors.experience && (
                      <small className="text-danger">{errors.experience}</small>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Current Location *</label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Mumbai"
                      value={formData.location}
                      onChange={handleChange}
                    />

                    {errors.location && (
                      <small className="text-danger">{errors.location}</small>
                    )}
                  </div>
                    <div className="form-group">
                    <label>Apply For The Position * </label>
                    <input
                      type="text"
                      name="position"
                      placeholder="Front end Developer"
                      value={formData.position}
                      onChange={handleChange}
                    />

                    {errors.position  && (
                      <small className="text-danger">{errors.position}</small>
                    )}
                  </div>

                 
                </div>
              </div>
              <div className="col-lg-12">
                 <div className="form-group fileup">
                    <label>Upload Resume *</label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => {
                        const file = e.target.files[0];

                        if (file) {
                          const ext = file.name.split(".").pop().toLowerCase();

                          if (!["pdf", "doc", "docx"].includes(ext)) {
                            toast.error("Only PDF, DOC and DOCX allowed");
                            return;
                          }

                          setResume(file);
                        }
                      }}
                    />

                    {errors.resume && (
                      <small className="text-danger">{errors.resume}</small>
                    )}
                    <div className="fileinput">
                      <span>Choose A File</span>
                    </div>
                  </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Cover Letter / Message</label>
                  <textarea
                    rows="4"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-btns">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popupform;
