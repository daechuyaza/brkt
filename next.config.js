/** @type {import('next').NextConfig} */

/**
 * NOTE
 * false인 이유는 다음 링크를 참조하세요
 * https://github.com/vercel/next.js/issues/35822
 */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['picsum.photos']
  }
};

module.exports = nextConfig;
