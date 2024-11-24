"use client";

// import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Frame1 from "./../assets/Luffy1.png";
import Luffy1 from "./../../public/assets/Luffy1.png";
import Luffy2 from "./../../public/assets/Luffy2.png";
import Luffy3 from "./../../public/assets/Luffy3.png";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [renderer, setRenderer] = useState(false);
	const [counter, setCounter] = useState(0);
	const [frame, setFrame] = useState("");

	function frameCounter() {
		useEffect(() => {
			// Reads the pressed Buttons

			if (counter < 3) {
				const newCount = counter + 1;
				setCounter(newCount);
				console.log("counter", counter);
			}
			console.log("denied if statement", counter);
		});
	}

	const KEY_HANDLERS = {
		ArrowLeft: () => console.log("You pressed the left Arrow."),
		ArrowRight: () => console.log("You pressed the right Arrow."),
	};

	function arrowDown() {
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

	setFrame(`/assets/Luffy${counter}.png`);

	return (
		<html lang="en">
			<body onKeyDown={() => arrowDown()}>
				{renderer ? (
					<Image src={frame} alt="backdrop" width={1200} height={600} />
				) : null}

				{children}
			</body>
		</html>
	);
}
