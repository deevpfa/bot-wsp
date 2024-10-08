/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	images: {
		domains: ["tailwindui.com", "localhost:3000", "static.shuffle.dev", "avatars.githubusercontent.com", "images.unsplash.com", "assets.aceternity.com"],
		// loader: 'custom',
		// loaderFile: './public/images/photo.jpeg',
	},
	webpack(config, { isServer }) {
		if (!isServer) {
			config.resolve.fallback.fs = false;
		}

		return config;
	},
};

module.exports = nextConfig;
