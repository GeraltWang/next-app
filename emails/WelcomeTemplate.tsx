import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Link, Preview, Tailwind } from '@react-email/components'

interface Props {
	name: string
}

const WelcomeTemplate = ({ name }: Props) => {
	return (
		<Html>
			<Preview>Welcome</Preview>
			<Tailwind>
				<Body style={body}>
					<Container>
						<Text className='font-bold text-3xl'>Hello {name}</Text>
						<Link href='https://google.com'>Google</Link>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	)
}

const body: CSSProperties = {
	backgroundColor: '#fff',
}

export default WelcomeTemplate
