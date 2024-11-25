"use client";

import Image from "next/image";
import styled from "styled-components";

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
