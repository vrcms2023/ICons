import React from "react";

import Title from "../../Common/Title";
import { showPosteddate } from "../../util/commonUtil";
import ShareButtons from "../../Common/Share";

const JobBriefDetails = ({ jobDetails }) => {

  console.log("Job Details", jobDetails)

  return (
    <div className="jobBriefDetails p-3 position-relative">
      <div
        className="d-flex justify-content-end align-items-end position-absolute"
        style={{ right: "10px" }}
      >
        <ShareButtons />
      </div>
      <div className="d-flex justify-content-start align-items-center gap-3">
        <Title
          title={jobDetails.job_title ? jobDetails.job_title : "Default Career"}
          cssClass="fw-medium fs-3"
        />
        {/* <small className="d-block text-muted">
          [ {jobDetails.job_location ? jobDetails.job_location : "Default Career"} ]
        </small> */}
      </div>
      <div className="mb-2">
        <span className="fw-medium">Experience</span> : Minimum{" "}
        {jobDetails.experience_from ? jobDetails.experience_from : 0} to 
        {jobDetails.experience_to ? jobDetails.experience_to : 0} years
      </div>
      <div className="mb-2">
        <span className="fw-medium">Education</span> :{" "}
        {jobDetails.education ? jobDetails.education : "Default Career"}
      </div>
      <div className="mb-2">
        <span className="fw-medium">Location</span> : {jobDetails.job_location ? jobDetails.job_location : ""}
      </div>
      <div className="mb-2">
        <span className="fw-medium">Skills</span> : {jobDetails.skills ? jobDetails.skills : ""}
      </div>
      <div className="mb-2">
        <span className="fw-medium">Work Mode</span> : {jobDetails.mode_of_work ? jobDetails.mode_of_work : ""}
      </div>
      <div className="mb-2">
        <span className="fw-medium">Employment Type</span> : {jobDetails.employment_Type ? jobDetails.employment_Type : ""}
      </div>
    

      <hr className="my-3" />

      <div className="d-flex justify-content-between align-items-start align-items-lg-center flex-column flex-lg-row">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
          <div className="d-flex gap-2 justify-content-center align-items-start">
            <strong>Posted : </strong>
            <span>{showPosteddate(jobDetails.posted_date)} days ago</span>
          </div>
          <div className="d-flex gap-2 justify-content-center align-items-start">
            <strong>Openings : </strong>
            {jobDetails.openings ? jobDetails.openings : 0}
          </div>
        </div>
      </div>

      <div className="my-3">
        <div>
          <strong>About company </strong>
        </div>
        <div>
          {jobDetails.about_company ? jobDetails.about_company : "Default Company Description"}
        </div>
      </div>
    </div>
  );
};

export default JobBriefDetails;
