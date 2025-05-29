import withPWA from 'next-pwa';

const isDev = process.env.NODE_ENV === 'development';

const baseConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default isDev
  ? baseConfig
  : withPWA({
      dest: 'public',
      register: true,
      skipWaiting: true,
      sw: 'sw.js',
    })(baseConfig);
