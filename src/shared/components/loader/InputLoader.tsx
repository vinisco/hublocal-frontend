import { LinearProgress } from '@mui/material';

export const InputLoader: React.FC = () => {
  return (
    <LinearProgress
      classes={{
        bar: `bg-#0385FD`,
      }}
    />
  );
};
