import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Styles
import "./HomeProjects.css";
import Title from "../../Common/Title";
import styled from "styled-components";
import { getClientProjects } from "../../redux/project/clientProjectActions";
import { dataFormatedByCatergoryName, sortByCreatedDate } from "../../util/dataFormatUtil";

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
      <div className="row my-3 homeProjectsBg">
        <div className="col-md-12 d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Title
                  title={ongoing[0]?.projectCategoryName}
                  cssClass="text-center fw-normal pt-3 mb-3 text-dark"
                />
                <ProjectItem projectsList={ongoing} />
              </div>
              <div className="col-md-6">
                <Title
                  title={completed[0]?.projectCategoryName}
                  cssClass="text-center fw-normal pt-3 mb-3 text-dark"
                />
                <ProjectItem projectsList={completed} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectItem = ({ projectsList }) => {
  const limit = 20;
  return (
    <div>
      {projectsList?.slice(0, limit).map((item, index) => (
        <React.Fragment key={index}>
          <div>{item.projectTitle} </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default HomeProjects;
