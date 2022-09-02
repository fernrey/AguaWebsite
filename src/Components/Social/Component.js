import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
`;

export const CardContainer = styled.div`
    display: flex;
    text-align: center;
    margin: 0 auto;
    width: 50%;
    border-radius: 12px;
    justify-content: center;
    background-color: white;
`;

export const Card = styled.div`
    border: solid 1px;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;

`;

export const CardText = styled.button`
    border: none;
    border-radius: 12px;
    padding: 10px;
    background-color: black;
    color: white;
    cursor: pointer;
    transition-duration: .2s;

    &:hover {
        box-shadow: 5px 5px 5px #8A8989;
    }
`;

export const Header = styled.h2`
    font-weight: 800;
    padding: 5px;
    color:  ${props => props.primary ? "white" : "black"};
`;


export const Text = styled.p`
    font-weight: 800;
    padding: 5px;
`;

