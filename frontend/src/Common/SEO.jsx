import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { getClientProjects } from "../redux/project/clientProjectActions";
import { getCookie } from "../util/cookieUtil";
import { isPathExit } from "../util/ulrUtil";
import { useLocation, useParams } from "react-router-dom";

const SEO = () => {
  const { menuRawList } = useSelector((state) => state.auth);
  const { clientProjects } = useSelector((state) => state.clientProjects);
  const { products } = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  const pathname = window?.location?.pathname;
  const [seoObject, setSeoObject] = useState([]);
  const projectid = getCookie("projectid");
  const productID = getCookie("product");

  const pathlist = ["/project-details", "/products/"];
  const ispathExit = isPathExit(pathlist);

  useEffect(() => {
    if (menuRawList?.length > 0 && !ispathExit) {
      let seoMenu = _.filter(menuRawList, (item) => {
        return item?.page_url?.toLowerCase() === pathname.toLowerCase();
      })[0];
      if (seoMenu) {
        setSeoObject(seoMenu);
      }
    }
  }, [pathname, menuRawList]);

  useEffect(() => {
    if (clientProjects.length === 0) {
      dispatch(getClientProjects());
    }
  }, [dispatch, clientProjects]);

  useEffect(() => {
    if (clientProjects?.projectList?.length > 0) {
      const seoProject = _.filter(clientProjects?.projectList, (item) => {
        return item.id === projectid;
      })[0];
      setSeoObject(seoProject);
    }
  }, [clientProjects, projectid]);

  useEffect(() => {
    if (products?.results?.length > 0) {
      const seoProject = _.filter(products?.results, (item) => {
        return item.id === productID;
      })[0];
      setSeoObject(seoProject);
    }
  }, [products, productID]);

  return (
    <>
      <Helmet>
        <title>{seoObject?.seo_title ? seoObject?.seo_title : "ICONSENGG"}</title>
        <meta
          name="description"
          content={seoObject?.seo_description ? seoObject?.seo_description : "ICONSENGG"}
        />
        <meta name="link" content={seoObject?.seo_link ? seoObject?.seo_link : "ICONSENGG"} />
        <meta
          name="keywords"
          content={seoObject?.seo_keywords ? seoObject?.seo_keywords : "ICONSENGG"}
        />
        <meta name="author" content={seoObject?.seo_author ? seoObject?.seo_author : "ICONSENGG"} />
      </Helmet>
    </>
  );
};

export default SEO;
