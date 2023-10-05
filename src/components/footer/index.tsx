import { FC } from 'react';

import styles from './index.module.css';

export interface IFooterProps {
    title: string;
    copyRight: string;
    siteNumber: string; // 站点备案号
    publicNumber: string; // 公安备案号
}

export const Footer: FC<IFooterProps> = () => {
    return <div className={styles.footer}>footer</div>;
};
