import { Box, List, ListItem, styled, Drawer } from '@mui/material';
import { t } from 'i18next';
import LanguageSelect from './LanguageSelect';
import PointerButton from './PointerControlled/PointerButton';
import { Dispatch, SetStateAction } from 'react';
import { usePointerInputStatusStore } from '../stores/PointerInputStatusStore';

type AppDrawerProps = {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
};

const AppDrawer = ({
  language,
  setLanguage,
  drawerOpen,
  setDrawerOpen,
}: AppDrawerProps) => {
  const { pointerInputIsEnabled, setPointerInputIsEnabled } =
    usePointerInputStatusStore((state) => state);

  const handlePointerInputToggle = () => {
    setPointerInputIsEnabled(!pointerInputIsEnabled);
  };
  return (
    <>
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ width: '30vw' }}
      >
        <Box width={'300px'}>
          <Logo>PAINPOINTER</Logo>
          <List
            sx={{ display: 'flex', flexDirection: 'column', height: '88vh' }}
          >
            <ListItem>
              <LanguageSelect
                pointerInputIsEnabled={pointerInputIsEnabled}
                language={language}
                setLanguage={setLanguage}
              />
            </ListItem>
            <ListItem sx={{ marginTop: 'auto' }}>
              <PointerButton
                pointerInputIsEnabled
                variant="contained"
                color="secondary"
                onClick={handlePointerInputToggle}
                fullWidth
              >
                {pointerInputIsEnabled
                  ? t('Disable Pointer Input')
                  : t('Enable Pointer Input')}
              </PointerButton>
            </ListItem>
            <ListItem>
              <PointerButton
                pointerInputIsEnabled={pointerInputIsEnabled}
                variant="contained"
                onClick={() => setDrawerOpen(false)}
                fullWidth
              >
                {t('Close')}
              </PointerButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default AppDrawer;

const Logo = styled(Box)`
  font-size: 2rem;
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: ${({ theme }) => theme.spacing(2)};
  font-weight: 800;
  font-style: italic;
  font-family: 'Montserrat', sans-serif;
`;
