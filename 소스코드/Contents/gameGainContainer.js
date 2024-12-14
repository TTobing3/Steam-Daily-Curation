import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components/native';
import { images } from '../images';
import Icon from 'react-native-vector-icons/Ionicons';
import { Animated } from 'react-native';
import { Modal } from "react-native";
import GainPopup from '../DayBox/gainPopup';
import { weeklyDatas } from '../datas';
import { gamesByGenre } from '../datas';

/*
-Model, Math.random을 활용한 라이브러리 관련 코드는 사용 방법을 이해하여 어플리케이션에 맞게 작성
-이외 부분들 또한 강의 중 학습한 내용을 바탕으로 작성
-Animated 라이브러리 관련 내용 중 애니메이션을 활용하여 부드러운 전환은 GPT를 활용하여 작성한 코드 인용
-Math.random 후 floor를 활용하여 랜덤 value를 얻는 코드는 GPT를 활용하여 작성한 코드 인용
*/

const GameGainContiner = ({ setState, backState, genre, update }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [isPopupOpen, setPopup] = useState(false); // 팝업 상태 관리

    const currentDate = new Date();
    const currentDateText = `${currentDate.getMonth() + 1}/${currentDate.getDate()}`;

    const openPopup = () => setPopup(true);
    const closePopup = () => setPopup(false);

    useEffect(() => {
        // 인용, Animation을 통한 부드러운 전환
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, []);

    const handlePress = () => {
        // 인용, Animation을 통한 부드러운 전환
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            setState(); // 애니메이션 종료 후 상태 변경;
            const rank = getRank();
            addData({ 
                date: currentDateText, 
                genre: genre, 
                discount: rank.discount, 
                gameName: getRandomGame(genre), 
                rank: rank.rank });
        });
    };

    const handleBackPress = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            backState(); // 애니메이션 종료 후 상태 변경
        });
    };

    const addData = (newData) => {
        if(weeklyDatas[0].gameName === "")
        {
            weeklyDatas[0] = newData;
        }
        else
        {
            for (let i = weeklyDatas.length - 1; i > 0; i--) weeklyDatas[i] = weeklyDatas[i - 1];
            weeklyDatas[0] = newData;
        }

        update();
    };

    const getRank = () => 
    {
        const randomValue = Math.random() * 100;
        if (randomValue < 80)  
            return { rank: "bronze", discount: 10 };
        else if (randomValue < 80 + 15)  
            return { rank: "silver", discount: 30 };
        else if (randomValue < 80 + 15 + 4.9) 
            return { rank: "gold", discount: 50 };
        else 
            return { rank: "diamond", discount: 90 };
    }

    // 인용, 무작위 게임 선택
    const getRandomGame = (genre) => {
        const genreData = gamesByGenre.find(item => item.genre === genre); 
        if (!genreData) return null; 
        const randomIndex = Math.floor(Math.random() * genreData.titles.length);
        return genreData.titles[randomIndex];
    };

    return (
        <AnimatedContainer style={{ opacity: fadeAnim }}>
            <Header>
                <BackButton onPress={handleBackPress}>
                    <IconBox name="arrow-back-outline" size={32} />
                </BackButton>
            </Header>
            <CrainContainer>
                <Title>선택된 장르 : <TitleGenre>{genre}</TitleGenre></Title>
                <ImageBox source={images.crain} />
                <ActionButton 
                    onPress={() => 
                    {
                        openPopup();
                        setTimeout(() => {
                            handlePress();
                            }, 4000); // 3초 후에 getGame 실행
                    }}>
                    <IconBox name="play-outline" size={64} />
                </ActionButton>
            </CrainContainer>
            <Modal visible={isPopupOpen} transparent animationType="fade">
            <GainPopup 
                closeModal={closePopup}
                />
            </Modal>
        </AnimatedContainer>
    );
};

export default GameGainContiner;

const AnimatedContainer = styled(Animated.View)`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`;
const Header = styled.View`
    width: 100%;
    height: 10%;
    flex-direction: row;
`;
const IconBox = styled(Icon).attrs(({ theme }) => ({
    color: theme.mainToday,
}))`
    margin: 5px;
`;
const BackButton = styled.TouchableOpacity`
    width: 10%;
    height: 100%;
`;
const CrainContainer = styled.View`
    width: 100%;
    height: 90%;
    justify-content: center;
    align-items: center;
`;
const Title = styled.Text`
    color: ${({ theme }) => theme.mainToday};
    width: 100%;
    text-align: center;
    font-size: 32px;
    font-family: 'SUIT-SemiBold';
`;
const TitleGenre = styled.Text`
    color: ${({ theme }) => theme.white};
    width: 100%;
    text-align: center;
    font-size: 32px;
    font-family: 'SUIT-SemiBold';
`;
const ImageBox = styled.Image`
    width: 60%;
    height: 60%;
    margin: 20px;
    resize-mode: contain;
`;
const ActionButton = styled.TouchableOpacity`
    width: 42%;
    height: 15%;
    border-radius: 10px;
    border: 4px solid ${({ theme }) => theme.mainToday};
    justify-content: center;
    align-items: center;
    margin: 5px;
`;