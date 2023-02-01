import { useState } from 'react'
import './App.css'
import Bored from './components/Bored'
import Joke from './components/Joke'

function App() {
	return (
		<div className="App">
			<Joke />
			<Bored />
		</div>
	)
}

export default App
