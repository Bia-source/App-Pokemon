import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components';
import { useFonts, Lusitana_400Regular, Lusitana_700Bold } from '@expo-google-fonts/lusitana';

import theme from './src/theme/theme';
import styled from 'styled-components/native';
import { Routes } from '@routes/index';
import { ViewProps } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ Lusitana_400Regular, Lusitana_700Bold })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" translucent />
      {fontsLoaded &&
        //  <Welcome />
        <Container>
          <Routes/>
        </Container>
         
        
      }
    </ThemeProvider>
  );
}

type ContainerProps = ViewProps & {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps){
  return(
   <>
    {children}
   </>
  )
}
