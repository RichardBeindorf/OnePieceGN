import styled from "styled-components";
import { Border, LuffyFrames, Wrapper } from "./windowOne";
import Backdrop from "./../../../public/assets/Background2.png";
import type { Counter } from "./windowOne";
// import Image from "next/image";

const SecondWrapper = styled(Wrapper)`
    margin-right: 100px;
`;

const FrameTwo = styled(Border)`
    border-left: none;
    border-right: solid 3px #41403E;
    border-top-right-radius: 50px 5px;
    border-top-left-radius: 155px 15px;
`;

const LeftSlandBorder = styled.div`
    //Action scene border
    display: flex;
    justify-content: center;
    align-items: center;
    height: 310px;
    width: 65px;
    
    background-image: var(--paperBG);
    transform: translate(55px, 5px) rotate(-3deg);
    rotate: calc(10deg);

    &:before{
        content: "";
        position: absolute;
        /* transform: translate(-29px, 9px) rotate(-10deg); */
        transform: translate(34px, -10px) rotate(-10deg);
        rotate: calc(10deg);
        

        border-right: solid 3px #41403E;
        border-top-right-radius: 10px 90px;
        border-bottom: solid 3px #41403E;
        border-bottom-right-radius: 10px 80px;
        
        height: 300px;
    }
    
`;

export default function WindowTwo({ counter }: Counter) {
	return (
		<SecondWrapper>
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
		</SecondWrapper>
	);
}
