import styled from "styled-components";
import { Border, LuffyFrames, RightSlandBorder, Wrapper } from "./windowOne";
import Backdrop from "./../../../public/assets/Background2.png";
import type { Counter } from "./windowOne";
import Image from "next/image";

const FrameThree = styled(Border)`
    border-right: solid black 2px;
`;

export default function WindowThree({ counter }: Counter) {
	return (
		<Wrapper>
			<FrameThree
				src={Backdrop}
				alt="backdrop"
				fill={true}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				priority
			>
				{counter > 0 && counter < 4 ? (
					<LuffyFrames
						src={`/assets/Luffy${counter}.png`}
						alt="luffy coming in!"
						width={600}
						height={335}
					/>
				) : null}
				{/* <Image
					src={Backdrop}
					alt="backdrop"
					fill={true}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					priority
				/> */}
			</FrameThree>
		</Wrapper>
	);
}
