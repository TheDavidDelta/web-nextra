const withNextra = require("nextra")({
    theme: "nextra-theme-blog",
    themeConfig: "./theme.config.js",
    unstable_staticImage: true
});

module.exports = withNextra({
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Permissions-Policy",
                        value: "interest-cohort=()"
                    }
                ]
            }
        ]
    }
});
