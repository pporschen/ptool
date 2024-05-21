import { Button, ButtonProps, LinearProgress } from '@mui/material';
import usePointerControl from '../../hooks/usePointerControl';

type PointerButtonProps = {
  pointerInputIsEnabled: boolean;
  onClick: () => void;
} & ButtonProps;

const PointerButton = ({
  pointerInputIsEnabled,
  onClick,
  ...props
}: PointerButtonProps) => {
  const {
    isDwelling,
    dwellingDelayPassed,
    handlePointerEntry,
    handlePointerLeave,
    dwellingProgress,
  } = usePointerControl({ action: onClick, pointerInputIsEnabled });

  const handleClick = () => {
    if (!pointerInputIsEnabled) onClick();
  };

  return (
    <Button
      onClick={handleClick}
      onMouseEnter={handlePointerEntry}
      onMouseLeave={handlePointerLeave}
      disableRipple={pointerInputIsEnabled}
      {...props}
    >
      {isDwelling && dwellingDelayPassed && (
        <LinearProgress
          variant="determinate"
          value={dwellingProgress}
          color="secondary"
          sx={{ width: '100%' }}
        />
      )}
      {(!isDwelling || !dwellingDelayPassed) && props.children}
    </Button>
  );
};

export default PointerButton;
