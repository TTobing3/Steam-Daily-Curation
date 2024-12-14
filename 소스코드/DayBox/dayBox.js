import React, { useState } from "react";
import styled from "styled-components/native";
import { useWindowDimensions } from "react-native";
import PropTypes from "prop-types";
import { Modal } from "react-native";
import ResultPopup from "./resultPopUp";
import { theme } from "../theme";
import { games } from '../datas';

/*
-useWindowDimensions, Modal 등 활용된 라이브러리 관련 코드는 사용 방법을 이해하여 어플리케이션에 맞게 작성
-이외 부분들 또한 강의 중 학습한 내용을 바탕으로 작성
*/

const DayBox = ({ date, genre, discount, gameName, rank }) => {
    const [isPopupOpen, setPopup] = useState(false); // 팝업 상태 관리

    const width = useWindowDimensions().width;
    const currentDate = new Date();
    const currentDateText = `${currentDate.getMonth() + 1}/${currentDate.getDate()}`;

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
    const openPopup = () =>
    {
        if(gameName !== "") setPopup(true);
    } 
    const closePopup = () => setPopup(false);

    const getImage = () => 
    {
        const game = games.find(g => g.title === gameName);
        return game.image
    };

    return (
    <>
        <Content 
            onPress={openPopup}
            width={width}>
            {currentDateText === date && <TodayText>Today</TodayText>}  
            <Box
                isToday={currentDateText === date}>
                <DateText>{date}</DateText>
                {gameName !== "" && 
                <ContentBody>
                    <ImageBox source={getImage()} rank={getRankColor(rank)}/>
                </ContentBody>}
            </Box>
        </Content>

        <Modal visible={isPopupOpen} transparent animationType="fade">
        <ResultPopup 
            closeModal={closePopup}
            date={date} 
            genre={genre} 
            discount={discount} 
            gameName={gameName}
            rank={rank}
            />
        </Modal>
    </>
    );
};

DayBox.propTypes = {
  date: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  discount: PropTypes.number.isRequired,
  gameName: PropTypes.string.isRequired,
};

export default DayBox;

const Content = styled.TouchableOpacity`
    width: ${({ width }) => width/5+5}px;
    height: 90%;
    justify-content: flex-end;
    align-items: center;
    margin: 0px 5px;
`;
const Box = styled.View`
    background-color: ${({ theme, isToday }) => isToday ? theme.white : theme.mainDateBackground};
    width: 100%;
    height: 82%;
    border-radius: 10px;
    border: 2px solid ${({ theme, isToday }) => isToday ? theme.mainToday : theme.mainDateBackground};
    elevation: 5;
`;
const ContentBody = styled.View`
    justify-content: center;
    align-items: center;
`;
const TodayText = styled.Text`
    color: ${({ theme }) => theme.mainToday};
    height: 12%;
    text-align: center;
    font-size: 10px;
    font-family: 'GG-Bold';
`;
const DateText = styled.Text`
    color: ${({ theme }) => theme.mainDateText};
    text-align: center;
    font-size: 10px;
    font-family: 'SUIT';
    margin: 5px 0px ;
`;
const ImageBox = styled.Image`
    width: 60%;
    height: 68%;
    resize-mode: strech;
    border: 3px solid;
    border-color: ${({ rank }) => rank};
`;