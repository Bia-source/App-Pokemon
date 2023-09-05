import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components';
import { useFonts, Lusitana_400Regular, Lusitana_700Bold } from '@expo-google-fonts/lusitana';

import theme from './src/theme/theme';
import { Welcome } from '@screens/Welcome';
import { Home } from '@screens/Home';
import styled from 'styled-components/native';


export default function App() {
  const [fontsLoaded] = useFonts({ Lusitana_400Regular, Lusitana_700Bold })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" translucent />
      {fontsLoaded &&
        //  <Welcome />
        <Container>
          <Home />
        </Container>
      }
    </ThemeProvider>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
`