import _ from "lodash";
import { getCookie } from "./cookieUtil";
import { axiosServiceApi } from "./axiosUtil";

export const getSelectedMenuDetails = async (
  menuList,
  location,
  serviceResponse,
  isEdit,
  oldTitle
) => {
  const _userName = getCookie("userName");
  const _getSelectedParentObject = getParentMenuByURL(
    menuList,
    location.pathname
  );
  if (!_getSelectedParentObject) return;
  let data = {
    is_Admin_menu: true,
    is_Client_menu: true,
    is_Maintainer_menu: true,
    is_Parent: false,
    page_isActive: true,
    page_label: serviceResponse.services_page_title,
    page_parent_ID: _getSelectedParentObject?.id,
    page_url: serviceResponse.page_url,
  };

  if (isEdit) {
    const _getSelectedChildMenu = getMenuParent(
      _getSelectedParentObject?.childMenu,
      oldTitle
    );
    data["updated_by"] = _userName;
    data["id"] = _getSelectedChildMenu.id;
    data["page_position"] = _getSelectedChildMenu.page_position;
    data["page_url"] = _getSelectedChildMenu.page_url;
  } else {
    data["service_menu_ID"] = serviceResponse.id;
    data["created_by"] = _userName;
    data["page_position"] = getMenuPosition(_getSelectedParentObject);
  }
  let _response = await updatedMenu(data);
  return _response;
};

export const updatedMenu = async (data) => {
  const _body = JSON.stringify(data);
  let response = "";
  if (data?.id) {
    response = await axiosServiceApi.patch(
      `/pageMenu/updatePageMenu/${data?.id}/`,
      _body
    );
  } else {
    response = await axiosServiceApi.post(`/pageMenu/createPageMenu/`, _body);
  }
  return response;
};

export const getMenuPosition = (ParentObject) => {
  return ParentObject?.childMenu?.length > 0
    ? parseInt(ParentObject.childMenu.length) + 1
    : parseInt(ParentObject.page_position) * 10 + 1;
};

export const getMenuParent = (menuList, labelName) => {
  return _.filter(menuList, (item) => {
    return labelName?.toLowerCase().match(item?.page_label?.toLowerCase());
  })[0];
};

export const getParentMenuByURL = (menuList, labelName) => {
  return _.filter(menuList, (item) => {
    return labelName?.toLowerCase().match(item?.page_url?.toLowerCase());
  })[0];
};

export const createServiceChildFromMenu = async (
  selectedServiceMenu,
  menuData
) => {
  let response = "";
  let data = {
    services_page_title: menuData.page_label,
    created_by: getCookie("userName"),
    pageType: "MenuForm",
    publish: false,
    menu_ID: menuData.id,
    page_url: menuData.page_url,
  };

  if (selectedServiceMenu?.id) {
    data["id"] = selectedServiceMenu.id;
    data["updated_by"] = getCookie("userName");
    data["publish"] = selectedServiceMenu?.publish ? true : false;
    response = await axiosServiceApi.put(
      `/services/updateService/${selectedServiceMenu.id}/`,
      data
    );
  } else {
    response = await axiosServiceApi.post(`/services/createService/`, data);
  }
  return response;
};

export const deleteServiceItem = async (id) => {
  try {
    const response = await axiosServiceApi.delete(
      `/pageMenu/updatePageMenu/${id}/`
    );
    return response;
  } catch (error) {
    console.log("unable to delete the service");
  }
};

export const deleteServiceMenu = async (id) => {
  try {
    const response = await axiosServiceApi.delete(
      `/services/updateService/${id}/`
    );
    return response;
  } catch (error) {
    console.log("unable to delete the service");
  }
};

export const getServiceMenuItem = (serviceMenu, item) => {
  return _.filter(serviceMenu, (menu) => {
    return (
      menu?.services_page_title?.toLowerCase() ===
      item?.page_label.toLowerCase()
    );
  })[0];
};
