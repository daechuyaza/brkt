/** @type {import('next').NextConfig} */

/**
 * NOTE
 * false인 이유는 다음 링크를 참조하세요
 * https://github.com/vercel/next.js/issues/35822
 */
const nextConfig = {
  /**
   * NOTE
   * scroll restoration 로직
   * https://github.com/vercel/next.js/commit/38bd1a024cb25923d8ea15f269a7294d073684d8
   */
  experimental: {
    scrollRestoration: true
  },
  reactStrictMode: false,
  images: {
    domains: ['picsum.photos', 'images.unsplash.com']
  }
};

module.exports = nextConfig;
