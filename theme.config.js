import Image from 'next/image';

const description = "WIP";

const siteDomain = process.env["NEXT_PUBLIC_SITE_DOMAIN"];
const url = siteDomain && (siteDomain.includes("localhost") ? "http://" : "https://") + siteDomain;

export default {
    footer: (
        <small style={{ display: "block", marginTop: "6rem", textAlign: "end" }}>
            © 2021 TheDavidDelta
        </small>
    ),
    readMore: "Read →"
}
