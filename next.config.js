//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
//                                    BASIC CONFIGURATION OF NEXT JS.                                   //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////


/** @type {import('next').NextConfig} */
const cors = require("cors");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
};
// module.exports = {
//   images: {
//     dangerouslyAllowSVG: true,
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//   },
//   /*webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"]
//     });

//     return config;
//   }*/
// };

module.exports = nextConfig;
