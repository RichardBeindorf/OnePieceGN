import styled from "styled-components";
import Image from "next/image";
import Backdrop from "./../../../public/assets/Background2.png";

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
    height: 400px;
    width: 50px;
    background-image: var(--paperBG);
    transform: translate(-30px, 10px) rotate(-3deg);
    rotate: calc(10deg);
    position: relative;

    &:before{
        content: "";
        position: absolute;
        transform: translate(-27px, 1px) rotate(-10deg);
        rotate: calc(10deg);

        border-right: solid 3px #41403E;
        border-top-right-radius: 10px 90px;
        border-bottom: solid 3px #41403E;
        border-bottom-right-radius: 10px 80px;

        height: 395px;
        margin-left: 5px;
    }
`;

const Border = styled.div`
    box-sizing: border;
    display: flex;
    justify-content: center;
    align-items: center;
    //Dimensions
    height: 300px;
    width: 600px;
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
`;

const LuffyFrames = styled(Image)`
	position: absolute;
	z-index: 100;
`;

export default function WindowOne({ counter }) {
	console.log(counter);
	function callThis() {
		console.log("changed counter arrived", counter);
		return null;
	}
	return (
		<Wrapper>
			<Border>
				<ImageContainer>
					<Image
						src={Backdrop}
						alt="backdrop"
						fill={true}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						priority
					/>
				</ImageContainer>
				{counter > 0 ? callThis() : null}
				{counter > 0 && counter < 4 ? (
					<LuffyFrames
						src={`/assets/Luffy${1}.png`}
						alt="luffy coming in!"
						width={500}
						height={235}
					/>
				) : null}
			</Border>
			<RightSlandBorder />
		</Wrapper>
	);
}
