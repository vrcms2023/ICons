import{p as B,x as O,f as Y,e as S,r as l,j as e,T as D,L as w,g as _,M as A,b as G,t as V,v as W,a9 as q,c as z,O as J}from"./index-BWK7iHxT.js";import{l as K}from"./DeleteDialog-DnRfuXBp.js";import{D as Q}from"./DeleteDialog-sO22D6fc.js";import{N as X}from"./index-C4YU0TO1.js";import{D as Z,C as ee,P as se}from"./dnd.esm-DtnQK6qL.js";import{o as te}from"./dynamicFormFields-JEId_5aT.js";import{A as ae}from"./Ancher-Cr_S9HGk.js";import{S as ne}from"./SkeltonNews-Cyh8VZqK.js";const ie=B.div`
  .card {
    min-height: 380px;
    background-color: ${({theme:s})=>s.newsCardBg};
    color: ${({theme:s})=>s.newsCardTextColor};
    // margin-bottom: 30px;
    // border-radius: 10px;
    // overflow: hidden;
    border: 0px;

    .title {
      color: ${({theme:s})=>s.newsCardTitleColor};
    }

    img {
      // height: 160px;
      // width: 100%;
      // object-fit: cover;
      // object-position: bottom;
    }

    .card-body {
      // a {
      //     color:${({theme:s})=>s.primaryColor} !important;

      //     &:hover {
      //         color:${({theme:s})=>s.secondaryColor} !important;
      //     }
      // }
    }
    
  }
  .adminView {
    img {
      width: 80px !important;
      height: 80px;
    }

    
  }
`,he=({addNewsState:s,news:r,setNews:p,setResponseData:h,pagetype:f})=>{const a=O(),m={news:!1},{isLoading:c}=Y(t=>t.loader),{isAdmin:j,hasPermission:$}=S(),[g,L]=l.useState(m),[N,M]=l.useState(!1),[I,b]=l.useState({}),[d,T]=l.useState({}),[k,v]=l.useState(!1),[E,y]=l.useState(!1),C=(t,n,i)=>{b(i),L(o=>({...o,[t]:n})),M(!N),document.body.style.overflow="hidden"};l.useEffect(()=>{const t=async()=>{try{const n=await G.get("/appNews/clientAppNews/");(n==null?void 0:n.status)===200&&h(n.data)}catch{console.log("unable to access ulr because of server is down")}};(g.news||!s)&&t()},[g.news,s,f]);const P=(t,n)=>{const i=async()=>{if((await J.delete(`appNews/updateAppNews/${t}/`)).status===204){const u=r.filter(x=>x.id!==t);p(u)}};K.confirmAlert({customUI:({onClose:o})=>e.jsx(Q,{onClose:o,callback:i,message:`deleting the ${n} News?`})})},F=t=>{T(t),v(!0),y(!0)},U=()=>{v(!1),y(!1)},H=async t=>{const{source:n,destination:i}=t;if(!i)return!0;const o=V(r,n.index,i.index),u=W(o,"news_position"),x=await R(u);x.length>0&&p(x)},R=async t=>{var n;try{let i=await z.put("/appNews/updateNewsIndex/",t);if((n=i==null?void 0:i.data)!=null&&n.appNews)return i.data.appNews}catch{console.log("unable to save news position")}};return e.jsxs(e.Fragment,{children:[c?e.jsx("div",{className:"row",children:[1,2,3,4].map((t,n)=>e.jsx("div",{className:"col-md-6 col-lg-3 mb-4 mb-lg-0",children:e.jsx(ne,{})},n))}):"",e.jsx(Z,{onDragEnd:H,children:e.jsx(ee,{droppableId:"NewsList",id:"newsList",children:(t,n)=>e.jsxs("div",{className:"row",ref:t.innerRef,...t.droppableProps,children:[r.length>0?r.map((i,o)=>e.jsx(oe,{item:i,index:o,handleModel:F,DeleteNews:P,editHandler:C},i.id)):e.jsx("div",{className:"text-center",children:j&&$?e.jsx(e.Fragment,{children:a.pathname==="/news"?e.jsx("p",{className:"text-center fs-6",children:"Please add news items"}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-center fs-6",children:"Currently there are no news items found."}),e.jsx(ae,{AncherLabel:"Go To News",Ancherpath:"/news",AncherClass:"btn btn-secondary d-flex justify-content-center align-items-center gap-3",AnchersvgColor:"#ffffff"})]})}):e.jsx("p",{className:"text-center fs-6",children:!c&&"Currently there are no news items found."})}),t.placeholder]})})}),g.news&&e.jsx("div",{className:"adminEditTestmonial  selected",children:e.jsx(X,{editHandler:C,editCarousel:I,setEditCarousel:b,componentType:"news",popupTitle:"News",imageGetURL:"appNews/createAppNews/",imagePostURL:"appNews/createAppNews/",imageUpdateURL:"appNews/updateAppNews/",imageDeleteURL:"appNews/updateAppNews/",imageLabel:"Add News Image",showDescription:!1,showExtraFormFields:te()})}),k?e.jsx("div",{className:"newsModel ",children:e.jsxs("div",{className:"newsModalWrapper p-4 bg-white shadow-lg",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center gap-4 mb-1 pb-2 border-bottom",children:[e.jsx(D,{title:d.news_title,cssClass:"fw-medium"}),e.jsx(w,{onClick:U,className:"text-secondary ",children:e.jsx("i",{className:"fa fa-times fs-4","aria-hidden":"true"})})]}),e.jsxs("div",{className:"my-3 newsDetails",children:[e.jsx("div",{className:"text-center",children:e.jsx("img",{className:"w-auto mb-3",style:{height:"240px",objectFit:"cover"},src:_(d.path),alt:d.news_title})}),d.news_description?e.jsx("div",{dangerouslySetInnerHTML:{__html:d.news_description}}):"update new description"]})]})}):"",E&&e.jsx(A,{}),N&&e.jsx(A,{})]})},oe=({item:s,index:r,handleModel:p,DeleteNews:h,editHandler:f})=>{const{isAdmin:a,hasPermission:m}=S();return e.jsx(se,{isDragDisabled:!a,index:r,draggableId:s.id,id:s.id,children:c=>e.jsx("div",{className:`${a?"col-12":"col-sm-6 col-lg-4 px-2 px-md-4 px-lg-5"} image`,ref:c.innerRef,...c.draggableProps,children:e.jsx("div",{className:`col-md-12 col-lg-12 ${a?"px-3":""}`,children:e.jsx(ie,{children:e.jsx("div",{className:`card homeNews ${a?"adminView":""}`,style:{minHeight:a?"auto":""},children:e.jsxs("div",{className:`${a?"d-flex align-items-center p-2 px-3 mb-3 border rounded":""} `,children:[!a&&e.jsx("img",{src:_(s.path),className:"img-fluid rounded-3",alt:s.alternitivetext}),a&&m?e.jsx("i",{className:"fa fa-bars text-secondary","aria-hidden":"true",...c.dragHandleProps}):"",e.jsxs("div",{className:"w-100",style:{display:"flex",justifyContent:"space-between"},children:[e.jsxs("div",{className:`${a?"px-3":"py-3"}`,children:[e.jsx(D,{title:s.news_title?s.news_title:"Update news Title",cssClass:`fs-6 lineClamp lc2 ${!a&&"fw-bold"}`,mainTitleClassess:` fw-medium lh-sm lineClamp lc1 ${a?"fs-6":"fs-5"}`,subTitleClassess:""}),!a&&e.jsx("small",{className:"d-block mb-3",children:q(s.created_at).format("MMM DD, YYYY")}),!a&&e.jsx("div",{className:`card-text  ${a?"mb-0":"mb-2"}`,children:s.news_description?e.jsx("div",{className:`lineClamp ${a?"lc1":"lc2"}`,dangerouslySetInnerHTML:{__html:s.news_description}}):"update new description"}),e.jsx(w,{className:"moreLink",onClick:()=>p(s),children:"More.."})]}),a&&m&&e.jsxs("div",{className:"d-flex justify-content-end gap-2",children:[e.jsx(w,{onClick:()=>f("news",!0,s),className:" p-2",children:e.jsx("i",{className:"fa fa-pencil fs-5 text-warning","aria-hidden":"true"})}),e.jsx(w,{onClick:j=>h(s.id,s.news_title),className:"p-2",children:e.jsx("i",{className:"fa fa-trash-o fs-5 text-danger","aria-hidden":"true"})})]})]})]})})})},s.id)})},s.id)};export{he as H};
