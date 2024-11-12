"use client";

import Image from "next/image";
import styled from "styled-components";
// import Frame1 from "../../public/Luffy1.png";
// import Frame2 from "../../public/Luffy2.png";

export const ImageContainer = styled.div`
    width: 1400px;
    height: 800px;
`;

// const Frontal1 = styled(Image)`
//     position: absolute;
//     top: 0px;
//     left: 0px;
// `;

// const Frontal2 = styled(Frontal1)`
//     position: absolute;
//     top: 0px;
//     left: 0px;
// `;

// Idee: wenn ich die Bilder auf eigene Anweisung hin laden und damit rendern lassen kann, kontrolliere ich die render-Last
// class UrlContainer {
//   [key: number]: string;
//   constructor(url){
//   }
// }
//   const imageLoader = new UrlContainer {
//   };

export default function Home() {
	// der counter erhöht sich basierend auf den aktuellen scorll punkt
	// vielleicht zunächst mit pfeiltasten weiter machen lassen (input ist schwer)
	// const KEY_HANDLERS = {
	// 	ArrowLeft: () => console.log("You pressed the left Arrow."),
	// 	ArrowRight: () => console.log("You pressed the right Arrow."),
	// };

	// function frameCounter() {
	// 	let counter = 0;
	// 	if (counter < 24) {
	// 		counter += 1;
	// 	}

	// 	return counter;
	// }

	// const urlParameter = `../../public/Luffy${frameCounter()}`;

	// function onKeydown() {
	// 	document.addEventListener("keydown", (event) => {
	// 		event.preventDefault();

	// 		const handler = KEY_HANDLERS[event.code];

	// 		if (handler) {
	// 			handler();
	// 			return;
	// 		}

	// 		console.log("Pressed a key without a handler.");
	// 		// return event.key;
	// 	});

	// }
	return (
		<ImageContainer>
			<Image
				src={"/assets/Background1.png"}
				alt="backdrop"
				width={1400}
				height={800}
				priority
			/>
			{/* <Frontal1
				src={Frame1}
				alt="backdrop"
				width={1200}
				height={600}
				priority
			/> */}
		</ImageContainer>
	);
}
