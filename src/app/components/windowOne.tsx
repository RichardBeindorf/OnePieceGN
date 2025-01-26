import styled from "styled-components";
import Image from "next/image";
import Backdrop from "./../../../public/assets/Background2.png";

interface Counter {
	counter: number;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
`;

const RightSlandBorder = styled.div`
    //Action scene border
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 50px;
    
    background-image: var(--paperBG);
    transform: translate(-30px, 21px) rotate(-3deg);
    rotate: calc(10deg);
    position: relative;
    z-index: 3;

    &:before{
        content: "";
        position: absolute;
        transform: translate(-29px, 9px) rotate(-10deg);
        rotate: calc(10deg);

        border-right: solid 3px #41403E;
        border-top-right-radius: 10px 90px;
        border-bottom: solid 3px #41403E;
        border-bottom-right-radius: 10px 80px;
        

        height: 300px;
        margin-left: 5px;
    }
`;

const Border = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    //Dimensions
    height: 300px;
    width: 600px;
    border-image: url("/assets/brush");
    border-top: solid 3px #41403E;
    border-left: solid 3px #41403E;
    border-bottom: solid 3px #41403E;
    border-top-left-radius: 180px 15px;
    border-bottom-right-radius: 225px 15px;
    border-bottom-left-radius:15px 255px;

    margin: 20px;
    overflow: hidden;
`;

export const ImageContainer = styled.div`
position: relative;
    width: 600px;
    height: 300px;
	overflow: hidden;

    /* background-image: var(--paperBG); */
/* 
    &:after{
        content: "";
        background-image: var(--paperBG);
        border-right: solid 3px #41403E;
        border-top-right-radius: 10px 90px;
        border-bottom: solid 3px #41403E;
        border-bottom-right-radius: 10px 80px;

        height: 300px;
        margin-left: 5px;
    } */
`;

const LuffyFrames = styled(Image)`
	position: absolute;
    z-index: 2;
`;

export default function WindowOne({ counter }: Counter) {
	return (
		<Wrapper>
			<Border>
				<ImageContainer>
					{counter > 0 && counter < 4 ? (
						<LuffyFrames
							src={`/assets/Luffy${counter}.png`}
							alt="luffy coming in!"
							width={600}
							height={335}
						/>
					) : null}
					<Image
						src={Backdrop}
						alt="backdrop"
						fill={true}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						priority
					/>
				</ImageContainer>
			</Border>
			<RightSlandBorder />
		</Wrapper>
	);
}
