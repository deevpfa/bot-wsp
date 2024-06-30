import Head from "next/head";
import { FC } from "react";

export const HeadComponent: FC<{ title: string | null }> = ({ title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Demesc'}</title>
                <meta name="author" content="" />
                <link rel="shortcut icon" href='images/IsoSinFondo.png' />
                <meta name="description" content="" />
            </Head>
        </>
    )
}
