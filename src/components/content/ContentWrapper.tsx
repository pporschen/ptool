import { Box, Card, Fab, styled } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import { usePointerInputStatusStore } from '../../stores/PointerInputStatusStore';
import ImageWrapper from './ImageWrapper';
import OptionsWrapper from './OptionsWrapper';
import { BodyParts, PainLevels, FormData, PainSources } from './types';
import { Settings } from '@mui/icons-material';
import theme from '../../config/theme';
import useLocalStorage from '../../hooks/useLocalStorage';

export type Dot = { x: number; y: number; isMirrored?: boolean };
type DotSource = string;

export type DotsState = Record<DotSource, Dot>;

type ContentWrapperProps = {
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
};

const ContentWrapper = ({ setDrawerOpen }: ContentWrapperProps) => {
  const { pointerInputIsEnabled } = usePointerInputStatusStore(
    (state) => state,
  );
  const [pointerCaptureIsEnabled, setPointerCaptureIsEnabled] = useState(false);
  const [dots, setDots] = useState<DotsState | {}>({});
  const [bodyPart, setBodyPart] = useLocalStorage<BodyParts>(
    'bodyPart',
    BodyParts.male,
  );
  const [formData, setFormData] = useState<FormData>({
    painLevel: PainLevels.none,
    bodyPart: bodyPart,
    painSource: PainSources.none,
  });

  return (
    <Box
      display="flex"
      gap={2}
      justifyContent={'center'}
      height={'100%'}
      width={'100%'}
      sx={{
        flex: 1, // Take all available space
        alignItems: 'stretch', // Make children use full height
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing(1),
          justifyContent: 'flex-end',
          marginBottom: theme.spacing(15),
        }}
      >
        <Fab
          color="secondary"
          aria-label="add"
          onMouseEnter={() => setDrawerOpen(true)}
          sx={{
            width: '68px !important',
            height: '68px !important',
            minWidth: '68px !important',
            minHeight: '68px !important',
            maxWidth: '68px !important',
            maxHeight: '68px !important',
            boxSizing: 'border-box !important',
            '& .MuiSvgIcon-root': {
              fontSize: '1.75rem !important',
            },
          }}
        >
          <Settings />
        </Fab>
      </Box>
      <ImageWrapper
        pointerInputIsEnabled={pointerInputIsEnabled}
        pointerCaptureIsEnabled={pointerCaptureIsEnabled}
        dots={dots}
        setDots={setDots}
        bodyPartToDisplay={formData.bodyPart}
      />
      <OptionsWrapper
        pointerCaptureIsEnabled={pointerCaptureIsEnabled}
        pointerInputIsEnabled={pointerInputIsEnabled}
        setPointerCaptureIsEnabled={setPointerCaptureIsEnabled}
        setDots={setDots}
        formData={formData}
        setFormData={setFormData}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
};

export default ContentWrapper;

export const StyledCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  flex: 1; /* Take equal space in the parent container */
`;
