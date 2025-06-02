import{p as a,j as e,B as o}from"./index-BWK7iHxT.js";const s=a.div`
  .jobTitle {
    color: ${({theme:l})=>l.secondaryColor};
  }

  .title {
    color: ${({theme:l})=>l.pageTitleColor};
  }

  .jobPost {
    border: 2px solid ${({theme:l})=>l.white};
    background-color: ${({theme:l})=>l.primaryColor};
    border-bottom: 4px solid ${({theme:l})=>l.secondaryColor};

    &:hover {
      border-bottom: 4px solid ${({theme:l})=>l.teritoryColor};
    }

    .fa-map-marker {
      color: ${({theme:l})=>l.secondaryColor};
    }

    .fa-expand {
      font-size: 1.2rem;
    }
  }

  .currentOpenings {
    max-height: 300px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }
    
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(225,242,253,0.3); 
        border-radius: 3px;
    }
    
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(232,252,187,0.5); 
    }

    .title {
      color: ${({theme:l})=>l.primaryColor};
      border-bottom: 1px solid ${({theme:l})=>l.white};
      text-align: center;
    }

    background: ${({theme:l})=>l.secondaryColor};
    border: 1px solid ${({theme:l})=>l.white};

    ul {
      list-style: none;

      li a {
        color: ${({theme:l})=>l.primaryColor};
        font-size: 1rem;
        text-decoration: underline;
        display: inline-block;
        padding: 5px 0;

        &:hover {
          color: ${({theme:l})=>l.secondaryColor};
        }
      }
    }
  }

  .adminEditTestmonial select.form-control {
    width: 150px !important;
  }

  .jobBriefDetails {
    background: linear-gradient(90deg, rgba(225,242,253,1) 0%, ${({theme:l})=>l.white} 50%, rgba(225,242,253,1) 100%);
    // background-color: rgba(255,255,255, .3);
    // border: 1px solid ${({theme:l})=>l.secondaryColor};
  }

  .jobDescription {
    background-color: ${({theme:l})=>l.primaryColor};
    // border: 1px solid ${({theme:l})=>l.white};

    ul {
      margin-left: 25px;

      li {
        padding: 5px 0;
        list-style: none !important;

        &::before {
          content: "*";
          color: ${({theme:l})=>l.secondaryColor};
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }
      }
    }
  }
`,i=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12 py-3",children:e.jsx("i",{children:"707 + Open Positions Globally"})})}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-5 mb-3 mb-md-0",children:e.jsx("input",{className:"form-control",type:"text",placeholder:"Search by Skills or Job title","aria-label":".form-control-lg example"})}),e.jsx("div",{className:"col-md-3 mb-3 mb-md-0",children:e.jsxs("select",{className:"form-select","aria-label":"Default select example",children:[e.jsx("option",{value:"",children:"Select Experience "}),e.jsx("option",{value:"0-1 years",children:"0-1 years"}),e.jsx("option",{value:"1-3 years",children:"1-3 years"}),e.jsx("option",{value:"3-5 years",children:"3-5 years"}),e.jsx("option",{value:"5-10 years",children:"5-10 years"}),e.jsx("option",{value:"10-15 years",children:"10-15 years"}),e.jsx("option",{value:"15+ years",children:"15+ years"})]})}),e.jsx("div",{className:"col-md-3",children:e.jsxs("select",{className:"form-select","aria-label":"Default select example",children:[e.jsx("option",{value:"",children:"Select Location"}),e.jsx("option",{value:"bangalore",children:"   Bangalore"}),e.jsx("option",{value:"chennai",children:"   Chennai"}),e.jsx("option",{value:"gurgaon",children:"   Gurgaon"}),e.jsx("option",{value:"hyderabad",children:"   Hyderabad"}),e.jsx("option",{value:"nagpur",children:"   Nagpur"}),e.jsx("option",{value:"new-delhi",children:"   New Delhi"}),e.jsx("option",{value:"noida",children:"   Noida"}),e.jsx("option",{value:"pune",children:"   Pune"}),e.jsx("option",{value:"guadalajara",children:"   Guadalajara"}),e.jsx("option",{value:"mexico-city",children:"   Mexico City"})]})}),e.jsx("div",{className:"col-md-1 d-none d-md-block",children:e.jsx(o,{type:"button",label:"Find",cssClass:"btn btn-secondary"})})]}),e.jsxs("div",{className:"row py-4",children:[e.jsxs("div",{className:"col-6 col-md-2 d-flex justify-content-start align-items-center gap-2",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"}),e.jsx("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"Freelance"})]}),e.jsxs("div",{className:"col-6 col-md-2 d-flex justify-content-start align-items-center gap-2",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault",defaultChecked:!0}),e.jsx("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"Remove"})]}),e.jsxs("div",{className:"col-6 col-md-2 d-flex justify-content-start align-items-center gap-2",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"}),e.jsx("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"Hybrid"})]}),e.jsxs("div",{className:"col-6 col-md-6 d-flex justify-content-start align-items-center gap-2",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"}),e.jsx("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"On-Site/Office"})]})]}),e.jsx("div",{className:"row d-md-none",children:e.jsx("div",{className:"col-md-12",children:e.jsx(o,{type:"button",label:"Find",cssClass:"btn btn-secondary"})})})]}),t=a.div`
    // background: ${({theme:l})=>l.white}

    .careersFilter {
        background: ${({theme:l})=>l.white}
    }
`;export{t as C,i as a,s as b};
