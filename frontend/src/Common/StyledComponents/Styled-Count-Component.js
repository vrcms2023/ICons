// import bgImage from '../../Images/homeBriefHilghtBg.png';
import bgImage from '../../Images/industriesWeServe.jpg';

import styled from 'styled-components'

export const CounterComponentStyles = styled.div`
    background-image: url(${bgImage});
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    color: #ffffff;
    position: relative;

    @media(min-width: 992px) {
        padding: 64px 0;
    }

    @media(max-width: 991px) {
        padding: 48px 0;
    }

    // @media(max-width: 480px) {
    //     padding: 90px 0;
    // }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            to bottom,
            rgba(1, 33, 96, 0.92),  /* start: semi-transparent black */
            rgba(0, 0, 0, 0.6)   /* end: darker */
        );
        z-index: 0;
        pointer-events: none; /* let clicks pass through */
    }

     > * {
        position: relative;
        z-index: 1;
    }

    .counterComponentView {
        .counterTitle{
            font-size: 2.5rem !important;
            text-align: center;
            // width: 80%;
            margin: auto;
            color: #fff;
            line-height: 1.4!important;

            @media(max-width: 480px) {
                font-size: 1.5rem !important;
                margin-bottom: 20px;
            }
        }
    }
    
    .counterComponentViewContainer  {
        gap: 96px;

        @media(max-width: 991px) {
            gap: 64px;
        }

        @media(max-width: 768px) {
            gap: 24px;
        }

        .counterItem {
            gap: 48px;

            @media(max-width: 991px) { 
                gap: 24px;
            }
            
            .counterLabel {
                font-size: 1.2rem;
                text-align: left;
            }

            .counterSymbol {
                font-size: 4rem;

                @media(max-width: 480px) {
                    font-size: 2rem;
                }
            }

            .counterValue, .counterLabel  {
                margin: 0;
            }
            
        }

        

        .counterValue {
            font-weight: bold;
            background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${bgImage});
             background-size: cover;
            background-position: center;
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent; 

            span {
                font-size: 4rem;

                @media(max-width: 991px) {
                    font-size: 3.2rem;
                }

                // @media(max-width: 480px) {
                //     font-size: 2rem;
                // }
            }

            span:not(.counterSymbol ) {
                text-decoration: underline;
                text-underline-offset: 12px;
                text-decoration-thickness: 2px;
                text-decoration-color: ${({ theme }) => theme.black};
            }
        }

    }

    
`