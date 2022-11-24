import { useState } from "react";
import { memeData } from "../meme-data";

export default function Main() {
	// console.log(memeData);
	const { data } = memeData;
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "https://i.imgflip.com/3oevdk.jpg",
	});

	const [allMemeImages, setAllMemeImages] = useState(data);
	function getRandomMemeImg() {
		const random = Math.floor(Math.random() * allMemeImages.memes.length);
		const randomImg = allMemeImages.memes[random].url;

		setMeme((oldMeme) => ({
			...oldMeme,
			randomImage: randomImg,
		}));
	}

	function handleChange(event) {
		const { name, value } = event.target;

		setMeme((oldMeme) => ({
			...oldMeme,
			[name]: value,
		}));
	}

	return (
		<main>
			<div className="form">
				<input
					type="text"
					placeholder="Top text"
					className="form--input"
					name="topText"
					value={meme.topText}
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="Bottom text"
					className="form--input"
					name="bottomText"
					value={meme.bottomText}
					onChange={handleChange}
				/>
				<button onClick={getRandomMemeImg} className="form--button">
					Get a new meme image
				</button>
			</div>
			{meme.randomImage && (
				<div className="meme">
					<img src={meme.randomImage} className="meme--img" alt="meme" />
					<h2 className="meme--text top">{meme.topText}</h2>
					<h2 className="meme--text bottom">{meme.bottomText}</h2>
				</div>
			)}
		</main>
	);
}
