/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "api.microlink.io",
          port: "",  // Leave blank if there is no specific port
          pathname: "/**",  // Matches all paths on the domain
        },
      ],
    },
  };
  
  export default nextConfig;
  