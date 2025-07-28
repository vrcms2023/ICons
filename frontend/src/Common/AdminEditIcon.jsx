import React from "react";
import "./AdminEditIcon.css";
import { EditStyled } from "./StyledComponents/Styled-Edit-Component";

const EditIcon = ({
  editHandler,
  icon = "fa-pencil",
  iconCss = "cursor-pointer",
  cssClasses = "position-absolute ",
  editlabel,
}) => {
  return (
    // <span className={`${cssClasses} editIcon`}>
    //   <i
    //     className={`fa ${icon} ${iconCss}`}
    //     aria-hidden="true"
    //     onClick={editHandler}
    //   ></i>
    //   {editlabel && <span>{editlabel}</span>}
    // </span>

    <EditStyled>
      <span className={`${cssClasses} editIcon`}>
        {editlabel && <span className="componentType">{editlabel}</span>}
        <i
          className={`fa ${icon} ${iconCss}`}
          aria-hidden="true"
          onClick={editHandler}
        ></i>
      </span>
    </EditStyled>
  );
};

export default EditIcon;
