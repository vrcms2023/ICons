import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Components
import Title from "../../Common/Title";

// Styles
import { axiosClientServiceApi, axiosServiceApi } from "../../util/axiosUtil";
import useAdminLoginStatus from "../../Common/customhook/useAdminLoginStatus";

const JobCurrentOpenings = () => {
  const [posts, setPosts] = useState([]);
  const { isAdmin, hasPermission } = useAdminLoginStatus();
  useEffect(() => {
    const getCareerData = async () => {
      try {
        let response = "";
        if (isAdmin) {
          response = await axiosServiceApi.get(`/careers/createCareer/`);
        } else {
          response = await axiosClientServiceApi.get(
            `/careers/clientCareersList/`
          );
        }

        let keys = Object.keys(response.data);
        if (keys.length > 1) {
          setPosts(response.data.results);
        } else {
          setPosts(response.data.careers);
        }
      } catch (error) {
        console.log("Unable to get the Career data");
      }
    };
    getCareerData();
  }, [isAdmin]);

  return (
    <div className="p-3 mb-2 currentOpenings">
      <Title title="Current Openings" cssClass="mb-3 fs-5 fw-medium text-start title" />
      <ul>
        {posts.map((item) => (
          <li className="" key={item.id}>
            <Link to={`/career-details/${item.id}/`}>{item.job_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobCurrentOpenings;
