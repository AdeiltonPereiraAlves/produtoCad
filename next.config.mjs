/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['http://localhost:3001/api/produtos','images.kabum.com.br','img.terabyteshop.com.br'] // Substitua pelo domínio do seu backend
      },
      webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Modifique a configuração do Webpack aqui, se necessário
        return config;
      },
      
};

export default nextConfig;
