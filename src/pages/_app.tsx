import type { AppProps } from 'next/app';

import { Layout, ILayoutProps } from '@/components/layout';

import './global.css';

function MyApp(data: AppProps & ILayoutProps) {
    const { Component, pageProps, navbarData, footerData } = data;

    return (
        <div>
            <Layout navbarData={navbarData} footerData={footerData}>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}

export default MyApp;
