import{p as _,f as H,j as e,t as O,v as z,e as D,k as S,L as M,g as Q,T as I,c as k,r as l,b as q,s as G,Q as J,d as K}from"./index-BWK7iHxT.js";import{B as V,a as W}from"./index-CRPkYSRC.js";import{I as X}from"./ImgTitleIntoForm-bGCGObUS.js";import{i as N,c as Y,k as Z}from"./dynamicFormFields-JEId_5aT.js";import{l as ee}from"./DeleteDialog-DnRfuXBp.js";import{D as te}from"./DeleteDialog-sO22D6fc.js";import{N as ie}from"./index-C4YU0TO1.js";import{S as se}from"./index-D85sR-zM.js";import{C as ne}from"./CustomPagination-CzwkxU7w.js";import{S as ae}from"./SkeletonImage-DKfKqy0G.js";import{D as oe,C as re,P as le}from"./dnd.esm-DtnQK6qL.js";import{N as ce}from"./NoteComponent-D3-ze1DQ.js";import{B as de}from"./index-Zr8zxzfx.js";import"./Styled-BriefIntro-DpTy6njT.js";import"./Ancher-Cr_S9HGk.js";import"./FileUpload-BBAUjrX2.js";import"./Error-B_8W099F.js";import"./Styled-PageBanner-gSpUsEd9.js";const A=_.div`
  // .clients hr:last-child {
  //   display: none;
  // }
  .clientAvatar img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
 
  .clientFrontend  {
    // border-radius: 10px;
    
    .details p {
      margin: 0px
    }

    &.overlayContainer {
      background: ${({theme:i})=>i.primaryColor};
      border: 1px solid ${({theme:i})=>i.secondaryColor};
      border-radius: 10px;
      position: relative;
      // width: 50%;
      // max-width: 300px;
      min-height: 200px;
    }
    
    /* Make the image to responsive */
    .image {
      display: block;
      // width: 100%;
      // height: auto;
    }
  
    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      background: rgb(0, 0, 0);
      background: rgba(0, 0, 0, .8); /* Black see-through */
      color: #f1f1f1;
      width: 100%;
      transition: .5s ease;
      opacity:0;
      color: white;
      font-size: 20px;
      padding: 20px;
      // border-radius: 10px;
      height: 100%;
      max-height: 250px;
      overflow-y: auto;
      visibility: visible !important;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;


      &::before {
        font-size: 3rem;
        position: sticky;
        right: 15px !important;
        top: -10px;
        color: rgba(255, 165, 0, .8);  
        display: block;
        width: 100%;  
      }

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
      
    }

    p {
      font-size: .9rem;
      margin: 5px 0 !important;
      font-family: poppins
    }
  
    &.overlayContainer:hover .overlay {
      opacity: 1;
    }
  }

  .clientAdmin .details {
    display: flex;
    flex-direction: row;
    gap: 15px;
    flex-wrap: wrap;
  }
  
`,me=({clientsList:i,setClientsList:o,deleteAboutSection:r,editHandler:p})=>{const{isLoading:t}=H(n=>n.loader),h=async n=>{const{source:c,destination:a}=n;if(!a)return!0;const f=O(i,c.index,a.index),b=z(f,"client_position"),g=await m(b);g.length>0&&o(g)},m=async n=>{var c;try{let a=await k.put("/client/updateindex/",n);if((c=a==null?void 0:a.data)!=null&&c.clientLogo)return a.data.clientLogo}catch{console.log("unable to save clinet position")}};return e.jsx("div",{children:e.jsx(A,{children:e.jsxs("div",{className:"clients my-5",children:[t&&e.jsx("div",{className:"",children:[1,2,3,4].map((n,c)=>e.jsx("div",{className:"col-12",children:e.jsx(ae,{})},c))}),e.jsx(oe,{onDragEnd:h,children:e.jsx(re,{droppableId:"clientList",id:"clientList",children:(n,c)=>e.jsxs("div",{className:"row",ref:n.innerRef,...n.droppableProps,children:[i.length>0?i.map((a,f)=>e.jsx(pe,{item:a,index:f,editHandler:p,deleteAboutSection:r},f)):e.jsx("div",{className:"text-center text-muted py-5",children:!t&&e.jsx("p",{children:"Please add page contents..."})}),n.placeholder]})})})]})})})},pe=({item:i,index:o,editHandler:r,deleteAboutSection:p})=>{const{isAdmin:t,hasPermission:h}=D();return e.jsx(le,{isDragDisabled:!t,draggableId:i.id,index:o,id:i.id,children:m=>e.jsx("div",{className:`${t?"col-12 clientAdmin":"col-md-3 clientFrontend "} image`,ref:m.innerRef,...m.draggableProps,...m.dragHandleProps,children:e.jsxs("div",{className:`mb-3 ${t?"border border-warning mb-3 position-relative":"clientFrontend overlayContainer p-3 d-flex justify-content-center aling-items-center flex-column"} ${o%2===0?"normalCSS":"flipCSS"}`,children:[t&&h&&e.jsxs(e.Fragment,{children:[e.jsx(S,{editHandler:()=>r("editSection",!0,i)}),e.jsx(M,{className:"deleteSection",onClick:()=>p(i),children:e.jsx("i",{className:"fa fa-trash-o text-danger fs-4","aria-hidden":"true"})})]}),e.jsxs("div",{className:`${t?"d-md-flex p-3":""}`,children:[e.jsx("div",{className:"text-center clientAvatar",children:e.jsx("img",{src:Q(i.path),alt:"",className:"img-fluid shadow img-thumbnail"})}),e.jsxs("div",{className:"mt-3 d-flex justify-content-center align-items-center justify-content-md-center align-items-md-center flex-column  clientDetails ms-3",children:[i.client_title&&e.jsx(I,{title:i.client_title,cssClass:"fs-5 mb-2 text-center"}),e.jsx("div",{className:`details ${t?"":"overlay fa fa-map-marker"}`,dangerouslySetInnerHTML:{__html:i.client_description}})]})]})]},i.id)})},i.id)},Te=()=>{const i={banner:!1,briefIntro:!1,addSection:!1,editSection:!1},o="clients",{isAdmin:r,hasPermission:p}=D(),[t,h]=l.useState(i),[m,n]=l.useState([]),[c,a]=l.useState(!1),[f,b]=l.useState({}),[g,T]=l.useState({}),[E,F]=l.useState(!1),[j,P]=l.useState(""),[R,v]=l.useState(1),C=s=>{var u;if(((u=s==null?void 0:s.results)==null?void 0:u.length)>0){const d=G(s.results,"client_position");n(d),T(J(s)),v(1)}else n(s.clientLogo)};l.useEffect(()=>{(!t.addSection||!t.editSection)&&w()},[t.addSection,t.editSection]);const w=async()=>{try{const s=await q.get("/client/getAllClientLogos/");(s==null?void 0:s.status)===200&&C(s.data)}catch{console.log("unable to access ulr because of server is down")}};l.useEffect(()=>{const s=document.getElementById("KnowledgeHubnavbarDropdown");s&&s.classList.add("active")});const x=(s,u,d)=>{h(y=>({...y,[s]:u})),a(!c),d!=null&&d.id?b(d):b({}),document.body.style.overflow="hidden"},$=s=>{const u=s.id,d=s.client_title,y=async()=>{if((await k.delete(`/client/updateClientLogo/${u}/`)).status===204){const B=m.filter(U=>U.id!==u);n(B),K.success(`${d} is deleted`)}};ee.confirmAlert({customUI:({onClose:L})=>e.jsx(te,{onClose:L,callback:y,message:`deleting the ${d} Service?`})})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"position-relative",children:[r&&p&&e.jsx(S,{editHandler:()=>x("banner",!0)}),e.jsx(de,{getBannerAPIURL:`banner/clientBannerIntro/${o}-banner/`,bannerState:t.banner})]}),t.banner&&e.jsx("div",{className:"adminEditTestmonial selected ",children:e.jsx(X,{editHandler:x,componentType:"banner",popupTitle:"Client List Banner",pageType:`${o}-banner`,imageLabel:"Banner Image",showDescription:!1,showExtraFormFields:Y(`${o}-banner`),dimensions:N("banner")})}),r&&p&&e.jsx(S,{editHandler:()=>x("briefIntro",!0)}),e.jsx(V,{introState:t.briefIntro,pageType:o,introTitleCss:"fs-3 fw-medium text-md-center",introSubTitleCss:"fw-medium text-muted text-md-center",introDecTitleCss:"fs-6 fw-normal w-75 m-auto text-md-center"}),t.briefIntro&&e.jsx("div",{className:"adminEditTestmonial selected ",children:e.jsx(W,{editHandler:x,popupTitle:"Client list",componentType:"briefIntro",pageType:o})}),e.jsxs("div",{className:"container-fluid container-lg my-md-5 ",children:[e.jsx("div",{className:"row",children:r&&p&&e.jsx("div",{className:"col-md-12",children:e.jsx("div",{className:"d-flex justify-content-end align-items-center mb-3",children:e.jsxs("button",{type:"submit",className:"btn btn-primary px-3",onClick:()=>x("addSection",!0,{}),children:["Add New Client"," ",e.jsx("i",{className:"fa fa-plus ms-2","aria-hidden":"true"})]})})})}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 fs-3 mt-4 mt-md-0",children:e.jsx(I,{title:"Clients",cssClass:"fs-1 pageTitle"})}),e.jsx("div",{className:"col-md-6",children:e.jsx(se,{setObject:C,clientSearchURL:"/client/searchClientLogos/",adminSearchURL:"/client/createClientLogo/",clientDefaultURL:"/client/getAllClientLogos/",searchfiledDeatails:"client Title / client description ",setPageloadResults:F,setSearchquery:P,searchQuery:j})})]}),t.editSection||t.addSection?e.jsx("div",{className:"adminEditTestmonial selected ",children:e.jsx(ie,{editHandler:x,category:"about",popupTitle:"Client",editCarousel:f,setEditCarousel:b,componentType:`${t.editSection?"editSection":"addSection"}`,imageGetURL:"client/createClientLogo/",imagePostURL:"client/createClientLogo/",imageUpdateURL:"client/updateClientLogo/",imageDeleteURL:"client/updateClientLogo/",imageLabel:"Add Client Logo",showDescription:!1,showExtraFormFields:Z(),dimensions:N("aboutus"),scrollEnable:!1})}):"",e.jsx("br",{}),r&&e.jsx(ce,{note:"Use drag option to shuffle the Items"}),e.jsx(A,{children:e.jsx(me,{clientsList:m,setClientsList:n,deleteAboutSection:$,editHandler:x,getClinetDetails:w})}),g!=null&&g.total_count?e.jsx(ne,{paginationData:g,paginationURL:r?"/client/createClientLogo/":"/client/getAllClientLogos/",paginationSearchURL:j?`/client/searchClientLogos/${j}/`:r?"/client/createClientLogo/":"/client/getAllClientLogos/",searchQuery:j,setCurrentPage:v,currentPage:R,setResponseData:C,pageLoadResult:E}):""]})]})};export{Te as default};
