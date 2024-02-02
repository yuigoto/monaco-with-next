import { ReactNode } from "react";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import DefaultTheme from "@/themes/Default.theme";

interface RootLayoutProps {
  children?: ReactNode;
}

const RootLayout = ({ children = null }: RootLayoutProps) => {
  return (
    <html lang={'pt-BR'} translate={'no'}>
      <body>
        <AppRouterCacheProvider
          options={{
            key: 'ceres',
          }}
        >
          <ThemeProvider theme={DefaultTheme}>
            <CssBaseline />

            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

export default RootLayout;
