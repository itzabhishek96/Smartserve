/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "*",
            },
            {
              protocol: "http",
              hostname: "*",
            },
        ],
        domains:[
            "oaidalleapiprodscus.blob.core.windows.net",
            "images.crowdspring.com",
            "upload.wikimedia.org",
            "encrypted-tbn0.gstatic.com",
            "t0.gstatic.com",
            "animationvisarts.com",
            "flagsapi.com"
        ]
    }
}

module.exports = nextConfig
