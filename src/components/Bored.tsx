import { useState } from 'react'
import styled from 'styled-components'

const Card = styled.div`
	display: flex;
	flex-flow: column nowrap;
	gap: 15px;
`

const StyledSliderParent = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	.sliderScale {
		position: relative;
		width: 40vw;
		height: 25px;
		background: transparent
			linear-gradient(
				to left,
				#990e39,
				#9f004f,
				#a00069,
				#991284,
				#882aa1,
				#7347bb,
				#535ed1,
				#0072e1,
				#008ce5,
				#009ed3,
				#00abb4,
				#07b596
			);
		border-radius: 20px;
	}
	.sliderScaleIndicator {
		position: absolute;
		top: 0;
		height: 100%;
		width: 0;
		background-color: rgba(0, 0, 0, 0.7);
		border-radius: 20px 0 0 20px;
	}
`

export default function Bored() {
	const [bored, setBored] = useState({
		activity: '',
		accessibility: null,
		type: '',
		participants: '',
		price: null,
		link: '',
		key: '',
	})
	async function boredClick() {
		const response = await fetch('https://www.boredapi.com/api/activity/')
		const result = await response.json()
		console.log(result)
		setBored(result)
	}
	return (
		<Card>
			<h2>So you're bored huh?</h2>
			<button
				onClick={boredClick}
				style={{ width: 'fit-content', margin: '0 auto' }}
			>
				Click me for some suggestions
			</button>
			<div className="result">
				{bored.activity && (
					<h3 style={{ fontSize: '2.2rem' }}>{bored.activity.toString()}</h3>
				)}
				{bored.accessibility === null ? (
					''
				) : bored.accessibility == '0' ? (
					<>
						<p> Easy/Hard?</p>
						<h3
							style={{
								fontSize: '1.2rem',
								fontWeight: '600',
								background:
									'linear-gradient(to left,#990e39,#9f004f,#a00069,#991284,#882aa1,#7347bb,#535ed1,#0072e1,#008ce5,#009ed3,#00abb4,#07b596)',
								WebkitBackgroundClip: 'text',
								color: 'transparent',
								filter: 'brightness(150%)',
							}}
						>
							Real easy!
						</h3>
					</>
				) : (
					<StyledSliderParent>
						<p> Easy/Hard?</p>
						<div className="sliderScale" style={{ textAlign: 'center' }}>
							{(bored.accessibility * 100).toString()}%
							<div
								className="sliderScaleIndicator"
								style={{ width: `calc(${bored.accessibility} * 99% )` }}
							></div>
						</div>
					</StyledSliderParent>
				)}
				{bored.type && <p> Activity type: {bored.type.toString()}</p>}
				{bored.participants && (
					<>
						<p>How many people do you need?</p>
						{bored.participants == '1' ? (
							<p>only you</p>
						) : (
							<p>{bored.participants.toString()}</p>
						)}
					</>
				)}
				{bored.price === null ? (
					''
				) : bored.price == '0' ? (
					<>
						<p> Cheap/Costly?</p>
						<h3
							style={{
								fontSize: '1.2rem',
								fontWeight: '600',
								background:
									'linear-gradient(to right,#990e39,#9f004f,#a00069,#991284,#882aa1,#7347bb,#535ed1,#0072e1,#008ce5,#009ed3,#00abb4,#07b596)',
								WebkitBackgroundClip: 'text',
								color: 'transparent',
								filter: 'brightness(150%)',
							}}
						>
							Real cheap!
						</h3>
					</>
				) : (
					<StyledSliderParent>
						<p> Cheap/Costly?</p>
						<div
							className="sliderScale"
							style={{
								backgroundImage:
									'linear-gradient(to right, #2b762b, #47842f, #629234, #7ca03a, #96ad41, #a4a837, #b1a230, #be9b2d, #be801f, #ba641b, #b3471f, #a82525)',
							}}
						>
							{(bored.price * 100).toString()}%
							<div
								className="sliderScaleIndicator"
								style={{
									width: `calc(${bored.price} * 99% )`,
								}}
							></div>
						</div>
					</StyledSliderParent>
				)}
				{bored.link && (
					<>
						<p>More info:</p>
						<a href={bored.link.toString()}>{bored.link.toString()}</a>
					</>
				)}
			</div>
		</Card>
	)
}
