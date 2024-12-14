import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components/native';
import { Animated, Linking } from 'react-native';
import { theme } from "../theme";
import { weeklyDatas } from '../datas';
import ResultPopup from '../DayBox/resultPopUp';
import { Modal } from "react-native";
import { games } from '../datas';

/*
-Modal을 활용한 라이브러리 관련 코드는 사용 방법을 이해하여 어플리케이션에 맞게 작성
-이외 부분들 또한 강의 중 학습한 내용을 바탕으로 작성
-Animated 라이브러리 관련 내용 중 애니메이션을 활용하여 부드러운 전환은 GPT를 활용하여 작성한 코드 인용
-Linking 라이브러리 관련 내용 중 openURL을 활용한 url GPT를 활용하여 작성한 코드 인용
*/

const ResultContainer = (isSkip) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const currentDate = new Date();
    const currentDateText = `${currentDate.getMonth() + 1}/${currentDate.getDate()}`;
    const [isPopupOpen, setPopup] = useState(true); // 팝업 상태 관리
    
    // 인용, Animation을 통한 전환
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, []);

    // 인용, URL 이동
    const linkToGameURL = () => {
        const game = games.find(g => g.title === weeklyDatas[0].gameName);
        const targetUrl = game.link; // 이동할 URL
        Linking.openURL(targetUrl).catch(err => console.error("Failed to open URL:", err));
    };

    const closePopup = () => setPopup(false);
    
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
    };

    const getImage = () => 
    {
        const game = games.find(g => g.title === weeklyDatas[0].gameName);
        return game.image
    };

    return (
        <AnimatedContainer style={{ opacity: fadeAnim }}>
            <Header 
                rank={getRankColor(weeklyDatas[0].rank)}>
                <DateText>{currentDateText}</DateText>
            </Header>
            <ContentContainer 
                rank={getRankColor(weeklyDatas[0].rank)}>
                <Title 
                    rank={getRankColor(weeklyDatas[0].rank)}>{weeklyDatas[0].gameName}</Title>
                <ImageBox source={getImage()} rank={getRankColor(weeklyDatas[0].rank)} />
                <DiscountText 
                    rank={getRankColor(weeklyDatas[0].rank)}>{weeklyDatas[0].discount}% 할인</DiscountText>

                <ActionButton 
                    rank={getRankColor(weeklyDatas[0].rank)}
                    onPress={() => linkToGameURL()}>

                    <ActionText rank={getRankColor(weeklyDatas[0].rank)}>구매하러 가기</ActionText>
                </ActionButton>
            </ContentContainer>
            {!isSkip &&
            <Modal visible={isPopupOpen} transparent animationType="fade">
                <ResultPopup 
                    closeModal={closePopup}
                    date={currentDateText} 
                    genre={weeklyDatas[0].genre} 
                    discount={weeklyDatas[0].discount} 
                    gameName={weeklyDatas[0].gameName}
                    rank={weeklyDatas[0].rank}/>
            </Modal>}
        </AnimatedContainer>
    );
};

export default ResultContainer;

const AnimatedContainer = styled(Animated.View)`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`;
const Header = styled.View`
    width: 100%;
    height: 15%;
    flex-direction: row;
    border-bottom-width: 2px;
    border-bottom-color: ${({ rank }) => rank};
`;
const DateText = styled.Text`
    color: ${({ theme }) => theme.mainToday};
    font-size: 28px;
    font-family: 'SUIT';
    margin: 5px;
`;
const ContentContainer = styled.View`
    width: 100%;
    height: 80%;
    justify-content: center;
    align-items: center;
    border-bottom-width: 2px;
    border-bottom-color: ${({ rank }) => rank};
`;
const Title = styled.Text`
    color: ${({ rank }) => rank};
    text-align: center;
    font-size: 32px;
    font-family: 'SUIT-ExtraBold';
    margin-bottom: 32px;
`;
const DiscountText = styled.Text`
    background-color: ${({ rank }) => rank};
    color: ${({ theme }) => theme.black};
    text-align: center;
    font-size: 24px;
    font-family: 'SUIT-SemiBold';
    margin: 16px;
`;
const ActionButton = styled.TouchableOpacity`
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
`;
const ImageBox = styled.Image`
    height: 50%;
    width: 55%;
    resize-mode: strech;
    border-radius: 10px;
    border: 10px solid ${({ rank }) => rank};
`;