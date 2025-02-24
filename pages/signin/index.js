import Main from "./index.styles"
import React from 'react'
import Head from 'next/head'
import SignInForm from "./containers/signinForm"
import texts from "components/utilities/texts.json"



export default function Signin() {
  // useEffect(() => {
  //   CODE HERE
  // }, []);

  return (
      <Main>
          <Head>
            {/* WEB TITLE HERE */}
            <title>{texts.head_title_sign}</title>
            <meta name="theme-color" content="#5B4E8E" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#5B4E8E" />
            <meta name="norton-safeweb-site-verification" content="-hol51gs638ao4sh1rb2bit9os06b-sogydolz0tbtf34emmdm82llr4s7jt9rcw484e50so2xxxddugpmqe9ghrbskrgm3egt5gbnpr3wa1znxr4d-g7-ecxmebp1gx" />
            <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
          </Head>


          {/* PAGE CONTENT HERE */}
          <SignInForm />
        
          
      </Main>
  )
}