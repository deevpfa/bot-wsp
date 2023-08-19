import Head from "next/head";
import { FC } from "react";
import logo from '../../../public/favicon.ico'

export const HeadComponent: FC<{title:string | null}> = ({ title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Fulldata | Inteligencia en Datos'}</title>
                <meta name="author" content="" />
                <link rel="shortcut icon" href='/logo-icon.svg' />
                <meta name="description" content="" />
                <meta name="keywords" content="fulldata, inteligencia en datos, nosis, veraz, agildata" />
            </Head>
        </>
    )
}
