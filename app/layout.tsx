import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import GoogleAnalyticsScript from './GoogleAnalyticsScript'
import NavBar from './NavBar'
import AuthProvider from './auth/Provider'
import './globals.css'
// import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] })

// const myFont = localFont({
// 	// 本地字体文件路径
// 	src: '',
//  variable: '--font-my-font'
// })

// <body className={myFont.variable} />

// tailwind.config.js
// ...
// theme: {
// 	extend: {
// 		fontFamily: {
// 			// 'my-font': var(--font-my-font)
// 		}
//    ...
// 	}
// }

export const metadata: Metadata = {
	title: 'My Next App',
	description: 'My Next App + Next.js 14 + MySql + TailwindCSS + TypeScript',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' data-theme='winter'>
			{/* 集成谷歌分析脚本 */}
			<GoogleAnalyticsScript />
			<body className={inter.className}>
				<AuthProvider>
					<NavBar></NavBar>
					<main className='p-5'>{children}</main>
				</AuthProvider>
			</body>
		</html>
	)
}
