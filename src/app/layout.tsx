'use client';

import { INavBarProps, NavBar } from '@/components/navbar/page';
import { Footer, IFooterProps } from '@/components/footer/page';
import { ThemeContextProvider } from '@/stores/theme';

import '@/styles/index.css';

export interface ILayoutProps {
    navbarData: INavBarProps;
    footerData: IFooterProps;
}

export default function RootLayout({
    navbarData,
    footerData,
    children,
}: ILayoutProps & { children: JSX.Element }) {
    return (
        <html lang="en">
            <body>
                <ThemeContextProvider>
                    <div>
                        <NavBar {...navbarData} />
                        <div className="w-[100%] h-16" />
                        <main>{children}</main>
                        <Footer {...footerData} />
                    </div>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
