// import bgImage from '../../Images/homeBriefHilghtBg.png';
import bgImage from '../../Images/careers-bg.jpg';

import styled from 'styled-components'


export const CounterComponentStyles = styled.div`
    background-image: url(${bgImage});
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    color: #ffffff;
    padding: 180px 0;
    position: relative;

    @media(max-width: 480px) {
        padding: 90px 0;
    }

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
            font-size: 4rem !important;
            font-weight: bold;

            @media(max-width: 480px) {
                font-size: 3rem !important;
            }
        }
    }
    
    .counterComponentViewContainer  {
        gap: 50px;

        @media(max-width: 991px) {
            gap: 24px;
        }

        @media(max-width: 480px) {
            gap: 10px;
        }

        .counterItem {
            gap: 24px;

            @media(max-width: 480px) {
                gap: 12px;
            }
        }

        .counterLabel {
            width: 120px;
            text-align: left;
        }

        .counterValue {
            
            text-decoration: underline;
            text-underline-offset: 12px;
            text-decoration-thickness: 4px;
            text-decoration-color: ${({ theme }) => theme.black};
            color: #fff;
            // box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.4);

            font-weight: bold;
            background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${bgImage});
             background-size: cover;
            background-position: center;
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent; 
        }

        

        .counterValue, .counterLabel  {
            margin: 0
        }
    }

    .counterValue {
        span {
            font-size: 8rem;

            @media(max-width: 991px) {
                font-size: 6rem;
            }

            @media(max-width: 480px) {
                font-size: 5rem;
            }
        }
    }

    .counterSymbol {
        font-size: 5rem;

         @media(max-width: 480px) {
            font-size: 3rem;
        }
    }
`