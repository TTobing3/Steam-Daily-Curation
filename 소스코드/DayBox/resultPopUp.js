import React from "react";
import { Linking } from 'react-native';
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from "../theme";
import { games } from '../datas';

/*
-Modal, Icon 등 활용된 라이브러리 관련 코드는 사용 방법을 이해하여 어플리케이션에 맞게 작성
-이외 부분들 또한 강의 중 학습한 내용을 바탕으로 작성
-Linking 라이브러리 관련 내용 중 openURL을 활용한 url GPT를 활용하여 작성한 코드 인용
*/

const ResultPopup = ({ genre, discount, gameName, rank, closeModal }) => 
{
    const linkToGameURL = () => {
        const game = games.find(g => g.title === gameName);
        const targetUrl = game.link; // 이동할 URL
        Linking.openURL(targetUrl).catch(err => console.error("Failed to open URL:", err));
    };

    const getRankColor = (rank) => 
    {
        switch(rank) {
            case "bronze":
                return theme.bronze;
            case "silver":
                return theme.silver;
            case "gold":
                return theme.gold;
            case "diamond":
                return theme.diamond;
            default:
                return theme.white;
        }
    }

    const getImage = () => 
    {
        const game = games.find(g => g.title === gameName);
        return game.image
    };

    return(
        <ModalContainer>
            <PopupBox rank = {getRankColor(rank)}>
                <PopupHeader>
                <CloseButton onPress={closeModal}>
                    <IconBox name="close-outline" size={48} />
                </CloseButton>
                </PopupHeader>
                <PopupBody>
                    <Title rank = {getRankColor(rank)}>{gameName}</Title>
                    <ImageBox source={getImage()} rank = {getRankColor(rank)}/>
                    <GenreText>장르:{genre}</GenreText>
                    <DiscountText rank = {getRankColor(rank)}>{discount}% 할인!</DiscountText>
                    <ActionButton 
                        rank = {getRankColor(rank)}
                        onPress={() => linkToGameURL()}>
                        <ActionText rank = {getRankColor(rank)}>구매하러 가기</ActionText>
                    </ActionButton>
                </PopupBody>
            </PopupBox>
        </ModalContainer>
    );
}

ResultPopup.propTypes = {
  date: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  discount: PropTypes.number.isRequired,
  gameName: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default ResultPopup;

const IconBox = styled(Icon).attrs(({ theme }) => ({
    color: theme.white,
}))`
    margin: 5px;
`;
const ModalContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;
const PopupBox = styled.View`
    background-color: ${({ theme }) => theme.loginDeepBlue};
    border-radius: 10px;
    border: 4px solid ${({ rank }) => rank};
    width: 80%;
    height: 70%;
`;
const PopupHeader = styled.View`
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 8%;
`;
const CloseButton = styled(TouchableOpacity)`
    justify-content: center;
    align-items: center;
    margin: 10px;
    width: 48px;
    height: 48px;
`;
const PopupBody = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;
`;
const Title = styled.Text`
    color: ${({ rank }) => rank};
    text-align: center;
    font-size: 32px;
    font-family: 'SUIT-ExtraBold';
    margin: 30px;
`
const ImageBox = styled.Image`
    width: 70%;
    height: 55%;
    resize-mode: strech;
    border-radius: 10px;
    border: 10px solid ${({ rank }) => rank};
`;
const GenreText = styled.Text`
  color: ${({ theme }) => theme.loginGray};
  font-size: 16px;
  text-align: center;
`;
const DiscountText = styled.Text`
    background-color: ${({ rank }) => rank};
    color: ${({ theme }) => theme.black};
    text-align: center;
    font-size: 24px;
    font-family: 'SUIT-SemiBold';
    margin: 16px;
`
const ActionButton =  styled.TouchableOpacity`
    width: 55%;
    height: 12%;
    border-radius: 10px;
    border: 3px solid ${({ rank }) => rank};
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding-bottom: 5px;
`;
const ActionText = styled.Text`
    color: ${({ rank }) => rank};
    text-align: center;
    font-size: 24px;
    font-family: 'SUIT';
`