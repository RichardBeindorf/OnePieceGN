"use client";

import "./globals.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BleedOutElement from "./components/bleedOutElement";

const LuffyFrames = styled(Image)`
	position: absolute;
	z-index: 100;
`;

export default function Home() {
	const [renderer, setRenderer] = useState(false);
	const [counter, setCounter] = useState(0);
	const megaFrameCounter = useRef(0);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {

			if (event.code === "ArrowRight") {
				console.log(event.code);
				megaFrameCounter.current = megaFrameCounter.current + 1;
				console.log( megaFrameCounter);

				if(megaFrameCounter.current === 16){
					megaFrameCounter.current = 0;

					//Ich muss den counter über den Umweg erhöhen, um useEffect zu befriedigen und keinen Loop zu erzeugen
					const nextFrame = counter + 1;
					setCounter(nextFrame);
					console.log("EVENT FIRED", `./../../public/assets/Luffy${counter}.png`, counter);
			}} else if (event.code === "ArrowLeft") {

				console.log(event.code);
				megaFrameCounter.current = megaFrameCounter.current + 1;
				console.log( megaFrameCounter);
			
				if(megaFrameCounter.current === 16){
					megaFrameCounter.current = 0;
					//Ich muss den counter über den Umweg erhöhen, um useEffect zu befriedigen und keinen Loop zu erzeugen
					if(counter >= 1){
						console.log("changing counter", counter);
						const nextFrame = counter - 1;
						console.log("new counter", counter);
						setCounter(nextFrame);
						console.log("EVENT FIRED", `./../../public/assets/Luffy${counter}.png`, counter);
			}}}}
			console.log("counter", counter);
		if (renderer && counter < 5) {
			
			document.addEventListener("keydown", handleKeyDown);
			return () => document.removeEventListener("keydown", handleKeyDown);
			//Rückgabeanweisung für den useEffect
			}
		}, [counter, renderer]);

	return (
		<div className="firstWindow" onKeyDown={() => setRenderer(true)}>
		{counter > 0 ? (
			<LuffyFrames src={`/assets/Luffy${counter}.png`} alt="luffy coming in!" width={500} height={235} />
		) : null}
		<BleedOutElement/>
		</div>
	);
}
