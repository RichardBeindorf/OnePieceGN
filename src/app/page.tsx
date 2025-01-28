"use client";

import "./globals.css";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import WindowOne from "./components/windowOne";
import WindowTwo from "./components/WindowTwo";
import WindowThree from "./components/WindowThree";
import WindowFour from "./components/WindowFour";

const Page = styled.main`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	height: 100vh;
	width: 100vh;
	&:focus {outline:0 !important;}
`;

export default function Home() {
	const [renderer, setRenderer] = useState(false);
	const [counter, setCounter] = useState<number>(0);
	const megaFrameCounter = useRef(0);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.code === "ArrowRight") {
				console.log(event.code);
				megaFrameCounter.current = megaFrameCounter.current + 1;
				console.log(megaFrameCounter);

				if (megaFrameCounter.current === 16) {
					megaFrameCounter.current = 0;

					//Ich muss den counter über den Umweg erhöhen, um useEffect zu befriedigen und keinen Loop zu erzeugen
					const nextFrame = counter + 1;
					setCounter(nextFrame);
					console.log(
						"EVENT FIRED",
						`./../../public/assets/Luffy${counter}.png`,
						counter,
					);
				}
			} else if (event.code === "ArrowLeft") {
				console.log(event.code);
				megaFrameCounter.current = megaFrameCounter.current + 1;
				console.log(megaFrameCounter);

				if (megaFrameCounter.current === 16) {
					megaFrameCounter.current = 0;
					//Ich muss den counter über den Umweg erhöhen, um useEffect zu befriedigen und keinen Loop zu erzeugen
					if (counter >= 1) {
						console.log("changing counter", counter);
						const nextFrame = counter - 1;
						console.log("new counter", counter);
						setCounter(nextFrame);
						console.log("EVENT FIRED", `Luffy${counter}.png`, counter);
					}
				}
			}
		};
		console.log("counter", counter);

		if (renderer && counter < 4) {
			document.addEventListener("keydown", handleKeyDown);
			return () => document.removeEventListener("keydown", handleKeyDown);
			//Rückgabeanweisung für den useEffect
		}
	}, [counter, renderer]);

	return (
		<Page onKeyDown={() => setRenderer(true)} tabIndex={0}>
			<WindowOne counter={counter} />
			<WindowTwo counter={counter} />

			<WindowThree counter={counter} />
			<WindowFour counter={counter} />
		</Page>
	);
}
