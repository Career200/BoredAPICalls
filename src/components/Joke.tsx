import { useState, useEffect } from 'react'
import styled from 'styled-components'

//TODO: style: fix the Joke component on top, make the text larger, delivery in linear gradient

const Header = styled.header`
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	transform: translate(-50%, 50%);
	.joke {
		font-size: 22px;
	}
	.setup {
		font-size: 22px;
	}
	.delivery {
		width: fit-content;
		min-height: 40px;
		margin: 0 auto;
		font-size: 25px;
		background: transparent
			linear-gradient(
				to right,
				#f99e9e,
				#f4a3c8,
				#dab1eb,
				#b2c2ff,
				#8bd1ff,
				#84d4ff,
				#7dd6ff,
				#77d9ff,
				#86d3ff,
				#9cccff,
				#b6c3ff,
				#cfbaff
			);
		-webkit-background-clip: text;
		color: transparent;
		text-align: center;
	}
`

export default function Joke() {
	const [joke, setJoke] = useState({
		error: true,
		joke: 'Sorry, something went wrong! Try to reload the window (and see the API response in the console)',
		setup: '',
		delivery: '',
	})
	useEffect(() => {
		loadNewJoke()

		console.log('useEffect')
	}, [])
	async function loadNewJoke() {
		const request = await fetch(
			`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit`
		)
		const jokeResponse = await request.json()
		return setJoke(jokeResponse)
	}
	return (
		<Header className="jokebox">
			<p>
				Joke of the session:
				<p className="joke">{joke.joke}</p>
				<p className="setup">{joke.setup}</p>
				<p className="delivery">{joke.delivery}</p>
			</p>
		</Header>
	)
}
