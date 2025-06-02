import{p as N,e as I,r as n,a as L,b as E,n as $,j as e,k as p,L as B,T as f,g as _,M as k,c as F,d as U}from"./index-BWK7iHxT.js";import{l as D}from"./DeleteDialog-DnRfuXBp.js";import{B as P,a as R}from"./index-CRPkYSRC.js";import{B as H}from"./index-Zr8zxzfx.js";import{D as M}from"./DeleteDialog-sO22D6fc.js";import{N as z}from"./index-C4YU0TO1.js";import{I as G}from"./ImgTitleIntoForm-bGCGObUS.js";import{i as S,c as J,d as O}from"./dynamicFormFields-JEId_5aT.js";import"./Styled-BriefIntro-DpTy6njT.js";import"./Ancher-Cr_S9HGk.js";import"./SkeletonImage-DKfKqy0G.js";import"./Styled-PageBanner-gSpUsEd9.js";import"./FileUpload-BBAUjrX2.js";import"./Error-B_8W099F.js";const q=N.div`
  .title {
    color: ${({theme:s})=>s.aboutPageTitleColor};
  }
  .aboutPage {
    .row {
      border-bottom: 2px solid ${({theme:s})=>s.white};

      &:last-child {
        border-bottom: 0 !important;
      }
    }
    
      
    }
    
    .leftColumn {
      background-color: ${({theme:s})=>s.transparent};
    }
    .rightColumn {
      background-color: ${({theme:s})=>s.transparent};

      img {
        position: relative;
        transition: opacity 0.5s ease, transform 0.5s ease, border-radius 0.5s ease;
        border-radius: 2%;
        
      
        &:hover {
          &::before {
            content: 'Leon Phrama';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-shadow: inset 0 0 30px 10px rgba(255, 255, 255, 0.5); /* Adjust the shadow color and size as needed */
            border-radius: inherit;
          }
      
          transform: scale(1.1) rotate(-0deg);
          border-radius: 5%; /* Change the border-radius to 50% for a circle */
        }
      }

      
      
      
    }

    ul {
      padding: 0;
      margin: 25px 0;
      list-style: none;

      li {
        border-bottom: 1px solid ${({theme:s})=>s.lightgray};
        padding: 10px;
        // background-color: ${({theme:s})=>s.verylightgray};
      }

      li:first-child {
        // border-top-left-radius: 5px;
        // border-top-right-radius: 5px;
      }

      li:last-child {
        border: 0;
        // border-bottom-left-radius: 5px;
        // border-bottom-right-radius: 5px;
      }
    }

    hr:last-child {
      display: none;
    }

    .normalCSS,
      .flipCSS {
      }
      
      .flipCSS {
        flex-direction: row-reverse;
      }
  }
`,re=()=>{const s={banner:!1,briefIntro:!1,addSection:!1,editSection:!1},l="aboutus",{isAdmin:d,hasPermission:c}=I(),[o,C]=n.useState(s),[m,x]=n.useState([]),[g,y]=n.useState(!1),[w,u]=n.useState({});n.useEffect(()=>{window.scrollTo(0,0)},[]),n.useEffect(()=>{L()},[]),n.useEffect(()=>{h()},[]);const r=(t,a,i)=>{C(b=>({...b,[t]:a})),y(!g),i!=null&&i.id?u(i):u({}),document.body.style.overflow="hidden"},h=async t=>{try{let a=await E.get("aboutus/clientAboutus/"),i=$(a.data.aboutus);x(i)}catch{console.log("Unable to get the intro")}};n.useEffect(()=>{!o.editSection&&!o.addSection&&(h(),u({}))},[o.editSection,o.addSection]);const v=t=>{const a=t.id,i=t.aboutus_title,b=async()=>{if((await F.delete(`/aboutus/updateAboutus/${a}/`)).status===204){const A=m.filter(T=>T.id!==a);x(A),U.success(`${i} is deleted`)}};D.confirmAlert({customUI:({onClose:j})=>e.jsx(M,{onClose:j,callback:b,message:`deleting the ${i} Service?`})})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"position-relative",children:[d&&c&&e.jsx(p,{editHandler:()=>r("banner",!0)}),e.jsx(H,{getBannerAPIURL:`banner/clientBannerIntro/${l}-banner/`,bannerState:o.banner})]}),o.banner&&e.jsx("div",{className:"adminEditTestmonial selected ",children:e.jsx(G,{editHandler:r,componentType:"banner",popupTitle:"About Banner",pageType:`${l}-banner`,imageLabel:"Banner Image",showDescription:!1,showExtraFormFields:J(`${l}-banner`),dimensions:S("banner")})}),d&&c&&e.jsx(p,{editHandler:()=>r("briefIntro",!0)}),e.jsx(P,{introState:o.briefIntro,linkCss:"btn btn-outline d-flex justify-content-center align-items-center gap-3",linkLabel:"Read More",moreLink:"",introTitleCss:"fs-3 fw-medium text-md-center",introSubTitleCss:"fw-medium text-muted text-md-center",introDecTitleCss:"fs-6 fw-normal w-75 m-auto text-md-center",detailsContainerCss:"col-md-10 offset-md-1 py-3",anchorContainer:"d-flex justify-content-center align-items-center mt-4",anchersvgColor:"#17427C",pageType:l}),o.briefIntro&&e.jsx("div",{className:"adminEditTestmonial selected ",children:e.jsx(R,{editHandler:r,componentType:"briefIntro",popupTitle:"About Brief Intro",pageType:l})}),e.jsx(q,{children:e.jsxs("div",{className:"container-fluid container-lg my-md-5 ",children:[e.jsx("div",{className:"row my-3 d-flex align-items-center",children:d&&c&&e.jsxs("div",{className:"col-12 text-end",children:[e.jsx("span",{className:"d-inline-block me-2",children:"Add content"}),e.jsx("button",{type:"submit",className:"btn btn-primary ",onClick:()=>r("addSection",!0),children:e.jsx("i",{className:"fa fa-plus","aria-hidden":"true"})})]})}),o.editSection||o.addSection?e.jsx("div",{className:"adminEditTestmonial selected ",children:e.jsx(z,{editHandler:r,category:"about",popupTitle:"About",editCarousel:w,setEditCarousel:u,componentType:`${o.editSection?"editSection":"addSection"}`,imageGetURL:"aboutus/clientAboutus/",imagePostURL:"aboutus/createAboutus/",imageUpdateURL:"aboutus/updateAboutus/",imageDeleteURL:"aboutus/updateAboutus/",imageLabel:"Add About us Banner",showDescription:!1,showExtraFormFields:O(),dimensions:S("aboutus")})}):"",e.jsx("div",{className:"aboutPage",children:m.length>0?m.map((t,a)=>e.jsxs("div",{className:`row ${d?"border border-warning mb-3 position-relative":""} ${a%2===0?"normalCSS":"flipCSS"}`,children:[d&&c&&e.jsxs(e.Fragment,{children:[e.jsx(p,{editHandler:()=>r("editSection",!0,t)}),e.jsx(B,{className:"deleteSection",onClick:()=>v(t),children:e.jsx("i",{className:"fa fa-trash-o text-danger fs-4","aria-hidden":"true"})})]}),e.jsxs("div",{className:"col-12 col-lg-7 p-4 p-md-4 py-md-4 d-flex justify-content-center align-items-start flex-column leftColumn",children:[t.aboutus_title?e.jsx(f,{title:t.aboutus_title,cssClass:"",mainTitleClassess:"fs-2 mb-2 fw-medium title",subTitleClassess:""}):"",t.aboutus_sub_title?e.jsx(f,{title:t.aboutus_sub_title,cssClass:"",mainTitleClassess:"fs-5 text-secondary mb-2",subTitleClassess:""}):"",t.aboutus_sub_title?e.jsx(f,{title:t.aboutus_sub_title,cssClass:"",mainTitleClassess:"fs-5 text-secondary mb-2",subTitleClassess:""}):"",e.jsx("div",{dangerouslySetInnerHTML:{__html:t.aboutus_description}})]}),e.jsx("div",{className:"col-lg-5 p-1 p-lg-5 pe-lg-0 d-flex justify-content-center align-items-start flex-column rightColumn",children:e.jsx("img",{src:_(t.path),alt:"",className:"w-75 h-75 object-fit-cover shadow m-auto"})})]},t.id)):e.jsx("p",{className:"text-center text-muted py-5",children:"Please add page contents..."})})]})}),g&&e.jsx(k,{})]})};export{re as default};
