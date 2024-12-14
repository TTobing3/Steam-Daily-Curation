import React, { useState } from 'react';
import styled from 'styled-components/native';
import { images } from '../images';
import { SafeAreaView } from 'react-native-safe-area-context';
import DayBoxList from '../DayBox/dayBoxList';
import GenreSelectContiner from '../Contents/genreSelectContainer';
import GameGainContiner from '../Contents/gameGainContainer';
import ResultContainer from '../Contents/resultContainer';
import { weeklyDatas } from '../datas';
import AsyncStorage from '@react-native-async-storage/async-storage';

/*
-AsyncStorage를 활용한 저장, Date를 통한 날짜 등 코드는 사용 방법을 이해하여 어플리케이션에 맞게 작성
-이외 부분들 또한 강의 중 학습한 내용을 바탕으로 작성
-refresh를 통해 화면 리렌더링 하는 방법은 GPT를 활용하여 작성한 코드 인용
*/

const MainScreen = ( data ) => {

    const [currentState, setCurrentState] = useState(0);
    const [currentGenre, setCurrentGenre] = useState('');
    
    // 인용, 새로고침 키
    const [updateKey, setUpdateKey] = useState(0); // 상태를 사용하여 새로고침 트리거
    const [isSkipResultPopup, setIsSkipResultPopup] = useState(false);

    const currentDate = new Date();
    const currentDateText = `${currentDate.getMonth() + 1}/${currentDate.getDate()}`;

    const saveData = async () => 
    {
        try 
        {
            await AsyncStorage.setItem('state', JSON.stringify(currentState));
            await AsyncStorage.setItem('week', JSON.stringify(weeklyDatas));
        } 
        catch (e) 
        {
            console.error(e);
        }
    };

    // 인용, 새로고침 함수
    const refresh = () => {
        saveData();
        setUpdateKey(i => i + 1); // key를 변경하여 강제로 리렌더링
    };

    const checkToday = () => {
        if(weeklyDatas[0].date === currentDateText)
        {
            if(weeklyDatas[0].gameName !== "" && currentState !== 2)
            {
                setCurrentState(2);
                setIsSkipResultPopup(true);
            }
        }
        else
        {
            for (let i = weeklyDatas.length - 1; i > 0; i--) weeklyDatas[i] = weeklyDatas[i - 1];
            weeklyDatas[0] = { date: "12/12", genre: "", discount: 0, gameName: "", rank: "" };
        }
    }

    const changeState = (index) =>
    {
        setCurrentState(index);
        saveData();
    }
    
    checkToday();

    return(
        <Container>
        <BackgroundImage source={images.background}>
            <ContentContainer>
                {currentState === 0 &&  <GenreSelectContiner 
                    setState={()=>changeState(1)}
                    setGenre={(genre)=>setCurrentGenre(genre)}/>}
                {currentState === 1 &&  <GameGainContiner 
                    setState={()=>changeState(2)}
                    backState={()=>changeState(0)}
                    genre={currentGenre}
                    update={()=>refresh()}/>}
                {currentState === 2 &&  <ResultContainer
                    isSkip={isSkipResultPopup}/>}
            </ContentContainer>
            <DayBoxContainer>
                <DayBoxList key={updateKey}/>
            </DayBoxContainer>
        </BackgroundImage>
        </Container>
    )
}

export default MainScreen;

const Container = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const BackgroundImage = styled.ImageBackground`
    flex: 1;
    width: 100%;
    height: 90%;
    justify-content: center;
    align-items: center;
    resize-mode: stretch;
`;

const ContentContainer = styled.View`
    width: 100%;
    height: 76%;
`;

const DayBoxContainer = styled.View`
    width: 100%;
    height: 24%;
    justify-content: center;
`;