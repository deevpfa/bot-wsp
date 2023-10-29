import Head from "next/head";
import { FC } from "react";
import logo from '../../../public/favicon.ico'

export const HeadComponent: FC<{title:string | null}> = ({ title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Elecciones 2023'}</title>
                <meta name="author" content="" />
                <link rel="shortcut icon" href='images/mapa.png' />
                <meta name="description" content="" />
                <meta name="keywords" content="Elecciones 2023" />
            </Head>
        </>
    )
}
