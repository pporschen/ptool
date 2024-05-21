import { Box, Divider, LinearProgress } from '@mui/material';
import { t } from 'i18next';
import PointerButton from '../PointerControlled/PointerButton';
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { DotsState, StyledCard } from './ContentWrapper';
import { POINTER_DELAY } from '../../config/consts';
import { imageMap } from '../svgs';
import { BodyParts } from './types';
import theme from '../../config/theme';
import { SwitchLeft, SwitchRight } from '@mui/icons-material';

type ImageWrapperProps = {
  pointerInputIsEnabled: boolean;
  pointerCaptureIsEnabled: boolean;
  dots: DotsState;
  setDots: Dispatch<SetStateAction<DotsState>>;
  bodyPartToDisplay: BodyParts;
};

const ImageWrapper = ({
  pointerInputIsEnabled,
  pointerCaptureIsEnabled,
  dots,
  setDots,
  bodyPartToDisplay,
}: ImageWrapperProps) => {
  const [currentPerspective, setCurrentPerspective] = useState(0);
  const [captureProgress, setCaptureProgress] = useState(100);

  const timer = useRef<NodeJS.Timeout | null>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const mousePositionRef = useRef<{ x: number; y: number } | null>(null);

  useLayoutEffect(() => {
    setCurrentPerspective(0);
  }, [bodyPartToDisplay]);

  const currentBodyPart = imageMap[bodyPartToDisplay];
  const currentImage = currentBodyPart[currentPerspective];
  const currentImageId = currentImage?.id;

  const handleMouseMove = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => {
    const svg = event.currentTarget;
    const pt = svg.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;
    const svgP = pt.matrixTransform(svg.getScreenCTM()?.inverse());
    mousePositionRef.current = { x: svgP.x, y: svgP.y };
  };

  const handleBodySVGClick = () => {
    if (!mousePositionRef.current) return;
    setDots((prev) => ({
      ...prev,
      [currentImageId]: {
        x: mousePositionRef.current!.x,
        y: mousePositionRef.current!.y,
        isMirrored: prev[currentImageId]?.isMirrored,
      },
    }));
  };

  const clearTimeouts = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
      progressInterval.current = null;
    }
  };

  const handleActivePointerCaptureEntry = () => {
    if (pointerCaptureIsEnabled) {
      clearTimeouts();
      progressInterval.current = setInterval(() => {
        setCaptureProgress((prev) => {
          return Math.max(prev - 100 / 3, 0);
        });
      }, 500);
      timer.current = setTimeout(handleBodySVGClick, POINTER_DELAY);
    }
  };

  const handleActivePointerCaptureExit = () => {
    if (pointerCaptureIsEnabled) {
      clearInterval(progressInterval.current!);
      setCaptureProgress(100);
      clearTimeouts();
    }
  };

  useEffect(() => {
    return clearTimeouts;
  }, []);

  useEffect(() => clearTimeouts(), [currentPerspective, bodyPartToDisplay]);

  return (
    <StyledCard sx={{ width: '70vw', minHeight: '700px', minWidth: '700px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 2,
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            marginTop: theme.spacing(2),
            minHeight: '700px',
          }}
        >
          {currentBodyPart.map((perspective, index) => (
            <PointerButton
              pointerInputIsEnabled={pointerInputIsEnabled}
              key={index}
              onClick={() => setCurrentPerspective(index)}
              variant="contained"
              color={currentPerspective === index ? 'secondary' : 'primary'}
              sx={{ width: '5rem' }}
            >
              {t(perspective.name)}
            </PointerButton>
          ))}
          {currentImage?.mirrorable && (
            <>
              <Divider sx={{ marginTop: (theme) => theme.spacing(3) }} />
              <PointerButton
                pointerInputIsEnabled={pointerInputIsEnabled}
                onClick={() => {
                  setDots((prev) => ({
                    ...prev,
                    [currentImageId]: {
                      x: prev[currentImageId]?.x,
                      y: prev[currentImageId]?.y,
                      isMirrored: !prev[currentImageId]?.isMirrored,
                    },
                  }));
                }}
                variant="contained"
                color="primary"
              >
                {dots[currentImageId]?.isMirrored ? (
                  <SwitchLeft />
                ) : (
                  <SwitchRight />
                )}
              </PointerButton>
            </>
          )}
        </Box>
        <Box
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            height: '100%',
            cursor: 'crosshair',
          }}
        >
          {currentImage?.svg({
            dot: dots[currentImageId],
            onClick: handleBodySVGClick,
            onMouseEnter: handleActivePointerCaptureEntry,
            onMouseMove: handleMouseMove,
            onMouseLeave: handleActivePointerCaptureExit,
          })}

          <LinearProgress
            variant="determinate"
            value={captureProgress}
            color="secondary"
            sx={{ visibility: pointerCaptureIsEnabled ? 'visible' : 'hidden' }}
          />
        </Box>
      </Box>
    </StyledCard>
  );
};

export default ImageWrapper;
