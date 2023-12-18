'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const NavBar = () => {
	const { status, data: session } = useSession()

	return (
		<div className='navbar sticky top-0 bg-base-100 bg-gradient-to-b from-zinc-200 border-b border-gray-300'>
			<div className='flex-1 space-x-5'>
				<Link href={'/'}>Next.js</Link>
				<Link href={'/users'}>Users</Link>
				<Link href={'/admin'}>Admin</Link>
			</div>
			{status === 'unauthenticated' && <Link href={'/api/auth/signin'}>Login</Link>}
			{status === 'authenticated' && (
				<div className='flex-none'>
					<div className='dropdown dropdown-end'>
						<div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
							<div className='w-10 rounded-full'>
								<Image alt='User Avatar' src={session?.user?.image || '/vercel.svg'} width={10} height={10}></Image>
							</div>
						</div>
						<ul
							tabIndex={0}
							className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
						>
							<li>
								<a className='justify-between'>
									Profile
									<span className='badge'>New</span>
								</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<Link href={'/api/auth/signout'}>Logout</Link>
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	)
}

export default NavBar
