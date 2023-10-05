import type { AppProps } from 'next/app';

import { Layout, ILayoutProps } from '@/components/layout';
import { ThemeContextProvider } from '@/stores/theme';

import './global.scss';

function MyApp(data: AppProps & ILayoutProps) {
    const { Component, pageProps, navbarData, footerData } = data;

    return (
        <div>
            <ThemeContextProvider>
                <Layout navbarData={navbarData} footerData={footerData}>
                    <Component {...pageProps} />
                </Layout>
            </ThemeContextProvider>
        </div>
    );
}

export default MyApp;
