import React, { useState } from 'react';
import { Linking, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { images } from '../images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import { players } from '../datas';

/*
-Alert, BackgroundImage, SafeAreaView 등 활용된 라이브러리 관련 코드는 사용 방법을 이해하여 어플리케이션에 맞게 작성
-이외 부분들 또한 강의 중 학습한 내용을 바탕으로 작성
-Linking 라이브러리 관련 내용 중 openURL을 활용한 url GPT를 활용하여 작성한 코드 인용
*/

const LoginScreen = ( {navigation} ) => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    
    const linkToURL = (url) => {
        const targetUrl = url; // 이동할 URL
        // 인용, URL 이동
        Linking.openURL(targetUrl).catch(err => console.error("Failed to open URL:", err));
    };

    const checkPlayer = (playerData) => {
        const player = players.find(p => p.id === playerData.id);

        if (!player)  return "존재하지 않는 ID입니다.";
        if (player.pw !== playerData.pw)  return "비밀번호가 틀렸습니다.";
        return "접속에 성공했습니다.";
    };

    const signIn = () => {
        const result = checkPlayer({ id, pw }); 
        if (result === "접속에 성공했습니다.") 
        {
            navigation.navigate('Main'); // 접속 성공 시 Main으로 이동
        }
        else
        {
            Alert.alert("로그인 결과", result);
        }
    };

    return(
        <Container>
        <BackgroundImage source={images.background}>
            <Title>STEAM</Title>
            <SignInContainer>
            <InputContainer>
              <InputBox>
                <Icon name="account" size={32} color={theme.loginText} />
                <StyledInput 
                    value={id}
                    onChangeText={setId}
                    placeholder="Username" 
                    placeholderTextColor="#777" />
              </InputBox>
              <InputBox>
                <Icon name="lock" size={32} color={theme.loginText} />
                <StyledInput 
                    value={pw}
                    onChangeText={setPw}
                    secureTextEntry
                    placeholder="Password" 
                    placeholderTextColor="#777"/>
              </InputBox>
              <SignInSubText>password?</SignInSubText>
            </InputContainer>

            <SignInButton 
                onPress={() => 
                {
                    signIn();
                }}>
                <SignInText >Sign-in</SignInText>
            </SignInButton>
            
            <HrBox/>
            <SurpportBox>

                <RegisterBox
                    onPress={() => linkToURL('https://store.steampowered.com/join?l=koreana')}>
                    <RegisterText>Sign-up</RegisterText>
                </RegisterBox>
                <RegisterText> | </RegisterText>
                <EmailBox
                    onPress={() => linkToURL('https://help.steampowered.com/ko/wizard/HelpWithLogin?redir=https%3A%2F%2Fstore.steampowered.com%2Flogin%2F%3Fl%3Dkoreana')}>
                    <RegisterText>E-mail</RegisterText>
                </EmailBox>
            </SurpportBox>
            </SignInContainer>
        </BackgroundImage>
        </Container>
    )
}

export default LoginScreen;

const Container = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const BackgroundImage = styled.ImageBackground`
    flex: 1;
    width: 100%;
    height: 65%;
    justify-content: center;
    align-items: center;
    resize-mode: stretch;
`;
const Title = styled.Text`
    color : ${({ theme }) => theme.white};
    font-size: 48px;
    font-family: 'SUIT-Heavy';
    color: #fff;
    margin-bottom: 20px;
`;
const SignInContainer = styled.View`
    background-color: rgba(222, 222, 222, 0.84);
    width: 90%;
    height: 500px;
    border-radius: 30px;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
`;
const InputContainer = styled.View`
    width : 100%;
    margin-bottom: 50px;
    align-items: flex-end;
`;
const InputBox = styled.View`
    border-color: ${({ theme }) => theme.loginBorder};
    flex-direction: row;
    align-items: center;
    border : solid 2px;
    border-radius : 50px;
    padding: 10px;
    margin-top: 15px;
`;
const StyledInput = styled.TextInput`
    flex: 1;
    margin-left: 10px;
    font-size: 16px;
    color: #000;
`;
const SignInSubText = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.loginGray};
    font-family: 'SUIT';
    margin-top: 5px;
    margin-right: 16px;
`;
const SignInButton = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.loginDeepBlue};
    width : 100%;
    padding: 5px;
    border-radius: 50px;
    align-items: center;
`;
const SignInText = styled.Text`
    color: ${({ theme }) => theme.loginText};
    font-size: 42px;
    font-weight: bold;
    font-family: 'SUIT-ExtraBold';
`;
const HrBox = styled.View`
    width: 100%;
    border: solid 1px;
    border-color: ${({ theme }) => theme.loginBorder};
    margin-top: 50px;
`;
const SurpportBox = styled.View`
    width: 100%;
    height: 20%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;
const RegisterBox = styled(TouchableOpacity)`
    width: 30%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0px;
`;
const EmailBox = styled(TouchableOpacity)`
    width: 30%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0px;
`;
const RegisterText = styled.Text`
    color: ${({ theme }) => theme.loginGray};
    font-size: 24px;
`;