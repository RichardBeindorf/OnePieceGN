"use client";

// import type { Metadata } from "next";
import "./globals.css";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import Frame1 from "/Users/richard/Web-Projekte/OnePiece/Website/onepiece-grafic-novel/public/assets/Luffy1.png";
import Luffy1 from "./../../public/assets/Luffy1.png";
import Luffy2 from "./../../public/assets/Luffy2.png";
import Luffy3 from "./../../public/assets/Luffy3.png";
import styled from "styled-components";
// import { EventEmitter } from "stream";

const LuffyFrames = styled(Image)`
	position: absolute;
`;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [renderer, setRenderer] = useState(false);
	const [counter, setCounter] = useState(0);
	// const [frame, setFrame] = useState("");

	let megaFrameCounter = 0
	useEffect(() => {
		// const KEY_HANDLERS = {
		// 	ArrowLeft: () => console.log("You pressed the left Arrow."),
		// 	ArrowRight: () => console.log("You pressed the right Arrow."),
		// };

		const handleKeyDown = (event: KeyboardEvent) => {
			// const handler = KEY_HANDLERS[event.code];
			
	
			
			if (event.code === "ArrowRight") {
				
				console.log("EVENT CODE", event.code)
				megaFrameCounter++;
				console.log("megaFrameCounter", megaFrameCounter)
				if(megaFrameCounter === 16){
					megaFrameCounter = 0;

					//Ich muss den counter über den Umweg erhöhen, um useEffect zu befriedigen und keinen Loop zu erzeugen
					const nextFrame = counter + 1;
					setCounter(nextFrame)
					console.log("EVENT FIRED", `./../../public/assets/Luffy${counter}.png`, counter);
				}}

			if (event.code === "ArrowLeft") {
				megaFrameCounter++;
				if(megaFrameCounter === 8){

					megaFrameCounter = 0;
					//Ich muss den counter über den Umweg erhöhen, um useEffect zu befriedigen und keinen Loop zu erzeugen
					const nextFrame = counter - 1;
					setCounter(nextFrame)
					console.log("EVENT FIRED", `./../../public/assets/Luffy${counter}.png`, counter);
				}}
			
			}

		if (renderer && counter < 3) {

			document.addEventListener("keydown", handleKeyDown);
			return () => document.removeEventListener("keydown", handleKeyDown);
			//Rückgabeanweisung für den useEffect
			}
			
		}, [counter, renderer]);
	

	return (
		<html lang="en">
			<body onKeyDown={() => setRenderer(true)}>
				{counter > 0 ? (
					<LuffyFrames src={`/assets/Luffy${counter}.png`} alt="backdrop" width={1200} height={600} />
				) : null}

				{children}
			</body>
		</html>
	);
}
