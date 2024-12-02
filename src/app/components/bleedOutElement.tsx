import styled from "styled-components"

const OuterBorder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    //Dimensions
    height: 200px;
    width: 400px;
    border-top: 2.5px solid black;
    border-left: 2.5px solid black;
    border-bottom: 2.5px solid black;
    padding: 5px;
    margin: 20px;

    &:after{
        content: "";
        position: relative;
        transform: translate( 100px, -21px);
        rotate: calc(10deg);
        border-right: 2px solid black;
        /* background-color: hotpink; */
        height: 200px;
        width: 50px;
        margin-left: 5px;
    }
`;



export default function BleedOutElement (){
    return (
        <OuterBorder>
            <h5>Hier kommt das Ruffy Intro hin</h5>
        </OuterBorder>
    )
}