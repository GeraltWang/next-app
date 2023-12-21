import { Resend } from 'resend'
import WelcomeTemplate from '../../../emails/WelcomeTemplate'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
	await resend.emails.send({
		// 域名，需要在 Resend 控制台添加, 建议使用二级域名 (如: email.example.com)
		from: '',
		to: '',
		subject: 'Hello World',
		react: WelcomeTemplate({ name: 'John Doe' }),
	})

	return NextResponse.json({})
}
