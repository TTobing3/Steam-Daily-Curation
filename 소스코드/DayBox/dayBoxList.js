import React from "react";
import { useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import DayBox from "./dayBox";
import { weeklyDatas } from "../datas";

/*
-map을 활용된 코드는 사용 방법을 이해하여 어플리케이션에 맞게 작성
-useWindowDimensions을 활용한 라이브러리 관련 코드는 사용 방법을 이해하여 어플리케이션에 맞게 작성
-이외 부분들 또한 강의 중 학습한 내용을 바탕으로 작성
*/

const DayBoxList = () => {
  const width = useWindowDimensions().width;
  
  const gainDate = (index) => 
  {
    const currentDate = new Date();
    const targetDate = new Date(currentDate);
    targetDate.setDate(currentDate.getDate() - index);
    const targetDateText = `${targetDate.getMonth() + 1}/${targetDate.getDate()}`;
    return targetDateText;
  };

  return (
    <Container>
      <BoxScrollView
        width={width} 
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={{ padding: 0 }}>
        {weeklyDatas.map((box, index) =>  // GPT 도움 받음
        (
          <DayBox
            key={index}
            date={gainDate(index)}
            genre={box.genre}
            discount={box.discount}
            gameName={box.gameName}
            rank={box.rank}
          />
        ))}
      </BoxScrollView>
    </Container>
  );
};

export default DayBoxList;

const BoxScrollView = styled.ScrollView``;
const Container = styled.View`
    width: ${({ width }) => width}px;
    background-color: ${({ theme }) => theme.box_border};
    align-items: center;
    height: 80%;
`;