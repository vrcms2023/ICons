import{p as d,r as h,e as g,x,j as i,L as r,g as m,T as l}from"./index-BWK7iHxT.js";const f=d.div`

.productCategorySearch {
    width: 35%;
    min-width: 500px;
    right: 25px; 
    top: -130px; 
    z-index: 999;
    background: rgb(0,132,207);

    .productCategory {
        background: rgb(225,242,253,1);
        height: 70px;
    }

    .productSearch {
        background: rgb(0,132,207, 1);
        height: 70px;

        .search, .form-select {
            width: 400px
        }
    }
    
    @media (max-width:991px) {
        right: 2.5%;
        min-width: 95%;
        margin: 0 auto;

        .search, .form-select {
            width: 400px
        }
    }

    @media (min-width: 300px) and (max-width: 480px) {
        .search, .form-select {
            width: 300px !important;
        }
    }
}
.productsList, .productDetails {
    margin-top: 60px;
}
`,u=d.div`

.productDetails {
    .imgSelected {
        padding-left: 100px;
        padding-right: 100px;
        img {
            height: 250px;
            object-fit: cover;
    
            @media (max-width: 480px) {
                height: 200px;
            }
        }  

        .btn {
            width: auto;
        }
    
        @media (max-width: 991px) {
            padding: 15px;
        }
    }
}

    
    .allProducts.rightPositioned {
        right: 100px;
        top: 90px;
        height: 65vh;
        resize: vertical;
        overflow-y: scroll;
        // background: ${({theme:t})=>t.primaryColor};
        background: linear-gradient(17deg, rgba(225,242,253,1) 0%, rgba(255,255,255,1) 100%);
        border: 2px solid ${({theme:t})=>t.white};
        padding-top: 20px;
        padding-bottom: 20px;

        @media(min-width: 991px) and (max-width: 1024px) {
            right: 60px;
        }
        img {
            border: 2px solid ${({theme:t})=>t.white};
            transition: transform 0.7s ease-out, rotate 0.3s ease-in-out;
            width: 80% !important;
            height: 120px;
            &:hover {
                transform: scale(1.1);
                // rotate: 5deg;
            }
            }
        
        .product {
            padding-right: 0px !important;
            padding-left: 0px !important;
        }

        .productName  {
            padding: 10px 0 !important ;
            font-size: .8rem !important;
        }

}

.allProducts.bottomPositioned {
    .product {
        
        img {
            @media (max-width: 480px) {
                height: 150px;
            }
        }
    }
}
.rightPositioned::-webkit-scrollbar {
    width: 8px;
}

.rightPositioned::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(225,242,253,0.3); 
    border-radius: 3px;
}

.rightPositioned::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,137,207,0.7); 
}

.productImage {
    height: 130px;
}

.productName  {
    color: ${({theme:t})=>t.gray444};
}

// .rightPositioned::before,  .rightPositioned::after {
//     background: linear-gradient(to right, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
//     content: "";
//     height: 100%;
//     width: 30%;
//     z-index: 2;
//     position: absolute;
// }
`,j=({item:t,categoryId:s,editHandler:e,deleteProduct:o,pathName:n})=>{h.useEffect(()=>{window.scrollTo(0,0)},[]);const{isAdmin:p,hasPermission:c}=g(),a=x();return i.jsx("div",{className:`${n?"":"col-sm-6 col-md-4 col-lg-3"} text-center product px-mb-3 mb-5`,children:i.jsxs(u,{children:[p&&c&&i.jsxs("div",{className:"d-flex justify-content-end gap-2",children:[e&&i.jsx(r,{onClick:()=>e("product",!0,t),className:" p-2",children:i.jsx("i",{className:"fa fa-pencil fs-5 text-warning","aria-hidden":"true"})}),o&&i.jsx(r,{onClick:b=>o(t),className:" p-2",children:i.jsx("i",{className:"fa fa-trash-o fs-5 text-danger","aria-hidden":"true"})})]}),i.jsx(r,{to:a.pathname==="/"||a.pathname==="/home"?`/categories/${s}/`:`/products/${t==null?void 0:t.id}/`,children:i.jsx("img",{src:m(t.path),alt:t.alternitivetext,className:"w-75 rounded-4 shadow object-fit-cover productImage"})}),i.jsx(l,{title:a.pathname==="/"||a.pathname==="/home"?t.category_name:t.product_name,cssClass:"productName mt-3 fw-semibold"})]})})};export{j as P,f as a,u as b};
