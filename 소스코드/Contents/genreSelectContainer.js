import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components/native';
import { useWindowDimensions } from "react-native";
import { Animated } from 'react-native';
import { images } from '../images';
import { genres } from '../datas';

/*
-useWindowDimensions을 활용한 라이브러리 관련 코드는 사용 방법을 이해하여 어플리케이션에 맞게 작성
-이외 부분들 또한 강의 중 학습한 내용을 바탕으로 작성
-Animated 라이브러리 관련 내용 중 애니메이션을 활용하여 부드러운 전환은 GPT를 활용하여 작성한 코드 인용
-Math.random 후 sort를 통해 정렬한 후 랜덤한 장르 3개 선택 코드는 GPT를 활용하여 작성한 코드 인용
-글자 크기에 따라서 컴포넌트 크기를 변환하는 코드는 GPT를 활용하여 작성한 코드 인용
*/

const GenreSelectContiner = ({ setState, setGenre }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const width = useWindowDimensions().width;
    const [fontSize, setFontSize] = useState(20); // 기본 폰트 크기

    // 인용, Animation을 통한 부드러운 전환
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, []);

    const handlePress = (genre) => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            setGenre(genre);
            setState(); // 애니메이션 종료 후 상태 변경
        });
    };

    // 인용, 무작위 장르 3개 선택
    const getRandomGenres = (num = 3) => {
        const shuffled = genres.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };

    // 인용, onlayout으로 가로 크기 따와서 조절
    const adjustFontSize = (textWidth) => {
        if (textWidth > width * 0.3) // 텍스트가 화면 너비를 초과하면
        {
            const newFontSize = fontSize * (containerWidth * 0.3) / textWidth;
            setFontSize(newFontSize);
        }
    };

    const randomGenres = getRandomGenres();

    return (
        <AnimatedContainer style={{ opacity: fadeAnim }}>
            <AnimatedTitle style={{ opacity: fadeAnim }}>원하는 장르를</AnimatedTitle>
            <AnimatedTitle style={{ opacity: fadeAnim }}>골라주세요!</AnimatedTitle>
            <OptionContainer>

            {randomGenres.map((genre, index) => (
            <AnimatedOptionBox key={index} style={{ opacity: fadeAnim }}>
                <OptionText 
                    fontSize = {fontSize}
                    onLayout={(e) => adjustFontSize(e.nativeEvent.layout.width)}>{genre}</OptionText>
                <Option onPress={()=>{
                    handlePress(genre);}}>
                    <ImageBox source={images.box} />
                </Option>
            </AnimatedOptionBox>
            ))} 

            </OptionContainer>
        </AnimatedContainer>
    );
};

export default GenreSelectContiner;

const AnimatedContainer = styled(Animated.View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const AnimatedTitle = styled(Animated.Text)`
    color: ${({ theme }) => theme.white};
    width: 80%;
    text-align: center;
    font-size: 36px;
    font-family: 'SUIT-SemiBold';
`;
const OptionContainer = styled.View`
    width: 100%;
    height: 70%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;
const AnimatedOptionBox = styled(Animated.View)`
    width: 30%;
    height: 40%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 5px;
`;
const OptionText = styled.Text`
    color: ${({ theme }) => theme.mainToday};
    width: 80%;
    text-align: center;
    font-size: ${({ fontSize }) => fontSize};
    font-family: 'SUIT';
    margin: 20px;
`;
const Option = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.loginBox};
    width: 90%;
    height: 65%;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    elevation: 10;
`;
const ImageBox = styled.Image`
    width: 90%;
    height: 90%;
    resize-mode: strech;
`;