import React from "react";

const Popupform = ({ showPopup, setShowPopup }) => {
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
             <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="36" y="11" width="12" height="36" rx="6" transform="rotate(45 36 11)" fill="#B1EBE0"/>
            <rect x="11" y="19.5147" width="12" height="36" rx="6" transform="rotate(-45 11 19.5147)" fill="#B1EBE0"/>
            </svg>
        </button>

        <div>
          <h3>Application Form</h3>

          <form>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Enter name" />
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="Enter email" />
                  </div>

                  <div className="form-group">
                    <label>Mobile Number *</label>
                    <input type="text" placeholder="Enter number" />
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Total Experience *</label>
                    <input type="text" placeholder="2 Years" />
                  </div>

                  <div className="form-group">
                    <label>Applying For Position *</label>

                    <div className="select-wrap">
                      <select>
                        <option>Select</option>
                        <option>Frontend Developer</option>
                        <option>Backend Developer</option>
                        <option>UI/UX Designer</option>
                      </select>

                      <span className="select-arrow">
                       <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
                      <path d="M0 0L5 5L10 0H0Z" fill="white"/>
                    </svg>
                      </span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Current Location *</label>
                <div className="select-wrap">
                    <select>
                      <option>Select</option>
                      <option>Nagpur</option>
                      <option>Pune</option>
                      <option>Mumbai</option>
                    </select>
                         <span className="select-arrow">
                       <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
                      <path d="M0 0L5 5L10 0H0Z" fill="white"/>
                    </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-grid">
                  <div className="form-group fileup">
                    <label>Upload Resume *</label>
                    <input type="file" />
                    <div className="fileinput">
                      <span>Choose A File</span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Cover Letter / Message</label>
                    <textarea rows="4"></textarea>
                  </div>
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

              <button type="submit" className="submit-btn">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popupform;