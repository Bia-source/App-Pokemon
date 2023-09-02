import { StatusBar } from 'expo-status-bar';
import { useFonts, NunitoSans_700Bold, NunitoSans_400Regular} from '@expo-google-fonts/nunito-sans'; 
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/theme';

export default function App() {
  const [fontsLoad] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
         backgroundColor='transparent'
         translucent
      />
      
    </ThemeProvider>
  );
}

