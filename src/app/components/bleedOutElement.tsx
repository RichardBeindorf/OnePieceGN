
import styled from "styled-components"

import Image from "next/image";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
`;


const Limiter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 240px;
    width: 50px;
    background-image: var(--paperBG);
    /* background-color: hotpink; */
    transform: translate(-30px, 10px) rotate(-3deg);
    rotate: calc(10deg);
    position: relative;

    /* &:before {
        content: "";
        position: absolute;
        transform: translate(-37px, 110px) rotate(8deg);
        background-image: var(--paperBG);
        /* background-color: hotpink; */
        /* border-radius: 15%; */
        /* border: 2px solid black; */
        /* height: 250px;
        width: 50px;
        margin-left: 5px; */
    /* } */ 


    &:before{
        content: "";
        position: absolute;
        transform: translate(-27px, 4px) rotate(-10deg);
        rotate: calc(10deg);
        border-right: solid 3px #41403E;
        border-top-right-radius: 10px 90px;

        border-bottom: solid 3px #41403E;
        border-bottom-right-radius: 10px 80px;

        /* background-image: var(--paperBG); */
        /* background-color: hotpink; */
        height: 200px;
        /* width: 10px; */
        margin-left: 5px;
   
    }

`;

const Border = styled.div`
    box-sizing: content-box;
    display: flex;
    justify-content: center;
    align-items: center;
    //Dimensions
    height: 200px;
    width: 400px;
    border-top: solid 3px #41403E;
    border-left: solid 3px #41403E;
    border-bottom: solid 3px #41403E;
    border-top-left-radius: 255px 15px;
    /* border-top-right-radius: 15px 300px; */
    border-bottom-right-radius: 225px 15px;
    border-bottom-left-radius:15px 255px;

    margin: 20px;
    overflow: hidden;
`;

export const ImageContainer = styled.div`
position: relative;
    width: 400px;
    height: 200px;
	overflow: hidden;
`;



export default function BleedOutElement (){
    return (
        
        <Wrapper>
        <Border>
            <ImageContainer>
                <Image
                        src={"/assets/background2.png"}
                        alt="backdrop"
                        fill={true}
                        sizes="(max-width: 768px) 100vw"
                        priority
                        />
            </ImageContainer>
        </Border>
        <Limiter/>
        </Wrapper>
        
    )
}