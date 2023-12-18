import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	/**
	 * @example {
	 *	"name": "GeraltWang",
	 *	"email": "wgeralt@outlook.com",
	 *	"picture": "https://avatars.githubusercontent.com/u/58298096?v=4",
	 *	"sub": "58298096",
	 *	"iat": 1702877348,
	 *	"exp": 1705469348,
	 *	"jti": "8cae183d-6d41-4dfa-9180-1576e5776579"
	 *	 }
	 *
	 */
	const token = await getToken({ req: request })
	return NextResponse.json(token)
}
