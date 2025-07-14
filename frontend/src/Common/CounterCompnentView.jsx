import React, { useEffect, useState } from "react";

import Title from "./Title";
import { axiosClientServiceApi } from "../util/axiosUtil";
import SkeletonImage from "./Skeltons/SkeletonImage";

const CounterCompnentView = ({ getDataAPIURL, componentState }) => {
  const [counterData, setCounterData] = useState([]);

  useEffect(() => {
    const getCounterData = async () => {
      try {
        const response = await axiosClientServiceApi.get(getDataAPIURL);
        if (response?.status === 200) {
          setCounterData(
            response?.data?.counterSetList
              ? response.data.counterSetList[0]
              : []
          );
        } else {
          setCounterData([]);
        }
      } catch (error) {
        setCounterData([]);
        console.log("unable to access ulr because of server is down");
      }
    };
    if (!componentState) {
      getCounterData();
    }
  }, [componentState, getDataAPIURL]);

  return (
    <div className="counterComponentView d-flex flex-column align-items-center justify-content-center">
      {!counterData && <SkeletonImage />}
      {counterData.title !== "" && <Title title={counterData.title} />}
      <div className="counterComponentViewContainer d-flex flex-wrap justify-content-center">
        {counterData.counters &&
          counterData.counters.map((counter, index) => (
            <div
              key={index}
              className="counterItem text-center d-flex flex-column m-2 p-3"
            >
              <h3 className="counterLabel">{counter.label}</h3>
              <p className="counterValue">{counter.counter}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
export default CounterCompnentView;
