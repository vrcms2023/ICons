import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
// Components
import Title from "../../../Common/Title";
import Ancher from "../../../Common/Ancher";
import BriefIntroFrontend from "../../../Common/BriefIntro";
import Carousel from "../../Components/Carousel";
import Testimonials from "../../Components/Testimonials";
import ModelBg from "../../../Common/ModelBg";
import AdminBanner from "../../../Frontend_Admin/Components/forms/ImgTitleIntoForm-List";
import BriefIntroAdmin from "../../../Frontend_Admin/Components/BriefIntro/";
import EditIcon from "../../../Common/AdminEditIcon";
import ABrief from "../../Components/ABrief";
import ABriefAbout from "../../Components/ABriefAbout";
import HomeNews from "../../Components/HomeNews";

// Common Compoenents
import Banner from "../../../Common/Banner";
import { useAdminLoginStatus } from "../../../Common/customhook/useAdminLoginStatus";
import HomeServices from "../../Components/HomeServices";
import ServiceOfferedComponent from "../../Components/ServiceOfferedComponent";
import Features from "../../Components/Features";
import { ImageGalleryStyled } from "../../../Common/StyledComponents/Styled-ImageGallery";
import { HomeClientsStyled } from "../../../Common/StyledComponents/Styled-HomeClients";

// Utilities
import { axiosClientServiceApi } from "../../../util/axiosUtil";
import { removeActiveClass } from "../../../util/ulrUtil";
import {
  getObjectPositionKey,
  sortByFieldName,
  genereateCategoryProducts,
} from "../../../util/commonUtil";
import {
  getCarouselFields,
  getFormDynamicFields,
  getserviceOfferedFields,
  getTestimonialsFields,
  getTitleAndDescriptionFields,
  imageDimensionsJson,
} from "../../../util/dynamicFormFields";

// Styles
import "./Home.css";

// Images
import imgOngoing from "../../../Images/carousel1.jpg";
import imgCompleted from "../../../Images/carousel2.jpg";
import imgFuture from "../../../Images/carousel3.jpg";
import { ProductHilightsStyled } from "../../../Common/StyledComponents/Styled-Products-Hilights";
import { TestimonialCarouselPageStyled } from "../../../Common/StyledComponents/Styled-TestimonialCarousel";
import { RandomHomeServicesStyled } from "../../../Common/StyledComponents/Random-HomeServices";
import { ABriefIntroStyled } from "../../../Common/StyledComponents/Styled-ABriefAbout";
import { getAllCategories } from "../../../redux/products/categoryActions";
import Product from "../Products/Product";
import { SimpleTitleDescComponent } from "../../../Frontend_Admin/Components/BriefIntro/SimpleTitleDescComponent";
import DynamicForm from "../../../Frontend_Admin/Components/forms/DynamicForm";

import {
  createShowHideComponent,
  getAllShowHideComponentsList,
  getShowHideComponentsListByPage,
  updateShowHideComponent,
} from "../../../redux/showHideComponent/showHideActions";
import ImageInputsForm from "../../../Frontend_Admin/Components/forms/ImgTitleIntoForm";
import { HomeClientItem } from "../../Components/HomeClientItem";
import ShowHideToggle from "../../../Common/ShowHideToggle";
import HomeProjects from "../../Components/HomeProjects";
import HomeProjectCarousel from "../../Components/HomeProjectCarousel";
import HomeDynamicServices from "../../Components/HomeDynamicServices";
import { getObjectsByKey } from "../../../util/showHideComponentUtil";
import { HomeClientList } from "../../Components/HomeClientList";
import DownloadBrochures from "../../Components/DownloadBrochures";
import ListofTitleandDescription from "../../../Frontend_Admin/Components/forms/ListofTitleandDescription";
import { getHomeIntroList } from "../../../redux/homeintroList/homeIntroListActions";
import TitleWithDescripton from "../../Components/TitleWithDescripton";
import { HomeServiceStylesComponent } from "../../../Common/StyledComponents/Styled-HomeServices-Compoent";
import { HomeDynamicServiceStylesComponent } from "../../../Common/StyledComponents/Styled-HomeDynamicServices-Compoent";

