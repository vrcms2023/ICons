import{r,f as G,h as W,x as X,o as F,y as H,z as J,j as e,T as D,B as V,L as $,_ as Y,c as E,d as L,A as Z,C as O,p as ee,e as se,D as te,F as ae,a as ie,G as re,b as ne,H as ce,J as le,k as R,g as oe,M as de}from"./index-BWK7iHxT.js";import{l as q}from"./DeleteDialog-DnRfuXBp.js";import{I as me}from"./ImgTitleIntoForm-bGCGObUS.js";import{B as ue,a as pe}from"./index-CRPkYSRC.js";import{B as ge}from"./index-Zr8zxzfx.js";import{D as K}from"./DeleteDialog-sO22D6fc.js";import{E as fe}from"./Error-B_8W099F.js";import{g as ve}from"./menuUtil-BoWK6jXD.js";import{N as he}from"./index-C4YU0TO1.js";import{i as z,c as xe,e as be}from"./dynamicFormFields-JEId_5aT.js";import"./FileUpload-BBAUjrX2.js";import"./Styled-BriefIntro-DpTy6njT.js";import"./Ancher-Cr_S9HGk.js";import"./SkeletonImage-DKfKqy0G.js";import"./Styled-PageBanner-gSpUsEd9.js";const Se=({setSelectedServiceProject:o,selectedServiceProject:v,pageType:m})=>{const[l,n]=r.useState(""),[k,b]=r.useState(""),[y,s]=r.useState([]),[c,S]=r.useState(""),[j,T]=r.useState(""),C=r.useRef(!0),{serviceMenu:u,serviceerror:I}=G(t=>t.serviceMenu),{menuList:B}=G(t=>t.auth),w=W(),N=X(),p=t=>{b(""),n(t.target.value)},_=t=>{Z(t),o(t),window.scroll(0,700)};r.useEffect(()=>{T(F("userName"))},[]);async function A(t){if(l===""){b("Please Enter Service  name");return}let a="",d={services_page_title:l,created_by:j,pageType:m,publish:!!c.publish};try{if(c!=null&&c.id){const U=Y.cloneDeep(c);d.id=c.id,d.updated_by=j,a=await E.put(`/services/updateService/${c.id}/`,d),x(a.data.services,!0,c.services_page_title),n(""),S({})}else a=await E.post("/services/createService/",d),x(a.data.services,!1,"");(a==null?void 0:a.status)===201||(a==null?void 0:a.status)===200?(L.success(`${l} service is created `),n(""),w(H()),o(a.data.services)):b(a.data.message)}catch{b(`${l} is already register`),L.error(`${l} is already register`)}}r.useEffect(()=>{(u==null?void 0:u.length)===0&&C.current?(C.current=!1,w(H())):u&&s(u),(u==null?void 0:u.length)===0&&(J("pageLoadServiceID"),J("pageLoadServiceName"))},[u]);const h=async t=>{try{let a=await E.patch(`/services/publishService/${t.id}/`,{publish:!t.publish});if(a.status===200){let d=a.data.services;L.success(`Service ${d.publish?"published":"un published"} successfully`),o(a.data.services),w(H())}}catch{console.log("unable to publish the services")}},i=t=>{const a=t.id,d=t.services_page_title,U=async()=>{if((await E.delete(`services/updateService/${t.id}/`)).status===204){const P=y.filter(Q=>Q.id!==a);s(P),L.success(`${d} is deleted`)}};q.confirmAlert({customUI:({onClose:M})=>e.jsx(K,{onClose:M,callback:U,message:`deleting the ${d} Service?`})})},g=t=>{n(t.services_page_title),S(t)},f=()=>{n(""),S({})},x=async(t,a,d)=>{await ve(B,N,t,a,d),w(O())};return e.jsxs("div",{className:"pb-5 border border-1 border-secondary",children:[e.jsx(D,{title:"Create New Service Page",cssClass:"p-3 fs-6 text-dark"}),e.jsx("hr",{className:"m-0 mb-3"}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row",children:[k?e.jsx(fe,{children:k}):"",e.jsxs("div",{className:"col-md-12 pb-4 d-flex flex-column justify-content-center align-items-center text-center addPageForm",children:[e.jsx("input",{type:"text",className:"form-control py-2",name:"services_page_title",id:"",value:l,placeholder:"Add Service Name",onChange:p}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsx(V,{type:"submit",cssClass:"btn btn-secondary mt-3",handlerChange:A,label:c!=null&&c.id?"Change Name":"Save"}),c!=null&&c.id?e.jsx(V,{cssClass:"btn btn-primary mt-3",handlerChange:f,label:"Cancel"}):""]})]}),e.jsx("div",{className:"col-md-12 servicePageLinks",children:e.jsx("ul",{children:y&&y.map(t=>e.jsxs("li",{className:`d-flex justify-content-between p-2
              ${t.id===(v==null?void 0:v.id)?"border border-2 border-success rounded shadow-lg":""}`,children:[e.jsx("div",{className:"w-50",children:e.jsxs($,{onClick:a=>_(t),className:"fw-bold text-dark pageTitle",children:[t.services_page_title," "]})}),e.jsxs("div",{className:"w-50 text-end",children:[e.jsx($,{onClick:()=>h(t),className:`p-1 px-2 rounded ${t.publish?"bg-success text-white":"bg-secondary text-light"}`,title:t.publish?"Page Published":"Page Not Published",children:e.jsx("small",{children:t.publish?e.jsx("i",{className:"fa fa-thumbs-up fs-5","aria-hidden":"true"}):e.jsx("i",{className:"fa fa-thumbs-down","aria-hidden":"true"})})}),e.jsxs($,{onClick:()=>g(t),children:[" ",e.jsx("i",{className:"fa fa-pencil text-warning fs-4 mx-3","aria-hidden":"true"})]}),e.jsxs($,{onClick:()=>i(t),children:[" ",e.jsx("i",{className:"fa fa-trash-o text-danger fs-4","aria-hidden":"true"})]})]})]},t.id))})})]})})]})},we=ee.div`
    background-color: ${({theme:o})=>o.white};

    .services ul {
        margin: 40px 25px;

        li {
            padding: 15px;
          }
      }
      
      .services ul 
      
      .normalCSS,
      .flipCSS {
      }
      
      .flipCSS {
        flex-direction: row-reverse;
      }
      
      .servicesPage {
        ul {
            margin: 15px 10px;

            li {
                border-bottom: 1px solid color: ${({theme:o})=>o.lightgray};
                padding: 7px;
              }
        }

        img {
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }
      }
      
      
      
      .servicePageLinks {
        li {
            cursor: pointer;
          }

        .pageTitle {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            height: 20px;
          }
      }
      
      .addPageForm {
        // background-color: ${({theme:o})=>o.teritoryColor};
      }

      .servicePageLinks {
        background-color: ${({theme:o})=>o.white};
      }

      
`,Ue=()=>{const o={addSection:!1,editSection:!1,banner:!1,briefIntro:!1},v="services",{isAdmin:m,hasPermission:l}=se(),[n,k]=r.useState(o),[b,y]=r.useState(!1),[s,c]=r.useState({}),[S,j]=r.useState([]),[T,C]=r.useState(),[u,I]=r.useState({});let{uid:B}=te();const w=ae(),N=F("pageLoadServiceID"),p=F("pageLoadServiceName");r.useEffect(()=>{window.scrollTo(0,0)},[]),r.useEffect(()=>{const i=document.getElementById("ServicesnavbarDropdown");i&&i.classList.add("active")}),r.useEffect(()=>{N&&p&&_(N),C(p),c({id:N,services_page_title:p})},[B,N]),r.useEffect(()=>{ie()},[]),r.useEffect(()=>{s!=null&&s.id&&(I({serviceID:s?s==null?void 0:s.id:"",services_page_title:s?s==null?void 0:s.services_page_title:""}),C(re(s==null?void 0:s.services_page_title)),_(s.id))},[s]);const _=async i=>{if(!i&&!F("access")){w("/");return}try{let g=await ne.get(`/services/getSelectedClientService/${i}/`);if(j(ce(g.data.servicesFeatures)),window.scrollTo(0,0),window.history.replaceState&&m){const f=`${le()}/services/${p}/`;window.history.pushState({},null,f)}}catch{console.log("Unable to get the intro")}},A=i=>{const g=i.id,f=i.feature_title,x=async()=>{if((await E.delete(`/services/updateFeatureService/${g}/`)).status===204){const a=S.filter(d=>d.id!==g);j(a),L.success(`${f} is deleted`)}};q.confirmAlert({customUI:({onClose:t})=>e.jsx(K,{onClose:t,callback:x,message:`deleting the ${f} Service?`})})};r.useEffect(()=>{!n.editSection&&!n.addSection&&(s==null?void 0:s.id)!==void 0&&_(s.id)},[n.editSection,n.addSection]);const h=(i,g,f)=>{if(k(x=>({...x,[i]:g})),y(!b),f!=null&&f.id){let x=f;x.services_page_title=s==null?void 0:s.services_page_title,I(x)}document.body.style.overflow="hidden"};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"position-relative",children:[m&&l&&e.jsx(R,{editHandler:()=>h("banner",!0)}),e.jsx(ge,{getBannerAPIURL:`banner/clientBannerIntro/${v}-${p}-banner/`,bannerState:n.banner,pageLoadServiceName:p})]}),n.banner&&e.jsx("div",{className:"adminEditTestmonial selected ",children:e.jsx(me,{editHandler:h,componentType:"banner",popupTitle:`Service ${p?"-"+p:""} Banner`,pageType:`${v}-${p}-banner`,imageLabel:"Banner Image",showDescription:!1,showExtraFormFields:xe(`${v}-${T}-banner`),dimensions:z("banner")})}),e.jsxs(we,{children:[m&&l&&e.jsx(R,{editHandler:()=>h("briefIntro",!0)}),e.jsx(ue,{introState:n.briefIntro,pageType:v,introTitleCss:"fs-3 fw-medium text-md-center",introSubTitleCss:"fw-medium text-muted text-md-center",introDecTitleCss:"fs-6 fw-normal w-75 m-auto text-md-center"}),n.briefIntro&&e.jsx("div",{className:"adminEditTestmonial selected ",children:e.jsx(pe,{editHandler:h,popupTitle:"Service Details",componentType:"briefIntro",pageType:v})}),m&&l&&e.jsx(Se,{setSelectedServiceProject:c,selectedServiceProject:s,pageType:"service"}),e.jsx("div",{className:m&&l?"container-fluid my-md-5 py-md-4 servicesPage":"container my-md-5 py-md-4 servicesPage",id:"servicesPage",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-md-12",children:[m&&l&&(s==null?void 0:s.id)&&e.jsxs("div",{className:"d-flex justify-content-end align-items-center mb-3",children:[e.jsxs("span",{className:"mx-2 text-dark",children:[" ","Add new section in",e.jsx("span",{className:"badge bg-warning text-dark fs-6 mx-1",children:s.services_page_title}),"page"]}),e.jsx("button",{type:"submit",className:"btn btn-primary px-3",onClick:()=>h("addSection",!0),children:e.jsx("i",{className:"fa fa-plus","aria-hidden":"true"})})]}),n.editSection||n.addSection?e.jsx("div",{className:"adminEditTestmonial selected",children:e.jsx(he,{editHandler:h,category:"services",editCarousel:u,setEditCarousel:I,componentType:`${n.editSection?"editSection":"addSection"}`,imageGetURL:"services/createServiceFeatures/",imagePostURL:"services/createServiceFeatures/",imageUpdateURL:"services/updateFeatureService/",imageDeleteURL:"services/updateFeatureService/",imageLabel:"Add Service Banner",showDescription:!1,showExtraFormFields:be(s?s==null?void 0:s.id:"",s?s==null?void 0:s.services_page_title:""),dimensions:z("addService")})}):"",e.jsx("div",{className:"row ",children:e.jsx("div",{className:"col-12 col-md-8",children:e.jsx(D,{title:"Services",cssClass:"fs-3 mb-2 pageTitle"})})}),S.map((i,g)=>e.jsxs("div",{className:`row mb-5 ${m?"border border-warning mb-3 position-relative":""} ${g%2===0?"normalCSS":"flipCSS"}`,children:[m&&l&&e.jsxs(e.Fragment,{children:[e.jsx(R,{editHandler:()=>h("editSection",!0,i)}),e.jsx($,{className:"deleteSection",onClick:()=>A(i),children:e.jsx("i",{className:"fa fa-trash-o text-danger fs-4","aria-hidden":"true"})})]}),e.jsxs("div",{className:"col-md-8 p-5",children:[e.jsx(D,{title:i.feature_title?i.feature_title:"Update Feature title",cssClass:"fs-1 fw-bold mt-3 mb-1"}),e.jsx(D,{title:i.feature_sub_title?i.feature_sub_title:"Update Feature sub title",cssClass:"fs-5 text-secondary mb-2"}),e.jsx("div",{dangerouslySetInnerHTML:{__html:i.feature_description}})]}),e.jsx("div",{className:"col-md-4",children:e.jsx("img",{src:oe(i.path),alt:""})})]},i.id))]})})})]}),b&&e.jsx(de,{})]})};export{Ue as default};
