import Link from 'next/link'
import React from 'react'
import { sort } from 'fast-sort'

interface User {
	id: number
	name: string
	email: string
}

interface Props {
	sortOrder?: string
}

const UserTable = async ({ sortOrder }: Props) => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users', {
		next: {
			revalidate: 10,
		},
	})
	const users: User[] = await res.json()

	let sortUsers: User[] = []

	if (sortOrder === 'email') {
		sortUsers = sort(users).asc(u => u.email)
	} else {
		sortUsers = sort(users).asc(u => u.name)
	}

	return (
		<table className='table'>
			<thead>
				<tr>
					<th>Id</th>
					<th>
						<Link href={'/users?sortOrder=name'}>Name</Link>
					</th>
					<th>
						<Link href={'/users?sortOrder=email'}>Email</Link>
					</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{sortUsers.map(user => (
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.email}</td>
						<td>
							<button className='btn btn-primary btn-sm'>detail</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default UserTable
