import React from 'react'
import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial;
    }

    html{
        font-size: 62.5%;
    }

    :root{
      --primary-color: #F72585;
      --secondary-color: #00F5D4;

      /* --complementary-01-color: #00F5D4; */
      --complementary-02-color: #4CC9F0;
      --complementary-03-color: #4895EF;
      --complementary-04-color: #4361EE;
      --complementary-05-color: #3F37C9;
      --complementary-06-color: #3A0CA3;
      --complementary-07-color: #480CA8;
      --complementary-08-color: #560BAD;
      --complementary-09-color: #7209B7;
      --complementary-10-color: #6930C3;
      --complementary-11-color: #B5179E;
      /* --complementary-12-color: #F72585; */

      --white: #F1FAEE;
      --black: #161616;
      --black-light:#222222;
      --error-color: #c2272d;
      --succes-color: #3ab549;

      --linkedin-color: #0077b5;
      --github-color: #333;
      --whatsapp-color: #25d366;

      --primary-op8: rgba(247, 37, 133, 0.8);
      --primary-op6: rgba(247, 37, 133, 0.6);
      --primary-op3: rgba(247, 37, 133, 0.3);
      --primary-op1: rgba(247, 37, 133, 0.1);
      --secondary-op8: rgba(0, 245, 212, 0.8);
      --secondary-op6: rgba(0, 245, 212, 0.6);
      --secondary-op3: rgba(0, 245, 212, 0.3);
      --secondary-op1: rgba(0, 245, 212, 0.1);
      --complementary-06-op8:rgba(58,12,163, 0.8);
      --complementary-06-op6:rgba(58,12,163, 0.6);
      --complementary-06-op3:rgba(58,12,163, 0.3);
      --complementary-06-op1:rgba(58,12,163, 0.1);
      --complementary-07-op8:rgba(72, 12, 168, 0.8);
      --complementary-07-op6:rgba(72, 12, 168, 0.6);
      --complementary-07-op3:rgba(72, 12, 168, 0.3);
      --complementary-07-op1:rgba(72, 12, 168, 0.1);
      --black-op8: rgba(22, 22, 22, 0.8);
      --black-op6: rgba(22, 22, 22, 0.6);
      --black-op3: rgba(22, 22, 22, 0.3);
      --white-op6: rgba(241, 250, 328, 0.6);
      --white-op1: rgba(241, 250, 328, 0.1);

      --opa-arco-op6-diag-left-gradient: linear-gradient(135deg,
        var(--white-op1) 25%, 
        var(--primary-op6) 50%, 
        var(--complementary-07-op6) 75%,
        var(--secondary-op6) 100%);
      --opa-pry-com07-diag-left-gradient:linear-gradient(90deg,
        var(--primary-op6), 
        var(--complementary-07-op6),
        var(--primary-op6));

      --x1: 0.4rem;
      --x2: 0.8rem;
      --x3: 1.2rem;
      --x4: 1.6rem;
      --x5: 2.0rem;
      --x6: 2.4rem;
      --x7: 2.8rem;
      --x8: 3.2rem;
      --x9: 3.6rem;
      --x10: 4rem;

    }
`

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
