import Link from 'next/link'
import React from 'react'

const NavBar = () => {
	return (
		<div className='navbar sticky top-0 bg-base-100'>
			<Link className='mr-5' href={'/'}>
				Next.js
			</Link>
			<Link className='mr-5' href={'/users'}>
				Users
			</Link>
			<Link className='mr-5' href={'/admin'}>
				Admin
			</Link>
		</div>
	)
}

export default NavBar
