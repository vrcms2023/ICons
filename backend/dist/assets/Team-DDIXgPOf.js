import{p as B,e as D,r as o,a as M,j as e,k as y,L as l,T as I,M as H,b as V,m as q,s as z,Q as K,t as Q,v as J,g as G,c as v,d as W}from"./index-BWK7iHxT.js";import{I as X}from"./ImgTitleIntoForm-bGCGObUS.js";import{i as C,c as Y,l as Z}from"./dynamicFormFields-JEId_5aT.js";import{B as ee}from"./index-Zr8zxzfx.js";import{B as ae,a as te}from"./index-CRPkYSRC.js";import{N as se}from"./index-C4YU0TO1.js";import{l as re}from"./DeleteDialog-DnRfuXBp.js";import{D as ne}from"./DeleteDialog-sO22D6fc.js";import{S as ie}from"./index-D85sR-zM.js";import{C as oe}from"./CustomPagination-CzwkxU7w.js";import{D as le,C as me,P as ce}from"./dnd.esm-DtnQK6qL.js";import"./FileUpload-BBAUjrX2.js";import"./Error-B_8W099F.js";import"./SkeletonImage-DKfKqy0G.js";import"./Styled-PageBanner-gSpUsEd9.js";import"./Styled-BriefIntro-DpTy6njT.js";import"./Ancher-Cr_S9HGk.js";const de=B.div`
  background-color: ${({theme:a})=>a.transparent};

  .editIcon {
    top: 10px;
  }

  .title {
    color: ${({theme:a})=>a.teamTitleColor};
    font-weight: 500;
    font-size: 1.1rem;
  }

  a {
    color: ${({theme:a})=>a.teamLinkColor};
  }

  // .social {
  // border-top: 1px solid ${({theme:a})=>a.graye6};
  // }

  .social i {
    color: ${({theme:a})=>a.secondaryColor};

    font-size: 1.6rem;
    margin: 7px;
  }

  img {
    object-fit: cover;
    object-position: top;
    max-height: 100%;
    height: 130px;
  }

  .aboutMe {
  }

  .memberCard {
    background-color: ${({theme:a})=>a.white};
    // border:1px solid ${({theme:a})=>a.secondaryColor};
    border-radius: 5px;
    margin: 15px 0;
    overflow: hidden;

    .memberDetails {
      color: ${({theme:a})=>a.teamTextColor};

      small {
        font-size: 0.7rem;
        text-transform: uppercase;
      }

      .strengths {
        // p:before {
        //   content: "⬦  ";
        //   font-size: 16px;
        // }
        // p {
        //   margin-left: 10px;
        //   margin-bottom: 0px;
        // }
      }
    }
  }
`,ke=()=>{const a={banner:!1,briefIntro:!1,addSection:!1,editSection:!1},m="teams",{isAdmin:c,hasPermission:p}=D(),[n,_]=o.useState(a),[u,k]=o.useState(!1),[x,f]=o.useState([]),[b,S]=o.useState({}),[h,L]=o.useState({}),[$,P]=o.useState(!1),[g,R]=o.useState(""),[A,N]=o.useState(1),d=(t,r,s)=>{_(i=>({...i,[t]:r})),k(!u),s!=null&&s.id?S(s):S({}),document.body.style.overflow="hidden"},w=t=>{var r;if(((r=t==null?void 0:t.results)==null?void 0:r.length)>0){const s=q(t.results[0]),i=z(t.results,s);f(i),L(K(t)),N(1)}else f([])};o.useEffect(()=>{const t=async()=>{try{const r=await V.get("/ourteam/clentViewOurTeamDetails/");(r==null?void 0:r.status)===200&&w(r.data)}catch{console.log("unable to access ulr because of server is down")}};(!n.addSection||!n.editSection)&&t()},[n.addSection,n.editSection]);const E=t=>{const r=t.id,s=t.team_member_name,i=async()=>{if((await v.delete(`/ourteam/UpdateOurteamDetail/${r}/`)).status===204){const T=x.filter(F=>F.id!==r);f(T),W.success(`${s} is deleted`)}};re.confirmAlert({customUI:({onClose:j})=>e.jsx(ne,{onClose:j,callback:i,message:`deleting the ${s} Service?`})})};o.useEffect(()=>{M()},[]);const O=async t=>{const{source:r,destination:s}=t;if(!s)return!0;const i=Q(x,r.index,s.index),j=J(i,"team_member_position");(await U(j)).length>0&&f(i)},U=async t=>{var r;try{let s=await v.put("/ourteam/updateTeamindex/",t);if((r=s==null?void 0:s.data)!=null&&r.team)return s.data.team}catch{console.log("unable to save clinet position")}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"position-relative",children:[c&&p&&e.jsx(y,{editHandler:()=>d("banner",!0)}),e.jsx(ee,{getBannerAPIURL:`banner/clientBannerIntro/${m}-banner/`,bannerState:n.banner})]}),n.banner&&e.jsx("div",{className:"adminEditTestmonial selected ",children:e.jsx(X,{editHandler:d,componentType:"banner",popupTitle:"Team Banner",pageType:`${m}-banner`,imageLabel:"Banner Image",showDescription:!1,showExtraFormFields:Y(`${m}-banner`),dimensions:C("banner")})}),c&&p&&e.jsx(y,{editHandler:()=>d("briefIntro",!0)}),e.jsx(ae,{introState:n.briefIntro,linkCss:"btn btn-outline d-flex justify-content-center align-items-center",linkLabel:"Read More",moreLink:"",showLink:!1,introTitleCss:"fs-3 fw-medium text-md-center",introSubTitleCss:"fw-medium text-muted text-md-center",introDecTitleCss:"fs-6 fw-normal w-75 m-auto text-md-center",detailsContainerCss:"col-md-10 offset-md-1",anchorContainer:"d-flex justify-content-start align-items-start mt-4",anchersvgColor:"#17427C",pageType:m}),n.briefIntro&&e.jsx("div",{className:"adminEditTestmonial selected ",children:e.jsx(te,{editHandler:d,componentType:"briefIntro",popupTitle:"Team Brief",pageType:m})}),e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12 mt-4",children:c&&p&&e.jsx("div",{className:"text-end mb-4",children:e.jsxs(l,{to:"#",className:"btn btn-primary",onClick:()=>d("addSection",!0),children:["Add team",e.jsx("i",{className:"fa fa-plus ms-2","aria-hidden":"true"})]})})})}),e.jsxs("div",{className:"row mb-0 mb-md-4 py-2 py-md-4",children:[e.jsx("div",{className:"col-md-6 fs-3 mt-4 mt-md-0",children:e.jsx(I,{title:"Our Team",cssClass:"fs-1 pageTitle"})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsx(ie,{setObject:w,clientSearchURL:"/ourteam/OurteamSearchAPIView/",adminSearchURL:"/ourteam/createteam/",clientDefaultURL:"/ourteam/clentViewOurTeamDetails/",searchfiledDeatails:"Name",setPageloadResults:P,setSearchquery:R,searchQuery:g})})]}),n.editSection||n.addSection?e.jsx("div",{className:"adminEditTestmonial selected",children:e.jsx(se,{editHandler:d,category:"team",popupTitle:"Team",editCarousel:b,setEditCarousel:S,componentType:`${n.editSection?"editSection":"addSection"}`,getImageListURL:"ourteam/createteam/",deleteImageURL:"ourteam/UpdateOurteamDetail/",imagePostURL:"ourteam/createteam/",imageUpdateURL:"ourteam/UpdateOurteamDetail/",imageLabel:"Add Profile Image",showDescription:!1,showExtraFormFields:Z(b==null?void 0:b.team_member_position),dimensions:C("teams")})}):"",e.jsx(de,{children:e.jsx("div",{className:`${c?"":"teamFrontend"}`,children:e.jsx(le,{onDragEnd:O,children:e.jsx(me,{droppableId:"teamList",id:"teamList",children:(t,r)=>e.jsxs("div",{className:"row",ref:t.innerRef,...t.droppableProps,children:[x.length>0?x.map((s,i)=>e.jsx(ue,{item:s,index:i,editHandler:d,deleteAboutSection:E},i)):e.jsx("p",{className:"text-center text-muted py-5",children:"Please add page contents..."}),t.placeholder]})})})})}),e.jsx("div",{className:"row my-5",children:(h==null?void 0:h.total_count)&&e.jsx(oe,{paginationData:h,paginationURL:c?"/ourteam/createteam/":"/clieourteamnt/clentViewOurTeamDetails/",paginationSearchURL:g?`/ourteam/OurteamSearchAPIView/${g}/`:c?"/ourteam/createteam/":"/ourteam/clentViewOurTeamDetails/",searchQuery:g,setCurrentPage:N,currentPage:A,setResponseData:w,pageLoadResult:$})})]}),u&&e.jsx(H,{})]})},ue=({item:a,index:m,deleteAboutSection:c,editHandler:p})=>{const{isAdmin:n,hasPermission:_}=D();return e.jsx(ce,{isDragDisabled:!n,draggableId:a.id,index:m,id:a.id,children:u=>e.jsx("div",{className:"col-md-6 col-lg-3 px-4 px-md-3",ref:u.innerRef,...u.draggableProps,...u.dragHandleProps,children:e.jsxs("div",{className:`mx-md-1 mx-lg-1 memberCard shadow ${n?"border border-warning position-relative":""} ${m%2===0?"normalCSS":"flipCSS"}`,children:[n&&_&&e.jsxs(e.Fragment,{children:[e.jsx(y,{editHandler:()=>p("editSection",!0,a)}),e.jsx(l,{className:"deleteSection",onClick:()=>c(a),children:e.jsx("i",{className:"fa fa-trash-o text-danger fs-4","aria-hidden":"true"})})]}),e.jsx("img",{src:G(a.path),alt:"",className:"w-100"}),e.jsxs("div",{className:"my-3 text-start p-2 memberDetails",children:[a.team_member_designation&&e.jsx("small",{className:"mb-1 fw-bold",children:a.team_member_designation}),a.team_member_name&&e.jsx(I,{title:a.team_member_name,cssClass:"fs-4 title "}),a.team_member_about_us&&e.jsx("div",{className:"strengths my-3",dangerouslySetInnerHTML:{__html:a.team_member_about_us}}),a.team_member_email&&e.jsx("div",{className:"mb-2",children:e.jsx("a",{href:`mailto:${a.team_member_email}`,children:a.team_member_email})}),a.team_member_phone_number&&e.jsx("p",{children:a.team_member_phone_number}),e.jsxs("div",{className:"social",children:[a.facebook_url&&e.jsx(l,{to:a.facebook_url,target:"_blank",children:e.jsx("i",{className:"fa fa-facebook-square","aria-hidden":"true"})}),a.twitter_url&&e.jsx(l,{to:a.twitter_url,target:"_blank",children:e.jsx("i",{className:"fa fa-twitter-square","aria-hidden":"true"})}),a.youtube_url&&e.jsx(l,{to:a.youtube_url,target:"_blank",children:e.jsx("i",{className:"fa fa-youtube-play","aria-hidden":"true"})}),a.linkedIn_url&&e.jsx(l,{to:a.linkedIn_url,target:"_blank",children:e.jsx("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})}),a.instagram_url&&e.jsx(l,{to:a.instagram_url,target:"_blank",children:e.jsx("i",{className:"fa fa-instagram","aria-hidden":"true"})}),a.vimeo_url&&e.jsx(l,{to:a.vimeo_url,target:"_blank",children:e.jsx("i",{className:"fa fa-vimeo","aria-hidden":"true"})}),a.pinterest_url&&e.jsx(l,{to:a.pinterest_url,target:"_blank",children:e.jsx("i",{className:"fa fa-pinterest","aria-hidden":"true"})})]})]})]},a.id)})},a.id)};export{ke as default};
