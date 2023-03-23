import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { Home } from './components/Home';
import { WordCount } from './components/WordCount';

const Stack = createNativeStackNavigator()

export default function App() {
  const [inputText, setInputText] = useState("")

  const changeTextValue = (text) => {
    setInputText(text)
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home">
          {(props) => <Home {...props} changeTextValue={changeTextValue} textValue={inputText} />}
        </Stack.Screen>
        <Stack.Screen name="Word Count">
          {(props) => <WordCount {...props} textValue={inputText} />}
        </Stack.Screen>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>

  );
}
