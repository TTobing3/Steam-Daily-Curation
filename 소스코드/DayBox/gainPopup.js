import React from "react";
import styled from "styled-components/native";
import { Image } from 'expo-image';

/*
-expo-image를 활용한 gif 사용 관련 코드는 사용 방법을 이해하여 어플리케이션에 맞게 작성
-이외 부분들 또한 강의 중 학습한 내용을 바탕으로 작성
*/

const GainPopup = () => {
    return(
        <ModalContainer>
            <Title>뽑는 중...</Title>
            <Image
            source={require('../../assets/Images/crainGif.gif')}
            style={{ width: 500, height: 500, marginLeft: -50 }}/>
        </ModalContainer>
    );
}

export default GainPopup;

const ModalContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
`;
const Title = styled.Text`
    color: ${({ theme }) => theme.loginDeepBlue};
    text-align: center;
    font-size: 32px;
    font-family: 'GG-Bold';
    margin: 30px;
`