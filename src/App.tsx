import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from './config/theme';
import ContentWrapper from './components/content/ContentWrapper';
import { Analytics } from '@vercel/analytics/react';

import AppDrawer from './components/Drawer';
import i18n from './i18n';
import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [language, setLanguage] = useLocalStorage<string>(
    'language',
    i18n.language,
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Analytics />
      <Container
        sx={{
          padding: (theme) => theme.spacing(2),
          height: '100%',
        }}
      >
        <CssBaseline />

        <AppDrawer
          language={language}
          setLanguage={setLanguage}
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
        />
        <ContentWrapper setDrawerOpen={setDrawerOpen} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
