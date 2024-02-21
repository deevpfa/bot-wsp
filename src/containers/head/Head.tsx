import Head from "next/head";
import { FC } from "react";
import logo from '../../../public/favicon.ico'

export const HeadComponent: FC<{title:string | null}> = ({ title }) => {
    return (
        <>
            <Head>
                <title>{title || 'WP-SENDER'}</title>
                <meta name="author" content="" />
                <link rel="shortcut icon" href='images/icon.jpeg' />
                <meta name="description" content="" />
                <meta name="keywords" content="WP-SENDER" />
            </Head>
        </>
    )
}
