import styled from 'styled-components'

export const ShowAllServicesPage = styled.div`
    padding: 48px 0 24px;
    
    .allService {
        // box-shadow: 0 .3rem .7rem rgba(0, 0, 0, .15) !important;

        transition: background-color 0.4s ease;
        .allServiceImg {
            // text-align: center;
            // display: flex;
            // justify-content: center;
            // align-items: center;
            // background:rgb(248, 248, 248);
            padding: 10px !important;

            img{
                width: 100%;
                max-width: 440px;
                height: 100%;
                object-fit: cover;
                border-radius: 8px;

                 @media (max-width: 767px) {
                    max-width: 100% !important;
                    height: 200px;
                }

                // transition: transform 0.4s ease;

                &:hover {
                    // box-shadow: 0 .3rem .7rem rgba(0, 0, 0, .25) !important;
                    // border-radius: 8px;
                }
            }
        }

        .allServiceDetails {
            // display: flex;
            // align-items: start;
            // justify-content: center;
            // flex-direction: column;
            h5.serviceTitle  {
                font-size: 1.8rem !important;
                margin: 0;
            }

            .description {
                p:not(:first-child) {
                display: none;
                }

                p {
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 5;
                }
            }

            a, a span {
                font-size: .9rem !important;
            }

            ul, ol {
                margin: 15px 10px;

                li {
                    // border-bottom: 1px solid ${({ theme }) => theme.lightgray};
                    padding: 6px 0px !important;
                }
            }
        }

        &:hover {background:rgb(248, 248, 248);}

        // &:hover .allServiceImg img {
        //     transform: scale(1.1);
        // }
    }

    .allService:last-child {
        margin-bottom: 0 !important;
    }

`