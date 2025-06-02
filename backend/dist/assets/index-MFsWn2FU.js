import{r,j as e,g as G,T as N,L as O,p as v,b as I,u as W,E as q,R as Q,I as Y,B as Z,c as X,d as ee,e as te,f as M,h as se,a as ie,i as oe,k as j,M as re,l as ae,s as U,m as ne}from"./index-BWK7iHxT.js";import{A as le}from"./Ancher-Cr_S9HGk.js";import{B as ce,a as de}from"./index-CRPkYSRC.js";import{C as me}from"./Carousel-ClOTODcm.js";import{A as P}from"./ImgTitleIntoForm-List-lLWZKaCx.js";import"./FileUpload-BBAUjrX2.js";import"./DeleteDialog-DnRfuXBp.js";import{i as C,g as pe,a as A,b as ue}from"./dynamicFormFields-JEId_5aT.js";import{A as xe,a as H}from"./Styled-ABriefAbout-Dy4kPWQX.js";import{H as ge}from"./HomeNews-ks0VNc2e.js";/* empty css                        */import"./Styled-PageBanner-gSpUsEd9.js";import"./Styled-ImageGallery-CvSD8HyL.js";import{P as he}from"./Product-BPfcjYGx.js";import{E as fe}from"./Error-B_8W099F.js";import"./Styled-BriefIntro-DpTy6njT.js";import"./SkeletonImage-DKfKqy0G.js";import"./DeleteDialog-sO22D6fc.js";import"./dnd.esm-DtnQK6qL.js";import"./NoteComponent-D3-ze1DQ.js";import"./ImgTitleIntoForm-bGCGObUS.js";import"./ContactForm-DYVepLWv.js";import"./index-C4YU0TO1.js";import"./SkeltonNews-Cyh8VZqK.js";const be=({testimonis:t})=>{const[s,a]=r.useState(0);r.useEffect(()=>{if((t==null?void 0:t.length)>1){const c=(t==null?void 0:t.length)-1;s<0&&a(c),s>c&&a(0)}},[s,t]),r.useEffect(()=>{if((t==null?void 0:t.length)>1){let c=setInterval(()=>{a(s+1)},5e3);return()=>{clearInterval(c)}}},[s,t]);const x=t==null?void 0:t.map((c,d)=>{let m="nextSlide";return d===s&&(m="activeSlide"),(d===s-1||s===0&&d===(t==null?void 0:t.length)-1)&&(m="lastSlide"),e.jsxs("div",{className:`${m} article position-absolute`,children:[c.path?e.jsx("img",{src:G(c.path),className:"rounded-circle my-4 testimonialImg shadow-lg",alt:"User"}):e.jsx("i",{className:"fa fa-user","aria-hidden":"true"}),e.jsx(N,{title:c.testimonial_title,cssClass:"mb-2 px-3 fs-3 fw-bold text-md-center title"}),e.jsx("p",{className:"w-75 m-auto mt-3 mb-5 px-3 px-md-5 fs-6",children:c.testimonial_description}),e.jsxs("div",{className:"d-flex justify-content-center gap-5",children:[e.jsxs(O,{to:"",onClick:()=>a(s+1),children:[" ",e.jsx("i",{className:"fa fa-chevron-left fs-3","aria-hidden":"true"})]}),e.jsxs(O,{to:"",onClick:()=>a(s-1),children:[" ",e.jsx("i",{className:"fa fa-chevron-right fs-3","aria-hidden":"true"})]})]})]},c.id)});return e.jsx(e.Fragment,{children:x})};v.div`

.serviceOffered  {
    img {
        border-radius: 50px;
        height: 350px;
        width: 300px;
        object-fit:cover;
        border: 3px solid ${({theme:t})=>t.gray};
        filter: gray; /* IE6-9 */
        -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
        filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
        object-fit: cover;
        cursor: pointer;
        transition: .9s ease;

        &:hover {
            -webkit-filter: grayscale(0);
            filter: none;
            border: 3px solid ${({theme:t})=>t.black};

            + h4 {
                letter-spacing: 5px;
            }
        }

        + h4 {
           
            letter-spacing: 0px;
            transition: all .4s ease-in;
        }
        
    }
}

@media (max-width: 768px) {
    .serviceOffered  {
        img {
            height: 250px;
            width: 200px;
        }
    }
}

.serviceOffered  + .dcarousel {
    width: 90vw;
    height: 90vh;
    top: 5vh !important;
}

.serviceOffered  + .dcarousel .carousel-item img {
    object-fit: cover;
    width: 90vw !important;
    height: 90vh !important;
    margin: 0 auto;
}
  
`;v.div`
    .fatures {
        padding: 80px 0;
        margin-top: 20px;
        margin-bottom: 50px;
        background-color: ${({theme:t})=>t.primaryColor};
        color: ${({theme:t})=>t.white};
        display: flex;
        flex-direction: column;
        justify-content-center;
        align-items: center;

        a {
            color: ${({theme:t})=>t.white};
            svg {
                stroke: ${({theme:t})=>t.white};
            }

        }

        .box1, .box2 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            gap: 1rem;
            padding: 0;
        }

        .title {
            font-size: 3rem;
        }

        .box1 img, .box2 img {
            width: 30%;
        }

        .box1 {
            background-color: ${({theme:t})=>t.teritoryColor};
            
        }
        .box2 {
            background-color: ${({theme:t})=>t.secondaryColor};
        }
        .decImg {
            width: 100%;
            object-fit: cover;
            object-position: center;
        }

        @media (max-width: 991px) {
            .decImg {
                height: 200px;
                
            }
            .box1, .box2 {
                padding: 25px
            }
        }
}
`;v.div`
  background-color: ${({theme:t})=>t.white};


.clients-image-slider{
    display: flex;
    // place-it 
    position: relative;
    overflow: hidden;

    height: 100%;  
    width: 100%;
    justify-content: flex-end;

      &::before,
      &::after {
        background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
        content: '';
        height: 100%;
        width: 15%;
        z-index: 2;
        position: absolute;
      }
    
      &::before {
        left: 0;
        top: 0;
      }
    
      &::after {
        right: 0;
        top: 0;
        background: linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
      }


    .image-slider-track{
      display: flex;
      animation: play 40s linear infinite;
  
      &::hover{
        -webkit-animation-play-state: paused;
        -moz-animation-play-state: paused;
        -o-animation-play-state: paused;
        animation-play-state: paused;
      }
      
      .slide{
        // height: 150px;
        width: 200px;
        display: flex;
        place-items: center;
        padding: 15px;
        perspective: 100px;
        margin-right: 70px;

        &:hover .clientPopOver {
          bottom: 0;
          left: 0;
          right: 0;
          // height: 100%;
        }

        .clientPopOver {
          // top: 0px;
          // z-index: 999;
          // opacity: .8;
          // transition: .5s ease;

          position: absolute;
          bottom: 100%;
          left: 0;
          right: 0;
          background-color: #008CBA;
          overflow: hidden;
          width: 100%;
          // height:0;
          transition: .5s ease;
          opacity: .85;
          
          p {
            margin: 0px 0 5px;
            padding: 0;
            transition: .5s ease;
            justify-content: center;
          align-items: center;
          }
        }

        img{
          height: 100%;
          width:100%;
        }
    }
  }
}

@keyframes play{
    0%{
        transform: translateX(100%);
    }

    100%{
        transform: translateX(-120%);
    }
}

 

    
 
  

`;const je=v.div`
    // padding: 50px 0;

    .hiligntsContainer {
        bottom: -75px;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, .25);     
    }
    .col-sm-4 {
        &:nth-child(1) {
            background: ${({theme:t})=>t.white};
        }

        &:nth-child(2) {
            background: ${({theme:t})=>t.verylightgray};
        }

        &:nth-child(3) {
            background: ${({theme:t})=>t.white};
        }

        p {
            font-size: .9rem;
            margin: 0px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp:2;
        }
    }
l`,ve=v.div`

.testimonials {
    background-color:${({theme:t})=>t.testimonialsBg}; 
    color:${({theme:t})=>t.testimonialsTextColor};
    min-height: 480px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // border: 1px solid ${({theme:t})=>t.gray888};
    // background: rgb(255,255,255);
    // background: linear-gradient(360deg, ${({theme:t})=>t.white} 0%, ${({theme:t})=>t.primaryColor} 100%);
    // border-radius: 30px;
    // padding: 70px 75px !important;

    .testimonialImg {
        width: 125px;
        height: 125px;
        object-fit: cover;
        box-shadow: 0 5px 5px rgba(0,0,0, .5) !important
      }

      i.fa {
        color:${({theme:t})=>t.testimonialsLinkColor};

        &:hover {
            color:${({theme:t})=>t.testimonialsLinkHoverColor};
        }
      }

    .title {color:${({theme:t})=>t.black};}
    p {color:${({theme:t})=>t.textColor};}

    .article {
        /* top: 0;
          left: 0; */
        /* width: 100%;
          height: 100%; */
        opacity: 0;
        transition: all 0.3s linear;
      }
      
      .article.activeSlide {
        opacity: 1;
        transform: translateX(0);
      }
      
      .fa-user {
        font-size: 100px;
      }
      .article.lastSlide {
        // transform: translateX(-100%); 
      }
      
      .article.nextSlide {
        //  transform: translateX(100%); 
      }
}
`;v.div`
    .randomServices img {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        height: 320px;
        object-fit: cover;
        filter: grayscale(100%);
        transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;

        &:hover {
            filter: grayscale(0%);
            transform: scaleX(1.05);
        }
    }
    .randomServices .row:nth-child(2) img {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px
    }

    @media (max-width: 576px) {
        .randomServices .row img {
            border-radius: 0px !important;
            height: 200px;
        }
    }
l`;const D=({componentEdit:t,formgetURL:s,formvalues:a,setFormValues:x})=>(r.useEffect(()=>{t||(async()=>{try{let d=await I.get(s);x(d.data.intro)}catch{console.log("Unable to get the intro")}})()},[t]),e.jsxs(e.Fragment,{children:[e.jsx(N,{title:a==null?void 0:a.intro_title,cssClass:"fs-4 fw-bold text-left"}),e.jsx("p",{className:"mt-2 mb-3",children:a==null?void 0:a.intro_desc}),e.jsx(O,{to:a==null?void 0:a.intro_morelink,className:"moreLink",children:"more.."})]}));function B({editHandler:t,componentType:s,componentTitle:a="Form ",editObject:x,setEditState:c,setSaveState:d,dynamicFormFields:m=[],formPostURL:n,formUpdateURL:k}){const w=()=>{t(s,!1),document.body.style.overflow=""},[y,V]=r.useState(!1),[_,J]=r.useState(""),{register:E,reset:F,handleSubmit:R,formState:{errors:g}}=W({defaultValues:r.useMemo(()=>x,[x])}),[K,T]=r.useState(""),$=async p=>{JSON.stringify(p);let f=new FormData;Object.keys(p).forEach(h=>{f.append(h,p[h])});let b="";try{p!=null&&p.id?b=await X.put(`${k}${p.id}/`,f):b=await X.post(n,f),w()}catch(h){ee.error(h[0])}};return e.jsxs(e.Fragment,{children:[e.jsx(q,{closeHandler:w,title:a}),e.jsx("hr",{}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-md-12 px-5",children:[y&&e.jsx("div",{className:"fw-bold",children:y&&e.jsx(fe,{children:y})}),e.jsxs("form",{onSubmit:R($),children:[Object.keys(m).map((p,f)=>{var L;const{label:b,type:h,fieldName:S,value:l}=m[p];return h=="richText"?e.jsx(Q,{label:b,editorSetState:T,initialText:""},f):e.jsx(Y,{label:b,type:h,value:l,error:(L=g==null?void 0:g[S])==null?void 0:L.message,fieldName:S,register:E,...m[p]},f)}),e.jsxs("div",{className:"d-flex justify-content-center flex-wrap flex-column flex-sm-row align-items-center gap-1 gap-md-3 mt-5",children:[e.jsx("button",{className:"btn btn-secondary mx-3",children:"save"}),e.jsx(Z,{type:"submit",cssClass:"btn btn-outline",label:"Close",handlerChange:w})]})]})]})})})]})}const Me=()=>{const t={carousel:!1,briefIntro:!1,projects:!1,testmonial:!1,serviceOffered:!1,product_development:!1,product_distribution:!1},s={product_development:"product_development",product_distribution:"product_distribution",product_registration:"product_registration"},a="home",[x,c]=r.useState([]),{isAdmin:d,hasPermission:m}=te(),[n,k]=r.useState(t),[w,y]=r.useState(!1),[V,_]=r.useState([]),[J,E]=r.useState([]),[F,R]=r.useState([]),{categories:g}=M(i=>i.categoryList),{isLoading:K}=M(i=>i.loader),[T,$]=r.useState(""),[p,f]=r.useState(""),[b,h]=r.useState(""),S=se(),l=(i,o)=>{k(u=>({...u,[i]:o})),y(o),document.body.style.overflow="hidden"},L=i=>{if((i==null?void 0:i.results.length)>0){const o=ne(i.results[0]),u=U(i.results,o);_(u.slice(0,4))}else _([])};return r.useEffect(()=>{const i=async()=>{g.map(u=>u.id);const o=[];g.forEach((u,z)=>{o.push(I.get(`/products/getClinetProduct/${u.id}/`))}),await Promise.all(o).then(function(u){const z=ae(u,g);R(z)})};g.length>0&&F.length===0&&i()},[g]),r.useEffect(()=>{ie(),S(oe())},[]),r.useEffect(()=>{const i=async()=>{try{const o=await I.get("/testimonials/clientTestimonials/");if((o==null?void 0:o.status)===200){const u=U(o.data.results,"testimonial_position");c(u)}}catch{console.log("unable to access ulr because of server is down")}};n.testmonial||i()},[n.testmonial]),r.useEffect(()=>{(async()=>{try{const o=await I.get("/client/getAllClientLogos/");if((o==null?void 0:o.status)===200){const u=U(o.data.results,"client_position");E(u)}}catch{console.log("unable to access ulr because of server is down")}})()},[]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"container-fluid",children:[e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-md-12 p-0 carousel",children:[d&&m&&e.jsx(j,{editHandler:l}),e.jsx(me,{carouselState:n.carousel})]})}),n.carousel&&e.jsx("div",{className:"adminEditTestmonial selected ",children:e.jsx(P,{editHandler:l,componentType:"carousel",popupTitle:"Carousel Banner",getImageListURL:"carousel/createCarousel/",deleteImageURL:"carousel/updateCarousel/",imagePostURL:"carousel/createCarousel/",imageUpdateURL:"carousel/updateCarousel/",imageIndexURL:"carousel/updateCarouselindex/",imageLabel:"Add Carousel Image",showDescription:!1,showExtraFormFields:pe("carousel"),dimensions:C("carousel")})}),e.jsx(je,{children:e.jsx("div",{className:"container position-relative d-none d-md-block",children:e.jsxs("div",{className:"row rounded-3 overflow-hidden position-absolute hiligntsContainer",children:[e.jsx("div",{className:"col-sm-4 p-4 p-lg-5 py-lg-4 ",children:e.jsxs("div",{className:"position-relative",children:[d&&m&&e.jsx(j,{editHandler:()=>l(s.product_development,!0)}),e.jsx(D,{formgetURL:`/carousel/clientHomeIntro/${s.product_development}/`,componentEdit:n.product_development,setFormValues:$,formvalues:T}),n.product_development&&e.jsx("div",{className:"adminEditTestmonial selected ",children:e.jsx(B,{editHandler:l,componentType:s.product_development,componentTitle:"Product Development component",formPostURL:"/carousel/createHomeIntro/",formUpdateURL:"/carousel/updateHomeIntro/",editObject:T,dynamicFormFields:A(s.product_development)})})]})}),e.jsx("div",{className:"col-sm-4 p-4 p-lg-5 py-lg-4 ",children:e.jsxs("div",{className:"position-relative",children:[d&&m&&e.jsx(j,{editHandler:()=>l(s.product_distribution,!0)}),e.jsx(D,{formgetURL:`/carousel/clientHomeIntro/${s.product_distribution}/`,componentEdit:n.product_distribution,setFormValues:f,formvalues:p}),n.product_distribution&&e.jsx("div",{className:"adminEditTestmonial selected ",children:e.jsx(B,{editHandler:l,componentType:s.product_distribution,componentTitle:"Product Distribution component",formPostURL:"/carousel/createHomeIntro/",formUpdateURL:"/carousel/updateHomeIntro/",editObject:p,dynamicFormFields:A(s.product_distribution)})})]})}),e.jsx("div",{className:"col-sm-4 p-4 p-lg-5 py-lg-4 ",children:e.jsxs("div",{className:"position-relative",children:[d&&m&&e.jsx(j,{editHandler:()=>l(s.product_registration,!0)}),e.jsx(D,{formgetURL:`/carousel/clientHomeIntro/${s.product_registration}/`,componentEdit:n.product_registration,setFormValues:h,formvalues:b}),n.product_registration&&e.jsx("div",{className:"adminEditTestmonial selected ",children:e.jsx(B,{editHandler:l,componentType:s.product_registration,componentTitle:"Product Distribution component",formPostURL:"/carousel/createHomeIntro/",formUpdateURL:"/carousel/updateHomeIntro/",editObject:b,dynamicFormFields:A(s.product_registration)})})]})})]})})}),d&&m&&e.jsx(j,{editHandler:()=>l("briefIntro",!0)}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsx(ce,{introState:n.briefIntro,linkCss:"btn btn-outline d-flex justify-content-center align-items-center gap-3",linkLabel:"Read More",moreLink:"",introTitleCss:"fs-3 fw-bold text-center mb-4",introSubTitleCss:"fw-medium text-muted text-center",introDecTitleCss:"fs-6 fw-normal mx-4 text-center lh-6",detailsContainerCss:"col-md-12 py-3",anchorContainer:"d-flex justify-content-center align-items-center mt-4",anchersvgColor:"#17427C",pageType:a})})}),n.briefIntro&&e.jsx("div",{className:"adminEditTestmonial selected ",children:e.jsx(de,{editHandler:l,componentType:"briefIntro",popupTitle:"Brief Intro Banner",pageType:"Home"})}),e.jsxs(xe,{children:[e.jsx("h1",{className:"fs-1 fw-bold text-center text-uppercase",children:"Services"}),e.jsxs("div",{className:"container-lg mx-0 mx-md-0 px-md-0 mx-lg-auto randomServices",children:[e.jsx("div",{className:"row",children:e.jsx(H,{col1:"col-md-6 ps-sm-0",col2:"col-md-6 p-4 p-md-5 d-flex justify-content-center align-items-start flex-column",cssClass:"fs-3 mb-3 fw-bolder title",imageClass:"w-100 object-fit-cover imgStylingLeft shadow",dimensions:C("whoweare"),pageType:"productPortfolio",componentFlip:!1})}),e.jsx("div",{className:"row d-flex flex-row-reverse my-3 my-md-5",children:e.jsx(H,{col1:"col-md-6 pe-sm-0",col2:"col-md-6 p-4 p-md-5 d-flex justify-content-center align-items-start flex-column",cssClass:"fs-3 mb-3 fw-bolder title",imageClass:"w-100 object-fit-cover imgStylingRight shadow imgStyling",dimensions:C("whoweare"),pageType:"promoting",componentFlip:!1})}),e.jsx("div",{className:"row",children:e.jsx(H,{col1:"col-md-6 ps-sm-0",col2:"col-md-6 p-4 p-md-5 d-flex justify-content-center align-items-start flex-column",cssClass:"fs-3 mb-3 fw-bolder title",imageClass:"w-100 object-fit-cover imgStylingLeft shadow",dimensions:C("whoweare"),pageType:"whatwedo",componentFlip:!1})})]})]}),e.jsxs("div",{className:"container",children:[e.jsx(N,{title:"Products",cssClass:"fs-1 fw-bold text-center my-5 pt-0 pt-md-5 text-uppercase"}),e.jsx("div",{className:"row",children:F.map(i=>{var o;return((o=i==null?void 0:i.products)==null?void 0:o.length)>0&&e.jsx("div",{children:e.jsx(he,{item:i.products[0],categoryId:i.id})},i.id)})})]}),e.jsx(ve,{children:e.jsxs("div",{className:"container-fluid",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsx(N,{title:"Testimonials",cssClass:"fs-1 fw-bold text-center my-5 text-uppercase"})})}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-12 testimonials text-center",children:[d&&m&&e.jsx(j,{editHandler:()=>l("testmonial",!0)}),x.length<1?(x.length,"No Testimonials Found"):x.length===1?e.jsx("h4",{children:"Please add 2 or more testimonials."}):x.length>1?e.jsx(be,{testimonis:x}):""]}),n.testmonial&&e.jsx("div",{className:"adminEditTestmonial selected ",children:e.jsx(P,{editHandler:l,componentType:"testmonial",popupTitle:"Testmonial Banner",getImageListURL:"testimonials/clientTestimonials/",deleteImageURL:"testimonials/updateTestimonials/",imagePostURL:"testimonials/createTestimonials/",imageUpdateURL:"testimonials/updateTestimonials/",imageIndexURL:"testimonials/updateTestimonialsindex/",imageLabel:"Add your Image",titleTitle:"Testmonial Name",descriptionTitle:"Testimonial Writeup ",showDescription:!1,showExtraFormFields:ue("testmonial"),dimensions:C("testimonial")})})]})]})}),e.jsx("div",{className:"row py-5 homeNews",children:e.jsx("div",{className:"col-md-12 d-flex justify-content-center align-items-center",children:e.jsxs("div",{className:"container",children:[e.jsx(N,{title:"News",cssClass:"fs-1 fw-bold text-center my-5 pt-0 pt-md-5 text-uppercase"}),e.jsx(ge,{news:V,setNews:L,pagetype:a}),e.jsx("div",{className:"d-flex justify-content-center align-items-center mt-4",children:e.jsx(le,{AncherLabel:"View more news articles",Ancherpath:"/news",AncherClass:"btn btn-outline d-flex justify-content-center align-items-center ",AnchersvgColor:"#17427C"})})]})})})]}),n.projects?e.jsx("div",{className:"adminEditTestmonial",children:e.jsx(P,{editHandler:l,componentType:"projects"})}):"",w&&e.jsx(re,{})]})};export{Me as default};
