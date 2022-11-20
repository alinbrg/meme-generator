import { useState } from "react";
import { memeData } from "../meme-data";

export default function Main() {
	// console.log(memeData);
	const { data } = memeData;
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
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

	return (
		<main>
			<div className="form">
				<input type="text" placeholder="Top text" className="form--input" />
				<input type="text" placeholder="Bottom text" className="form--input" />
				<button onClick={getRandomMemeImg} className="form--button">
					Get a new meme image 🖼
				</button>
			</div>
			{meme.randomImage && (
				<img className="meme--img" src={meme.randomImage} alt="meme" />
			)}
		</main>
	);
}
