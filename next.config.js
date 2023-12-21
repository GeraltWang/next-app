/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// 在next.js中，所有的网络图片都要在此处配置来源
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
		],
	},
}

module.exports = nextConfig
