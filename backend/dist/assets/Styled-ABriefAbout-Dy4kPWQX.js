import{e as S,r as s,j as e,g as F,k,T as l,M as B,b as C,p as E}from"./index-BWK7iHxT.js";import{I}from"./ImgTitleIntoForm-bGCGObUS.js";import{c as L}from"./dynamicFormFields-JEId_5aT.js";import{A as _}from"./Ancher-Cr_S9HGk.js";import{C as N}from"./ContactForm-DYVepLWv.js";const R=({cssClass:a,col1:c,col2:p,imageClass:x,dimensions:h,pageType:i="HomeWhoWeAre",componentFlip:T=!1,showForm:g=!1,categoryId:f})=>{const b={whoweare:!1},{isAdmin:u,hasPermission:w}=S(),[o,j]=s.useState(b),[d,A]=s.useState(!1),[r,v]=s.useState(""),m=(n,t)=>{j(y=>({...y,[n]:t})),A(!d),document.body.style.overflow="hidden"};return s.useEffect(()=>{const n=async()=>{try{const t=await C.get(`banner/clientBannerIntro/${i}/`);(t==null?void 0:t.status)===200&&v(t.data.imageModel)}catch{console.log("unable to access ulr because of server is down")}};o.whoweare||n()},[o.whoweare]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`${c}`,children:e.jsx("img",{src:F(r==null?void 0:r.path),alt:"",className:x})}),e.jsxs("div",{className:`${p}`,children:[u&&w&&e.jsx(k,{editHandler:()=>m("whoweare",!0)}),r.banner_title?e.jsx(l,{title:r.banner_title,cssClass:a}):"",r.banner_subTitle?e.jsx(l,{title:r.banner_subTitle,cssClass:"fs-6 my-3"}):"",e.jsx("div",{children:e.jsx("p",{className:"lh-md",children:r!=null&&r.banner_descripiton?r.banner_descripiton:"Update description"})}),g&&e.jsx(N,{categoryId:f}),r.moreLink?e.jsx("div",{children:e.jsx(_,{AncherLabel:"more...",Ancherpath:r.moreLink?r.moreLink:"",AncherClass:"moreLink d-flex justify-content-center align-items-center gap-3",AnchersvgColor:"#ffffff"})}):""]}),o.whoweare&&e.jsx("div",{className:"adminEditTestmonial selected",children:e.jsx(I,{editHandler:m,componentType:"whoweare",pageType:i,popupTitle:"Who We Are Banner",imageLabel:"Banner Image",showDescription:!1,dimensions:h,showExtraFormFields:L(i)})}),d&&e.jsx(B,{})]})},D=E.div`
    .productForm {
        background: rgb(225,242,253);
        background: linear-gradient(90deg, rgba(225,242,253,1) 0%, rgba(255,255,255,1) 50%, rgba(225,242,253,1) 100%);
    }

    .randomServices {
        margin-top: 96px;
        margin-bottom: 96px;

        @media(max-width: 768px) {
            margin-top: 48px;
            margin-bottom: 48px;
        }

        img {
            height: 300px;
            // filter: grayscale(100%);
            transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
            
            @media(max-width: 768px) {
                height: 200px;
            }

            &:hover {
                // filter: grayscale(0%);
                transform: scaleX(1.05);
            }
        }

        .imgStylingLeft {
            border-radius: 12px;
            // border-top-right-radius: 30px;
            // border-bottom-right-radius: 30px;

            // @media(max-width: 768px) {
            //     border-radius: 10px
            // }
        }

        .imgStylingRight {
            border-radius: 12px;
            // border-top-left-radius: 30px;
            // border-bottom-left-radius: 30px;

            // @media(max-width: 768px) {
            //     border-radius: 10px
            // }
        }
    }

    
    

    form {
        // padding: 30px 50px;
        border-radius: 15px;
        border: 1px solid ${({theme:a})=>a.lightgray};
        // background: ${({theme:a})=>a.white};

        @media(max-width: 576px) {
            padding: 30px;   
        }
    }
`;export{D as A,R as a};
