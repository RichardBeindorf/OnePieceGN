"use client";

import Image from "next/image";
import styled from "styled-components";

export const ImageContainer = styled.div`
    width: 2000px;
    height: 930px;
	overflow: hidden;
`;

export default function Home() {

	return (
		<ImageContainer>
			<Image
				src={"/assets/Background1.png"}
				alt="backdrop"
				width={2000}
				height={935}
				priority
			/>
		</ImageContainer>
	);
}
