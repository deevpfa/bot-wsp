import Head from "next/head";
import { FC } from "react";
import Script from "next/script";

export const HeadComponent: FC<{ title: string | null }> = ({ title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Demesc'}</title>
                <meta name="author" content="" />
                <link rel="shortcut icon" href='images/IsoSinFondo.png' />
                <meta name="description" content="" />
                <meta name="facebook-domain-verification" content="upnahiawmm21w0qd74rflochd2h7sq" />
                {/* <Script>
                    window.fbAsyncInit = function() {
                        //@ts-ignore 
                        FB.init({
                            appId: '3935684223377746',
                            autoLogAppEvents: true,
                            xfbml: true,
                            version: 'v20.0'
                        })
                    };
                </Script> */}
                <Script async defer crossOrigin="anonymous"
                    src="https://connect.facebook.net/en_US/sdk.js">
                </Script>
            </Head>
        </>
    )
}
