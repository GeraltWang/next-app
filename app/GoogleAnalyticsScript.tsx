import React from 'react'
import Script from 'next/script'

const GoogleAnalyticsScript = () => {
	return (
		<>
			{/* 以下内容仅供参考 请自行修改 */}
			<Script async src='https://www.googletagmanager.com/gtag/js?id=G-8QZ7J8P7YX' />
			<Script id='gas'>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments)}
					gtag('js', new Date());
					gtag('config', 'G-8QZ7J8P7YX');
				`}
			</Script>
		</>
	)
}

export default GoogleAnalyticsScript
