'use client';

import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@/utils/createEmotionCache';
import { CssBaseline } from '@mui/material';

const clientSideEmotionCache = createEmotionCache();

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <CssBaseline />
      {children}
    </CacheProvider>
  );
}
