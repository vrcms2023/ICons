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

      <InputFields key={2} label={"Title"} type={"text"} fieldName={"seo_title"} register={register} onChange={onChangeHanlder} />
      <Information info="Meta title tags should be between 50 to 60 characters long" cssClass="text-secondary" />
      <InputFields key={3} label={"Link"} type={"text"} fieldName={"seo_link"} register={register} onChange={onChangeHanlder} />
      <InputFields key={4} label={"Author"} type={"text"} fieldName={"seo_author"} register={register} onChange={onChangeHanlder} />
      {/* <RichTextInputEditor_V2
        Controller={Controller}
        control={control}

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

        name={"seo_description"}
      /> */}
      <InputFields key={5} label={"Keywords"} type={"textarea"} fieldName={"seo_keywords"} register={register} onChange={onChangeHanlder} />
      <InputFields key={6} label={"Description"} type={"textarea"} fieldName={"seo_description"} register={register} onChange={onChangeHanlder} />
      <Information info="Meta description character limit between 150-160" cssClass="text-secondary" />

    </>
  );
}

export default SEOForm;
