import React from 'react';

import {ThemeProvider} from '@/providers/ThemeProvider';
import {Routes} from '@/routes';

const App = (): React.ReactNode => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
