import { useState, useEffect } from 'react'

//TODO: style: fix the Joke component on top, make the text larger, delivery in linear gradient

export default function Joke() {
	const [joke, setJoke] = useState({
		error: true,
		joke: 'Sorry, something went wrong! Try to reload the window (and see the API response in the console)',
		setup: '',
		delivery: '',
	})
	useEffect(() => {
		loadNewJoke()
	}, [])
	async function loadNewJoke() {
		const request = await fetch(
			`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit`
		)
		const jokeResponse = await request.json()
		console.log(jokeResponse)
		return setJoke(jokeResponse)
	}
	return (
		<>
			<div className="jokebox">
				<p>
					Joke of the session: <br />
					{joke.joke}
					{joke.setup}
					{joke.delivery}
				</p>
			</div>
		</>
	)
}
