"use client";

import "./globals.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
					<LuffyFrames src={`/assets/Luffy${counter}.png`} alt="backdrop" width={2000} height={935} />
				) : null}

				{children}
			</body>
		</html>
	);
}
