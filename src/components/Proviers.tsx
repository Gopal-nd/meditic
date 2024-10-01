'use client';

import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
export default function Providers({ children }: { children: React.ReactNode }) {

    const queryClient = new QueryClient();
    return <>
    <QueryClientProvider client={queryClient}>
    <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
    </QueryClientProvider>
    </>;
}