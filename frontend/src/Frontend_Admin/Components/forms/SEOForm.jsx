import React, { useEffect, useState } from "react";
import { InputFields, RichTextInputEditor_V2 } from "./FormFields";

import Information from "../../../Common/info";

function SEOForm({ Controller, control, register, onChangeHanlder }) {
  const fields = {
    seo_title: false,
    seo_keywords: false,
    seo_description: false,
  };

  const [seoErrors, setSEOErrors] = useState(fields);

  const onKeyDownHandler = (e, maxLen) => {
    const input = e.target;
    if (input.value.length >= maxLen) {
      setSEOErrors((prevFormData) => ({ ...prevFormData, [input.name]: true }));
    } else {
      setSEOErrors((prevFormData) => ({ ...prevFormData, [input.name]: false }));
    }
  };

  return (
    <>
      <InputFields
        key={2}
        label={"Title"}
        type={"text"}
        fieldName={"seo_title"}
        register={register}
        onChange={onChangeHanlder}
        maxLength={60}
        onKeyDown={(e) => onKeyDownHandler(e, 50)}
      />
      <Information
        info="Meta title tags should be between 50 to 60 characters long"
        cssClass={`${seoErrors?.seo_title ? "error" : "text-secondary"}`}
      />
      <InputFields key={3} label={"Link"} type={"text"} fieldName={"seo_link"} register={register} onChange={onChangeHanlder} />

      <InputFields key={4} label={"Author"} type={"text"} fieldName={"seo_author"} register={register} onChange={onChangeHanlder} />

      <InputFields
        key={5}
        label={"Keywords"}
        type={"textarea"}
        fieldName={"seo_keywords"}
        register={register}
        onChange={onChangeHanlder}
        maxLength={500}
        onKeyDown={(e) => onKeyDownHandler(e, 400)}
      />
      <Information
        info="Meta title tags should be between 400 to 500 characters long"
        cssClass={`${seoErrors?.seo_keywords ? "error" : "text-secondary"}`}
      />
      <InputFields
        key={6}
        label={"Description"}
        type={"textarea"}
        fieldName={"seo_description"}
        register={register}
        onChange={onChangeHanlder}
        maxLength={5000}
        onKeyDown={(e) => onKeyDownHandler(e, 900)}
      />
      <Information
        info="Meta title tags should be between 900 to 1000 characters long"
        cssClass={`${seoErrors?.seo_description ? "error" : "text-secondary"}`}
      />
    </>
  );
}

export default SEOForm;
