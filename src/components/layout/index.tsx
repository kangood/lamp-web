import { FC } from 'react';

import { IFooterProps, Footer } from '../footer/index';
import { INavBarProps, NavBar } from '../navbar/index';

import styles from './index.module.css';

export interface ILayoutProps {
    navbarData: INavBarProps;
    footerData: IFooterProps;
}

export const Layout: FC<ILayoutProps & { children: JSX.Element }> = ({
    navbarData,
    footerData,
    children,
}) => {
    return (
        <div className={styles.layout}>
            <NavBar {...navbarData} />
            <div className={styles.divide} />
            <main className={styles.main}>{children}</main>
            <Footer {...footerData} />
        </div>
    );
};