import Button from "../../../Common/Button";
import WeServeCarousel from "../../Components/WeServeCarousel";

import { BrochureDownloadStyling } from "../../../Common/StyledComponents/Styled-BrochureDownload";
import { WeServedStyled } from "../../../Common/StyledComponents/Styled-WeServe-Component";
import { HomeProjectCauroselComponentStyles } from "../../../Common/StyledComponents/Styled-HomeProjectCarousel-Component";
import CounterForm from "../../../Frontend_Admin/Components/forms/CounterForm";
import CounterCompnentView from "../../../Common/CounterCompnentView";
import { CounterComponentStyles } from "../../../Common/StyledComponents/Styled-Count-Component";

const Home = () => {
  const editComponentObj = {
    carousel: false,
    briefIntro: false,
    homeServicebriefIntro: false,
    projects: false,
    projectsBrief: false,
    testmonial: false,
    serviceOffered: false,
    product_development: false,
    product_distribution: false,
    iconsHelightsBrief: false,
    projectbriefIntro: false,
    homeService0: false,
    homeService1: false,
    homeService2: false,
    homeService3: false,
    homeService4: false,
    homeService5: false,
    homeDynamciServices: false,
    homeDynamciServicesBrief: false,
    counterlist: false,
  };

  const productComp = {
    product_development: "product_development",
    product_distribution: "product_distribution",
    product_registration: "product_registration",
  };
  const [counter, setCounter] = useState(0);
  const pageType = "home";
  const serviceOffered = "serviceOffered";
  const [testimonis, setTestmonis] = useState([]);
  const { isAdmin, hasPermission } = useAdminLoginStatus();
  const [componentEdit, SetComponentEdit] = useState(editComponentObj);
  const [show, setShow] = useState(false);
  const [news, setNews] = useState([]);
  const [clientsList, setClientsList] = useState([]);
  const [homeCategoriesList, setHomeCategoriesList] = useState([]);
  const { categories } = useSelector((state) => state.categoryList);
  const { isLoading } = useSelector((state) => state.loader);
  const showHideCompPageLoad = useRef(true);

  const [productDevelopment, setProductDevelopment] = useState("");
  const [productDistribution, setProductDistribution] = useState("");
  const [productRegistration, setProductRegistration] = useState("");

  const [showHideCompList, setShowHideCompList] = useState([]);
  const { serviceMenu } = useSelector((state) => state.serviceMenu);
  const { homeIntroList } = useSelector((state) => state.homeIntroList);

  const dispatch = useDispatch();

  const editHandler = (name, value) => {
    SetComponentEdit((prevFormData) => ({ ...prevFormData, [name]: value }));
    setShow(value);
    document.body.style.overflow = "hidden";
  };

  const setResponseData = (data) => {
    if (data?.results.length > 0) {
      const _positionKey = getObjectPositionKey(data.results[0]);
      const _newslList = sortByFieldName(data.results, _positionKey);
      setNews(_newslList.slice(0, 4));
    } else {
      setNews([]);
    }
  };

  useEffect(() => {
    if (homeIntroList.length == 0) {
      dispatch(getHomeIntroList());
    }
  }, [homeIntroList?.length]);

  useEffect(() => {
    const getHomePageCategoryList = async () => {
      const ids = categories.map((item) => item.id);
      let categoryId = "";
      const arrURL = [];
      categories.forEach((item, index) => {
        arrURL.push(axiosClientServiceApi.get(`/products/getClinetProduct/${item.id}/`));
      });

      await Promise.all(arrURL).then(function (values) {
        const result = genereateCategoryProducts(values, categories);
        setHomeCategoriesList(result);
      });
    };

    if (categories?.length > 0 && homeCategoriesList?.length === 0) {
      getHomePageCategoryList();
    }
  }, [categories]);

  useEffect(() => {
    removeActiveClass();
    dispatch(getAllCategories());
  }, []);

  useEffect(() => {
    const getTestimonial = async () => {
      try {
        const response = await axiosClientServiceApi.get(`/testimonials/clientTestimonials/`);
        if (response?.status === 200) {
          const _testimonialsList = sortByFieldName(response.data.results, "testimonial_position");
          setTestmonis(_testimonialsList);
        }
      } catch (e) {
        console.log("unable to access ulr because of server is down");
      }
    };
    if (!componentEdit.testmonial) {
      getTestimonial();
    }
  }, [componentEdit.testmonial]);

  useEffect(() => {
    const getClientList = async () => {
      try {
        const response = await axiosClientServiceApi.get(`/client/getAllClientLogos/`);
        if (response?.status === 200) {
          const _clientList = sortByFieldName(response.data.clientLogo, "client_position");

          setClientsList(_clientList);
        }
      } catch (error) {
        console.log("unable to access ulr because of server is down");
      }
    };

    getClientList();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { error, success, showHideList } = useSelector((state) => state.showHide);

  useEffect(() => {
    if (showHideList.length > 0) {
      setShowHideCompList(getObjectsByKey(showHideList));
    }
  }, [showHideList]);

  const showHideHandler = async (id, compName) => {
    if (id) {
      dispatch(updateShowHideComponent(id));
    } else {
      const newData = {
        componentName: compName.toLowerCase(),
        pageType: pageType,
      };
      dispatch(createShowHideComponent(newData));
    }
  };

  const homeServices = [1, 2, 3, 4, 5, 6];

  /** End Visibility ON / OFF logic  */
  return (
    <>
      <div className="container-fluid p-0">
        {/*Download Broucher */}
        <BrochureDownloadStyling>
          <div className="homeBrochure">
            <DownloadBrochures />
          </div>
        </BrochureDownloadStyling>

        {/* ==== CAROUSEL COMPONENT START ======================================================================================================= */}
        <div
          className={
            showHideCompList?.carousel?.visibility && isAdmin && hasPermission
              ? "border border-info mb-2"
              : ""
          }
        >
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.carousel?.visibility}
              title={"Hero Carousel"}
              componentName={"carousel"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.carousel?.id}
            />
          )}
          {showHideCompList?.carousel?.visibility && (
            <>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12 p-0 carousel mb-4">
                    {isAdmin && hasPermission && (
                      <EditIcon
                        editHandler={() => editHandler("carousel", true)}
                        editlabel={"Hero Carousel"}
                      />
                    )}
                    <Carousel
                      carouselState={componentEdit.carousel}
                      category={"carousel"}
                      containerId="carouselHomeGallery"
                    />
                  </div>
                </div>
              </div>

              {componentEdit.carousel && (
                <div className={`adminEditTestmonial selected `}>
                  <AdminBanner
                    editHandler={editHandler}
                    componentType="carousel"
                    popupTitle="Carousel Banners"
                    getImageListURL="carousel/createCarousel/carousel/"
                    deleteImageURL="carousel/updateCarousel/"
                    imagePostURL="carousel/createCarousel/carousel/"
                    imageUpdateURL="carousel/updateCarousel/"
                    imageIndexURL="carousel/updateCarouselindex/"
                    imageLabel="Add Carousel Image"
                    showDescription={false}
                    showExtraFormFields={getCarouselFields("carousel")}
                    dimensions={imageDimensionsJson("carousel")}
                  />
                </div>
              )}
            </>
          )}
        </div>
        {/* ==== END CAROUSEL ========================================================================================================= */}

        {/* INTRODUCTION COMPONENT START =========================================================================================================== */}
        <div
          className={
            showHideCompList?.briefintro?.visibility && isAdmin && hasPermission
              ? "border border-info mb-2"
              : ""
          }
        >
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.briefintro?.visibility}
              title={"A Brief Introduction Component"}
              componentName={"briefintro"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.briefintro?.id}
            />
          )}

          {showHideCompList?.briefintro?.visibility && (
            <>
              <div className="container">
                <div className="row">
                  <div className="breiftopMargin">
                    {isAdmin && hasPermission && (
                      <EditIcon
                        editHandler={() => editHandler("briefIntro", true)}
                        editlabel={"Brief Intro"}
                      />
                    )}

                    <BriefIntroFrontend
                      pageType={pageType}
                      introState={componentEdit.briefIntro}
                      linkCss="btn btn-outline d-flex justify-content-center align-items-center gap-3"
                      linkLabel="Read More"
                      moreLink=""
                      introTitleCss="text-center mb-3"
                      introSubTitleCss="text-center"
                      introDecTitleCss="text-center lh-6"
                      detailsContainerCss="col-md-10 offset-md-1 text-center"
                      anchorContainer="d-flex justify-content-center align-items-center mt-4"
                      anchersvgColor="#17427C"
                    />
                  </div>
                </div>
              </div>

              {componentEdit.briefIntro && (
                <div className={`adminEditTestmonial selected `}>
                  <BriefIntroAdmin
                    editHandler={editHandler}
                    componentType="briefIntro"
                    popupTitle="Brief Intro Banner"
                    pageType="Home"
                  />
                </div>
              )}
            </>
          )}
        </div>
        {/* === END INTRODUCTION=========================================================================================================== */}

        {/* ==== PROJECT + BRIEF INTRODUCTION START ===================================================================================================== */}

        <div
          className={
            showHideCompList?.hprinfra?.visibility && isAdmin && hasPermission
              ? "componentOnBorder"
              : ""
          }
        >
          <div className="commonBg homeProjectsContainer">
            {isAdmin && hasPermission && (
              <ShowHideToggle
                showhideStatus={showHideCompList?.hprinfra?.visibility}
                title={"Projects data fetched from the Project Dashboard [ LIMITED TO 3 ]"}
                componentName={"hprinfra"}
                showHideHandler={showHideHandler}
                id={showHideCompList?.hprinfra?.id}
              />
            )}
            {showHideCompList?.hprinfra?.visibility && (
              <>
                <>
                  <div className="container">
                    <div className="row">
                      <div className="breiftopMargin">
                        {isAdmin && hasPermission && (
                          <EditIcon
                            editHandler={() => editHandler("projectbriefIntro", true)}
                            editlabel="Projects"
                          />
                        )}

                        <BriefIntroFrontend
                          pageType={`${pageType}projectbriefIntro`}
                          introState={componentEdit.projectbriefIntro}
                          detailsContainerCss="col-lg-10 offset-lg-1 text-center"
                          introTitleCss=""
                          introSubTitleCss=""
                          introDecTitleCss=""
                          linkLabel="Read More"
                          linkCss="btn btn-outline"
                          moreLink=""
                          anchorContainer=""
                          anchersvgColor=""
                        />
                      </div>
                    </div>
                  </div>

                  {componentEdit.projectbriefIntro && (
                    <div className={`adminEditTestmonial selected `}>
                      <BriefIntroAdmin
                        editHandler={editHandler}
                        componentType="projectbriefIntro"
                        popupTitle="Projects Brief"
                        pageType={`${pageType}projectbriefIntro`}
                      />
                    </div>
                  )}
                </>
                <HomeProjects />
              </>
            )}
          </div>
        </div>
        {/* ==== PROJECT END ===================================================================================================== */}

        {/* ICONS ALL SERVICES ============================ */}
        <div
          className={
            showHideCompList?.homedynamciservicesbrief?.visibility && isAdmin && hasPermission
              ? "border border-info mb-2"
              : ""
          }
        >
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.homedynamciservicesbrief?.visibility}
              title={"Dynamci Services Brief"}
              componentName={"homedynamciservicesbrief"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.homedynamciservicesbrief?.id}
            />
          )}
          {showHideCompList?.homedynamciservicesbrief?.visibility && (
            <HomeDynamicServiceStylesComponent>
              <div className="homeDynamciServicesIntro">
                <div className="container">
                  <div className="breiftopMargin">
                    {isAdmin && hasPermission && (
                      <EditIcon
                        editHandler={() => editHandler("homeDynamciServicesBrief", true)}
                        editlabel={"Services"}
                      />
                    )}

                    <BriefIntroFrontend
                      introState={componentEdit.homeDynamciServicesBrief}
                      linkCss="btn btn-outline d-flex justify-content-center align-items-center gap-3"
                      linkLabel="Read More"
                      moreLink=""
                      introTitleCss="mb-2"
                      introSubTitleCss="subTitle"
                      introDecTitleCss="fs-6 fw-normal mx-4 text-center"
                      detailsContainerCss="col-md-12"
                      anchorContainer="d-flex justify-content-center align-items-center mt-4"
                      anchersvgColor="#17427C"
                      pageType={"homeDynamciServicesBrief"}
                      maxHeight="300"
                    />

                    {componentEdit.homeDynamciServicesBrief && (
                      <div className={`adminEditTestmonial selected `}>
                        <BriefIntroAdmin
                          editHandler={editHandler}
                          componentType="homeDynamciServicesBrief"
                          popupTitle="Brief Intro Banner"
                          pageType="homeDynamciServicesBrief"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="container homeDynamciServices">
                  <div className="row">
                    <HomeServices />
                    {/* {homeServices.map((service, i) => (
                      <div className="col-sm-6 col-md-4" key={i}>
                        <HomeDynamicServices
                          key={i}
                          editHandler={editHandler}
                          objectstatus={componentEdit[`homeService${i}`]}
                          pageType={`homeService${i}`}
                        />
                      </div>
                    ))} */}
                  </div>
                  <div className="text-center text-md-end">
                    <Ancher
                      AncherLabel="View All"
                      Ancherpath="/all-serivces"
                      AncherClass="mt-4 d-block"
                      AnchersvgColor="#ffffff"
                    />
                  </div>
                </div>
              </div>
            </HomeDynamicServiceStylesComponent>
          )}
        </div>
        {/* END OF ICONS ALL SERVICES */}

        {/* ICONS HEILIGHT START ================================= */}
        <div
          className={
            showHideCompList?.iconshelightsbrief?.visibility && isAdmin && hasPermission
              ? "border border-info mb-2"
              : ""
          }
        >
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.iconshelightsbrief?.visibility}
              title={"Icons Brief"}
              componentName={"iconshelightsbrief"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.iconshelightsbrief?.id}
            />
          )}
          {showHideCompList?.iconshelightsbrief?.visibility && (
            <div className="homeBriefheilights">
              <div className="container">
                <div className="row">
                  <div className="breiftopMargin">
                    {isAdmin && hasPermission && (
                      <EditIcon
                        editHandler={() => editHandler("iconsHelightsBrief", true)}
                        editlabel={"Hilights"}
                      />
                    )}

                    <BriefIntroFrontend
                      introState={componentEdit.iconsHelightsBrief}
                      linkCss="btn btn-outline d-flex justify-content-center align-items-center gap-3"
                      linkLabel="Read More"
                      moreLink=""
                      introTitleCss="fs-3 fw-bold text-center mb-3"
                      introSubTitleCss="subTitle text-center"
                      introDecTitleCss="fs-6 fw-normal mx-4 text-center lh-6"
                      detailsContainerCss="col-md-10 offset-md-1 py-3"
                      anchorContainer="d-flex justify-content-center align-items-center mt-4"
                      anchersvgColor="#17427C"
                      pageType={"iconsHelightsBrief"}
                    />

                    {componentEdit.iconsHelightsBrief && (
                      <div className={`adminEditTestmonial selected `}>
                        <BriefIntroAdmin
                          editHandler={editHandler}
                          componentType="iconsHelightsBrief"
                          popupTitle="Brief Intro Banner"
                          pageType="iconsHelightsBrief"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* END  ========================= */}

        {/* ==== HOME PROJECT CAROUSEL - START ===================================================================================================== */}
        <div
          className={
            showHideCompList?.homeprojectcarousel?.visibility && isAdmin && hasPermission
              ? "border border-info mb-2"
              : ""
          }
        >
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.homeprojectcarousel?.visibility}
              title={"Home Project Carousel"}
              componentName={"homeprojectcarousel"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.homeprojectcarousel?.id}
            />
          )}
          {showHideCompList?.homeprojectcarousel?.visibility && (
            <HomeProjectCauroselComponentStyles>
              <HomeProjectCarousel />
            </HomeProjectCauroselComponentStyles>
          )}
        </div>

        {/* END ============================== */}

        {/* === CLIENTS - COMPONENTS DEVELOPER IN SAP DESIGNS START ===========================================================================  */}
        <div
          className={
            showHideCompList?.homeclient?.visibility && isAdmin && hasPermission
              ? "border border-info mb-2"
              : ""
          }
        >
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.homeclient?.visibility}
              title={"Home Client"}
              componentName={"homeclient"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.homeclient?.id}
            />
          )}
          {showHideCompList?.homeclient?.visibility && (
            <HomeClientsStyled>
              <HomeClientList clientsList={clientsList} />
            </HomeClientsStyled>
          )}
        </div>

        {/* === CLIENTS - COMPONENTS DEVELOPER IN SAP DESIGNS END ===========================================================================  */}

        {/* BANNER COMPONENT START =========================================================================================================== */}
        {/* <div
          className={
            showHideCompList?.banner?.visibility && isAdmin && hasPermission
              ? "border border-info mb-2"
              : ""
          }
        >
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.banner?.visibility}
              title={"Only Banner"}
              componentName={"banner"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.banner?.id}
            />
          )}

          {showHideCompList?.banner?.visibility && (
            <div className="container">
              <div className="row">
                <div className="col-md-12 p-0 position-relative homePage">
                  {isAdmin && hasPermission && (
                    <EditIcon
                      editHandler={() => editHandler("banner", true)}
                      editlabel={"Hero Banner"}
                    />
                  )}
                  <Banner
                    getBannerAPIURL={`banner/clientBannerIntro/${pageType}-banner/`}
                    bannerState={componentEdit.banner}
                  />
                </div>
              </div>
              {componentEdit.banner && (
                <div className="adminEditTestmonial selected">
                  <ImageInputsForm
                    editHandler={editHandler}
                    componentType="banner"
                    pageType={`${pageType}-banner`}
                    imageLabel="Banner Image"
                    showDescription={false}
                    showExtraFormFields={getFormDynamicFields(`${pageType}-banner`)}
                    dimensions={imageDimensionsJson("banner")}
                  />
                </div>
              )}
            </div>
          )}
        </div> */}
        {/* BANNER COMPONENT END =========================================================================================================== */}

        {/* COUNTER COMPONENT START =========================================================================================================== */}
        <div
          className={
            showHideCompList?.counterlist?.visibility && isAdmin && hasPermission
              ? "border border-info mb-2"
              : ""
          }
        >
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.counterlist?.visibility}
              title={"Counter Component"}
              componentName={"counterlist"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.counterlist?.id}
            />
          )}

          {showHideCompList?.counterlist?.visibility && (
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 p-0 ">
                  {isAdmin && hasPermission && (
                    <EditIcon
                      editHandler={() => editHandler("counterlist", true)}
                      editlabel={"Counter"}
                    />
                  )}
                  <CounterComponentStyles>
                    <CounterCompnentView
                      getDataAPIURL={`counter/getClientCounterSet/`}
                      componentState={componentEdit.counterlist}
                    />
                  </CounterComponentStyles>
                </div>
              </div>
              {componentEdit.counterlist && (
                <div className="adminEditTestmonial selected">
                  <CounterForm
                    editHandler={editHandler}
                    componentType={"counterlist"}
                    componentTitle="Counter component"
                    formPostURL={`/counter/create/`}
                    formUpdateURL={`/counter/updateCounterlist/`}
                    getDataAPIURL={`/counter/getClientCounterSet/`}
                    componentState={componentEdit.counterlist}
                  />
                </div>
              )}
            </div>
          )}
        </div>
        {/* === END COUNTER =========================================================================================================== */}

        {/* ==== INDUSTRIES WE SERVE - START ======================================================================================================= */}
        <div
          className={
            showHideCompList?.industriesweserve?.visibility && isAdmin && hasPermission
              ? "border border-info mb-2"
              : ""
          }
        >
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.industriesweserve?.visibility}
              title={"Industries We Serve"}
              componentName={"industriesweserve"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.industriesweserve?.id}
            />
          )}
          {showHideCompList?.industriesweserve?.visibility && (
            <>
              <div className="container pt-5">
                <div className="breiftopMargin">
                  {isAdmin && hasPermission && (
                    <EditIcon
                      editHandler={() => editHandler("industriesweserveBrief", true)}
                      editlabel={"Industries Brief"}
                    />
                  )}

                  <BriefIntroFrontend
                    introState={componentEdit.industriesweserveBrief}
                    linkCss="btn btn-outline d-flex justify-content-center align-items-center gap-3"
                    linkLabel="Read More"
                    moreLink=""
                    introTitleCss="mb-0 text-center fw-medium"
                    introSubTitleCss="fw-medium text-muted text-center"
                    introDecTitleCss="fs-6 fw-normal mx-4 text-center"
                    detailsContainerCss="col-md-12"
                    anchorContainer="d-flex justify-content-center align-items-center mt-4"
                    anchersvgColor="#17427C"
                    pageType={"industriesweserveBrief"}
                    maxHeight="300"
                  />

                  {componentEdit.industriesweserveBrief && (
                    <div className={`adminEditTestmonial selected `}>
                      <BriefIntroAdmin
                        editHandler={editHandler}
                        componentType="industriesweserveBrief"
                        popupTitle="Brief Intro Banner"
                        pageType="industriesweserveBrief"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12 p-0 carousel">
                    {isAdmin && hasPermission && (
                      <EditIcon
                        editHandler={() => editHandler("industriesweserve", true)}
                        editlabel={"Industries"}
                      />
                    )}

                    {/* <Carousel
                      carouselState={componentEdit.industriesweserve}
                      category={"industriesweserve"}
                      containerId="industriesweserve-carousel"
                    /> */}
                    <ImageGalleryStyled>
                      <div className="container-fluid">
                        <div className="row ">
                          <div className="col-md-10 offset-md-1 homeGalleryCarousel">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-12">
                                  <Carousel
                                    carouselState={componentEdit.industriesweserve}
                                    category={"industriesweserve"}
                                    containerId="industriesweserve-carousel"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ImageGalleryStyled>

                    {/* <WeServedStyled>
                      
                      <WeServeCarousel
                        carouselState={componentEdit.industriesweserve}
                        category={"industriesweserve"}
                        containerId="industriesweserve-carousel"
                      />
                    </WeServedStyled> */}
                  </div>
                </div>
              </div>

              {componentEdit.industriesweserve && (
                <div className={`adminEditTestmonial selected `}>
                  <AdminBanner
                    editHandler={editHandler}
                    componentType="industriesweserve"
                    popupTitle="Industries We Serve"
                    getImageListURL="carousel/createCarousel/industriesweserve/"
                    deleteImageURL="carousel/updateCarousel/"
                    imagePostURL="carousel/createCarousel/industriesweserve/"
                    imageUpdateURL="carousel/updateCarousel/"
                    imageIndexURL="carousel/updateCarouselindex/"
                    imageLabel="industries we serve"
                    showDescription={false}
                    showExtraFormFields={getCarouselFields("industriesweserve")}
                    dimensions={imageDimensionsJson("carousel")}
                  />
                </div>
              )}
            </>
          )}
        </div>
        {/* ==== CAROUSEL COMPONENT END ========================================================================================================= */}

        {/* ==== TESTIMONIAL COMPONENT START ====================================================================================================*/}
        <div
          className={
            showHideCompList?.testimonis?.visibility && isAdmin && hasPermission
              ? "border border-info mb-2"
              : ""
          }
        >
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.testimonis?.visibility}
              title={"Testimonials"}
              componentName={"testimonis"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.testimonis?.id}
            />
          )}

          {showHideCompList?.testimonis?.visibility && (
            <TestimonialCarouselPageStyled>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <Title
                      title="Testimonials"
                      cssClass="fs-1 fw-bold text-center my-5 text-uppercase"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 testimonials text-center">
                    {isAdmin && hasPermission && (
                      <EditIcon
                        editHandler={() => editHandler("testmonial", true)}
                        editlabel={"Testimonials"}
                      />
                    )}

                    {testimonis.length < 1 ? (
                      (testimonis.length, "No Testimonials Found")
                    ) : testimonis.length === 1 ? (
                      <h4>Please add 2 or more testimonials.</h4>
                    ) : testimonis.length > 1 ? (
                      <Testimonials testimonis={testimonis} />
                    ) : (
                      ""
                    )}
                  </div>
                  {componentEdit.testmonial && (
                    <div className={`adminEditTestmonial selected `}>
                      <AdminBanner
                        editHandler={editHandler}
                        componentType="testmonial"
                        popupTitle={`Testmonial Banner`}
                        getImageListURL="testimonials/clientTestimonials/"
                        deleteImageURL="testimonials/updateTestimonials/"
                        imagePostURL="testimonials/createTestimonials/"
                        imageUpdateURL="testimonials/updateTestimonials/"
                        imageIndexURL="testimonials/updateTestimonialsindex/"
                        imageLabel="Add your Image"
                        titleTitle="Testmonial Name"
                        descriptionTitle="Testimonial Writeup "
                        showDescription={false}
                        showExtraFormFields={getTestimonialsFields("testmonial")}
                        dimensions={imageDimensionsJson("testimonial")}
                      />
                    </div>
                  )}
                </div>
              </div>
            </TestimonialCarouselPageStyled>
          )}
        </div>
        {/* END OF TESTIMONIAL COMPONENT =========================================================================================================== */}

        {/* HOME NEWS START =================================================================================================*/}
        <div
          className={
            showHideCompList?.news?.visibility && isAdmin && hasPermission
              ? "border border-info mb-2"
              : ""
          }
        >
          {isAdmin && hasPermission && (
            <ShowHideToggle
              showhideStatus={showHideCompList?.news?.visibility}
              title={"News"}
              componentName={"news"}
              showHideHandler={showHideHandler}
              id={showHideCompList?.news?.id}
            />
          )}
          <div className="container">
            {showHideCompList?.news?.visibility && (
              <div className="row pb-2 homeNews">
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                  <div className="container">
                    <Title
                      title="News"
                      cssClass="fs-1 fw-bold text-center my-5 pt-0 pt-md-0 text-uppercase"
                    />
                    <HomeNews news={news} setNews={setResponseData} pagetype={pageType} />

                    <div className="d-flex justify-content-center align-items-center mt-md-4">
                      {/* <Ancher
                  AncherLabel="Read more"
                  Ancherpath="/news"
                  AncherClass="btn btn-primary d-flex justify-content-center align-items-center "
                  AnchersvgColor="#17427C"
                />
                <Ancher
                  AncherLabel="Read more"
                  Ancherpath="/news"
                  AncherClass="btn btn-secondary d-flex justify-content-center align-items-center "
                  AnchersvgColor="#17427C"
                /> */}

                      <Ancher
                        AncherLabel="More Articles"
                        Ancherpath="/news"
                        AncherClass="btn btn-outline d-flex justify-content-center align-items-center "
                        AnchersvgColor="#17427C"
                      />

                      {/* <Ancher
                  AncherLabel="Read more"
                  Ancherpath="/news"
                  AncherClass="btn moreLink d-flex justify-content-center align-items-center "
                  AnchersvgColor="#17427C"
                /> */}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* END OF HOME NEWS START =================================================================================================*/}

        {/* {showEditPop && <ModelBg />} */}

        {show && <ModelBg />}
      </div>
    </>
  );
};

export default Home;
