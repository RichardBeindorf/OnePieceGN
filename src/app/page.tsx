"use client";

import Image from "next/image";
import styled from "styled-components";
import BleedOutElement from "./components/bleedOutElement";

export const ImageContainer = styled.div`
    width: 2000px;
    height: 930px;
	overflow: hidden;
`;

export default function Home() {

	return (
		<>
		<BleedOutElement/>
		<ImageContainer>
			<Image
				src={"/assets/Background1.png"}
				alt="backdrop"
				width={500}
				height={235}
				priority
			/>
		</ImageContainer>
		</>
	);
}
