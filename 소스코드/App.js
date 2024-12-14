import React, { useState,  createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './Screen/loginScreen';
import MainScreen from './Screen/mainScreen';
import { weeklyDatas } from './datas';

const Stack = createStackNavigator();
export const DataContext = createContext();

/*
-useFont, AsyncStorage 등 활용된 라이브러리 관련 코드는 사용 방법을 이해하여 어플리케이션에 맞게 작성
-이외 부분들 또한 강의 중 학습한 내용을 바탕으로 작성
-AppLoading 및 Navigate 관련 라이브러리는 강의 중 배운 부분을 인용
*/

const App = () => 
{
    const [isReady, setIsReady] = useState(false);

    const [fontsLoaded] = useFonts({
        'SUIT-Heavy': require('../assets/Fonts/SUIT-Heavy.ttf'),
        'SUIT-ExtraBold': require('../assets/Fonts/SUIT-ExtraBold.ttf'),
        'SUIT-Medium': require('../assets/Fonts/SUIT-Medium.ttf'),
        'SUIT': require('../assets/Fonts/SUIT-Regular.ttf'),
        'SUIT-SemiBold': require('../assets/Fonts/SUIT-SemiBold.ttf'),
        'GG-Bold': require('../assets/Fonts/GG_Bold.ttf'),
    });

    const loadData = async () => 
    {
        const loadedWeek = await AsyncStorage.getItem('week');
        const weekData = JSON.parse(loadedWeek);

        weekData.forEach((item, index) => {
            weeklyDatas[index] = item;
        });
        
    }

    if (!fontsLoaded || !isReady) 
    {
        return <AppLoading 
                startAsync={loadData}
                onFinish={() => {setIsReady(true);}}
                onError={console.log('에러 발생!')}/>;
    }
    else
    {
        return(
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <Stack.Navigator  screenOptions={{ animation: 'fade', headerShown: false }}>
                        <Stack.Screen name="Login" component={LoginScreen}/>
                        <Stack.Screen name="Main" component={MainScreen}/>
                    </Stack.Navigator>
                 </NavigationContainer>
            </ThemeProvider>
        ); 
    }
};

export default App;