'use client'
import React from 'react'

interface Props {
	error: Error
	reset: () => void
}

const ErrorPage = ({ error, reset }: Props) => {
	console.log('Error', error)
	return (
		<div>
			<h1>Something went wrong</h1>
			<p>There was an error on this page.</p>
			<button className='btn' onClick={() => reset()}>
				Retry
			</button>
		</div>
	)
}

export default ErrorPage
