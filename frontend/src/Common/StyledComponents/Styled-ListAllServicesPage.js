import styled from 'styled-components'

export const ShowAllServicesPage = styled.div`
    padding: 48px 0 24px;
    .allService {
        // box-shadow: 0 .3rem .7rem rgba(0, 0, 0, .15) !important;
        .allServiceImg {
            text-align: center;
            img{
                width: 100%;
                height: 240px;
                object-fit: cover;
            }
        }

        .allServiceDetails {
            display: flex;
            align-items: start;
            justify-content: center;
            flex-direction: column;
            h5.serviceTitle  {
                font-size: 1.4rem !important;
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
        }
    }

    .allService:last-child {
        margin-bottom: 0 !important;
    }

`