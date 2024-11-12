"use client";

// import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import { useEffect, useState } from "react";
// import Frame1 from "./../assets/Luffy1.png";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [renderer, setRenderer] = useState(false);
	let [counter, setCounter] = useState(0);
	const [urlParameter, setUrlParameter] = useState("");

	useEffect(() => {
		// Reads the pressed Buttons
		function frameCounter() {
			if (counter < 3) {
				setCounter(counter++);
				console.log("counter", counter);
				// return counter;
			}
			console.log("passed if statement", counter);
			// return counter;
		}

		const KEY_HANDLERS = {
			ArrowLeft: () => console.log("You pressed the left Arrow."),
			ArrowRight: () => console.log("You pressed the right Arrow."),
		};

		function onArrowDown() {
			document.addEventListener("keydown", (event) => {
				const handler = KEY_HANDLERS[event.code];

				if (handler) {
					setRenderer(true);
					frameCounter();
					console.log("counter", frameCounter());
					return;
				}

				console.log("Pressed a key without a handler.");
			});
		}

		setUrlParameter(`/assets/Luffy${counter}.png`);
	}, [counter]);

	return (
		<html lang="en">
			<body onKeyDown={() => onArrowDown()}>
				{renderer ? (
					<Image src={urlParameter} alt="backdrop" width={1200} height={600} />
				) : null}

				{children}
			</body>
		</html>
	);
}
