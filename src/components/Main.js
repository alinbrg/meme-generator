import { memeData } from "../meme-data";

export default function Main() {
	// console.log(memeData);
	const { data } = memeData;
	function getRandomMemeImg() {
		const random = Math.floor(Math.random() * data.memes.length);
		const randomImg = data.memes[random].url;
		// console.log("random", randomImg, random);
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
		</main>
	);
}
