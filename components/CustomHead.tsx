import { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
    customTitle?: string,
    customDescription?: string,
    customImg?: string,
};

const description = "WIP";

const siteDomain = process.env["NEXT_PUBLIC_SITE_DOMAIN"];
const url = siteDomain && (siteDomain.includes("localhost") ? "http://" : "https://") + siteDomain;


const CustomHead: FC<Props> = ({ customTitle, customDescription, customImg }) => {
    const router = useRouter();
    const fullUrl = url + router.asPath;

    return (
        <Head>
            {customTitle && <title>{customTitle}</title>}
            <meta name="description" content={customDescription || description} />
            <meta name="robots" content="index,follow" />
            <link rel="canonical" href={fullUrl} />

            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={customTitle || "TheDavidDelta"} />
            <meta property="og:description" content={customDescription || description} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:locale" content="en" />

            <meta property="og:image" content={customImg || `${url}/favicon-512x512.png`} />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="512" />
            <meta property="og:image:height" content="512" />
            <meta property="og:image:alt" content="Logo" />

            <meta property="twitter:card" content="summary" />
            <meta property="twitter:creator" content="@thedaviddelta" />
        </Head>
    );
};

export default CustomHead;
