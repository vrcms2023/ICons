import React, { useEffect, useState } from "react";
import { getCookie } from "../../../util/cookieUtil";
import EditAdminPopupHeader from "../EditAdminPopupHeader";
import FileUpload from "../FileUpload";

export const SingleImageUlploadWithForm = ({
  editHandler,
  componentType,
  componentTitle,
  extraFormParamas,
  showExtraFormFields,
  imageLabel = "Add Image",
  imagePostURL,
  imageGetURL,
  imageUpdateURL,
  imageDeleteURL,
  pageType,
  type,
  selectedItem,
  setSelectedItemState,
  showDescription = true,
  dimensions,
  scrollEnable,
  validTypes = "image/png,image/jpeg",
}) => {
  const projectID = "a62d7759-a e6b-4e49-a129-1ee208c6789d";
  const [userName, setUserName] = useState("");
  const [imgGallery, setImgGallery] = useState([]);
  const [saveState, setSaveState] = useState(false);
  const [project, setProject] = useState({ id: projectID });
  const closeHandler = () => {
    editHandler(componentType, false);
    document.body.style.overflow = "";
    setSelectedItemState("");
  };
  useEffect(() => {
    setUserName(getCookie("userName"));
  }, []);

  useEffect(() => {
    if (imgGallery.length > 0) {
      closeHandler();
    }
  }, [imgGallery]);

  return (
    <>
      <EditAdminPopupHeader
        closeHandler={closeHandler}
        title={componentTitle}
        type={type}
      />
      <hr className="m-0" />
      <div className="container my-3">
        <div className="row py-0 pb-md-5">
          <div className="col-md-12 mb-5 mb-md-0">
            <div className="container">
              <div className="">
                <FileUpload
                  title={imageLabel}
                  project={project}
                  updated_by={userName}
                  category={selectedItem}
                  gallerysetState={setImgGallery}
                  maxFiles={1}
                  galleryState={imgGallery}
                  validTypes={validTypes}
                  descriptionTitle="Caption"
                  titleTitle="Title"
                  alternitivetextTitle="SEO title"
                  saveState={setSaveState}
                  showDescription={showDescription}
                  buttonLable="Save"
                  editImage={selectedItem}
                  setEditCarousel={setSelectedItemState}
                  imagePostURL={imagePostURL}
                  imageUpdateURL={imageUpdateURL}
                  extraFormParamas={extraFormParamas}
                  showExtraFormFields={showExtraFormFields}
                  dimensions={dimensions}
                  closeHandler={closeHandler}
                  scrollEnable={scrollEnable}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleImageUlploadWithForm;
