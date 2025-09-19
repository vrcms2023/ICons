import React, { useState } from "react";
import UserContactForm from "../Frontend_Views/Components/UserContactForm";
import RaqUseForm from "../Frontend_Views/Components/RaqUseForm";

const RaqFormModel = ({ closeModel, downloadPDF }) => {
  const [formSuccess, setFormSuccess] = useState(false);
  return (
    <div className="modal d-block modal-lg" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-dark fs-4">
              {formSuccess ? "Thank you for contacting us" : "Request For Quotation"}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModel}
            ></button>
          </div>
          <div className="modal-body px-4 py-3">
            {/* User Contact Form */}
            {formSuccess ? (
              <div className="alert alert-success text-center" role="alert">
                {" "}
                Thank you for your submission. <br />
                We appreciate your interest in our brochure.
              </div>
            ) : (
              <RaqUseForm
                closeModel={closeModel}
                downloadPDF={downloadPDF}
                buttonLabel="DOWNLOAD"
                setFormSuccess={setFormSuccess}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RaqFormModel;
