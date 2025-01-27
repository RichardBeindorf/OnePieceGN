import styled from "styled-components";
import { Border, LuffyFrames, RightSlandBorder, Wrapper } from "./windowOne";
import Backdrop from "./../../../public/assets/Background2.png";
import type { Counter } from "./windowOne";
import Image from "next/image";

const FrameTwo = styled(Border)`
    border-left: none;
`;

const LeftSlandBorder = styled(RightSlandBorder)`

&:before{
        transform: translate(60px, -5px) rotate(-10deg);
    }

`;

export default function WindowFour({ counter }: Counter) {
	return (
		<Wrapper>
			<LeftSlandBorder />
			<FrameTwo
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
			</FrameTwo>
		</Wrapper>
	);
}
