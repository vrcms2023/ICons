import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Components
import Title from "../../Common/Title";

// Styles
import "./HomeServices.css";

import { useAdminLoginStatus } from "../../Common/customhook/useAdminLoginStatus";
import ServiceForm from "../../Frontend_Admin/Components/forms/ImgTitleIntoForm-List";
import ModelBg from "../../Common/ModelBg";
import EditIcon from "../../Common/AdminEditIcon";
import { axiosClientServiceApi } from "../../util/axiosUtil";
import {
  mapServicePagetoComponent,
  sortByDate,
  sortByCreatedDate,
} from "../../util/dataFormatUtil";
import { getImagePath } from "../../util/commonUtil";
import RichTextView from "../../Common/RichTextView";

const HomeServices = ({ title }) => {
  const editComponentObj = {
    service: false,
  };

  const [componentEdit, SetComponentEdit] = useState(editComponentObj);
  const [show, setShow] = useState(false);
  const [clientServiceList, setClientServiceList] = useState([]);

  const editHandler = (name, value) => {
    SetComponentEdit((prevFormData) => ({ ...prevFormData, [name]: value }));
    setShow(!show);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    getClinetServiceList();
  }, []);

  const getClinetServiceList = async () => {
    try {
      let response = await axiosClientServiceApi.get(
        `/services/getClientHomePageService/`
      );

      let data = mapServicePagetoComponent(response.data, 6);
      setClientServiceList(data);
    } catch (error) {
      console.log("Unable to get the intro");
    }
  };

  return (
    <>
      {clientServiceList?.map((items, index) =>
        items?.child.map((item) => (
          <div
            className="col-md-4 col-sm-6 p-4 py-3 p-md-1 p-lg-3"
            key={`${index}+homeService`}
          >
            <div
              className="briefIntro"
              // style={{
              //   backgroundImage: `url(${item.path ? getImagePath(item.path) : getImagePath("/media/images/dummy-image-square.png")})`,
              // }}
            >
              <Link
                to={`${item.services_page_url}`}
                className="m-0 text-decoration-none titleLink"
              >
                <Title
                  title={item.feature_title}
                  cssClass="serviceTitle lc1 lineClamp"
                />
              </Link>

              {item.feature_description && (
                <RichTextView
                  data={item.feature_description}
                  className={"description"}
                  // characterLimit={200}
                  showMorelink={false}
                />
                // <div
                //   className="description"
                //   dangerouslySetInnerHTML={{ __html: item.feature_description }}
                // />
              )}
              <Link to={`${item.services_page_url}`} className="mt-3">
                Know More
              </Link>
            </div>
          </div>

          //   <div
          //   className="row service mb-3 mb-md-5"
          //   key={`${index}+homeService`}
          // >
          //    <div className="col-md-6 p-2 homeServiceImg">
          //     <img
          //       src={
          //         item.path
          //           ? getImagePath(item.path)
          //           : getImagePath("/media/images/dummy-image-square.png")
          //       }
          //       alt={item.alternitivetext}
          //       className="img-fluid w-100 h-100"
          //     />
          //   </div>
          //   <div className="col-sm-6 col-md-4 p-2 p-md-4 homeServiceDetails">
          //     <Title
          //       title={item.feature_title}
          //       cssClass="fw-bold serviceTitle"
          //     />
          //     {item.feature_description && (
          //       <RichTextView
          //         data={item.feature_description}
          //         className={"description"}
          //         characterLimit={600}
          //         showMorelink={false}
          //       />
          //        <div
          //        className="description"
          //        dangerouslySetInnerHTML={{ __html: item.feature_description }}
          //      />
          //     )}
          //     <Link
          //       to={`/services/${item.services_page_title}/`}
          //       className="mt-3"
          //     >
          //       Know More
          //     </Link>
          //   </div>

          // </div>
        ))
      )}

      {componentEdit.service ? (
        <div className="adminEditTestmonial">
          <ServiceForm
            editHandler={editHandler}
            componentType="service"
            popupTitle="Service"
          />
        </div>
      ) : (
        ""
      )}

      {show && <ModelBg />}
    </>
  );
};

export default HomeServices;
