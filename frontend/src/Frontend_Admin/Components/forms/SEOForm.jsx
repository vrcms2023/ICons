import React, { useEffect, useState } from "react";
import { InputFields, RichTextInputEditor_V2 } from "./FormFields";
import Alert from "../../../Common/Alert";

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
        onKeyDown={(e) => onKeyDownHandler(e, 50)}
      />
      {seoErrors?.seo_title && <Alert mesg={"max lenngth 50"} cssClass={`alert alert-danger mx-auto p-2`} />}

      <InputFields
        key={5}
        label={"Keywords"}
        type={"textarea"}
        fieldName={"seo_keywords"}
        register={register}
        onChange={onChangeHanlder}
        onKeyDown={(e) => onKeyDownHandler(e, 100)}
      />
      {seoErrors?.seo_keywords && <Alert mesg={"max lenngth 100"} cssClass={`alert alert-danger mx-auto p-2`} />}
      <InputFields
        key={6}
        label={"Description"}
        type={"textarea"}
        fieldName={"seo_description"}
        register={register}
        onChange={onChangeHanlder}
        maxLength={500}
        onKeyDown={(e) => onKeyDownHandler(e, 500)}
      />
      {seoErrors?.seo_description && <Alert mesg={"max lenngth 500"} cssClass={`alert alert-danger mx-auto p-2`} />}
    </>
  );
}

export default SEOForm;
