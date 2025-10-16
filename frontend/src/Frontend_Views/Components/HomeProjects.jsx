import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// Styles
import "./HomeProjects.css";
import Title from "../../Common/Title";
import styled from "styled-components";
import { getClientProjects } from "../../redux/project/clientProjectActions";
import { dataFormatedByCatergoryName, sortByCreatedDate } from "../../util/dataFormatUtil";
import { Link } from "react-router-dom";
import Button from "../../Common/Button";

const HomeProjects = () => {
  const { clientProjects } = useSelector((state) => state.clientProjects);
  const dispatch = useDispatch();

  const [completed, setCompleted] = useState([]);
  const [ongoing, setOngoing] = useState([]);

  useEffect(() => {
    if (clientProjects.length === 0) {
      dispatch(getClientProjects());
    }
  }, [dispatch, clientProjects]);

  useEffect(() => {
    if (clientProjects?.projectList?.length > 0) {
      const projectList = dataFormatedByCatergoryName(clientProjects);
      setCompleted(sortByCreatedDate(projectList.completed));
      setOngoing(sortByCreatedDate(projectList.ongoing));
    }
  }, [clientProjects]);

  return (
    <div className="container">
      <div className="row my-4 mb-md-5 homeProjectsBg shadow-sm">
        <div className="col-md-12 d-flex justify-content-center align-items-center">
          <div className="container p-0">
            <div className="row">
              {ongoing?.length > 0 && (
                <div className={completed?.length > 0 ? "col-md-6 py-4 bg-ongoing" : "col-md-12"}>
                  <Title
                    title={ongoing[0]?.projectCategoryName}
                    cssClass="text-capitalize fw-medium fs-4 mb-3 text-center"
                  />
                  <ProjectItem projectsList={ongoing} projectType={ongoing} />
                </div>
              )}

              {completed?.length > 0 && (
                <div className={ongoing?.length > 0 ? "col-md-6 py-4 bg-completed" : "col-md-12"}>
                  <Title
                    title={completed[0]?.projectCategoryName}
                    cssClass="text-capitalize fw-medium fs-4 mb-3 text-center"
                  />
                  <ProjectItem projectsList={completed} projectType={completed} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectItem = ({ projectsList, projectType }) => {
  const limit = 20;
  const navigate = useNavigate();

  const handleClick = (e, item) => {
    e.preventDefault();
    navigate("/project-details", {
      state: {
        selectedProjects: projectType,
        projectid: item.id,
      },
    });
  };
  return (
    <div class="scroll-container">
      <div className="scroll-content">
        {projectsList?.map((item, index) => (
          <React.Fragment key={index}>
            <div className="item mb-2 text-center">
              <Link
                to="/"
                onClick={(e) => handleClick(e, item)}
                className="p-2 link-underline link-underline-opacity-0"
              >
                {item.projectTitle}
              </Link>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HomeProjects;
