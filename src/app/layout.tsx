'use client';

import type { Metadata } from 'next';

import { INavBarProps, NavBar } from '@/components/navbar/page';
import { Footer, IFooterProps } from '@/components/footer/page';
import { ThemeContextProvider } from '@/stores/theme';

import '@/styles/index.css';

import styles from './layout.module.css';

export const metadata: Metadata = {
    title: '3rapp',
    description: '3r教室TS全栈课程',
};

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
                        <div className={styles.divide} />
                        <main>{children}</main>
                        <Footer {...footerData} />
                    </div>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
