import { FC } from 'react';

import styles from './index.module.css';

export interface INavBarProps {}

export const NavBar: FC<INavBarProps> = () => {
    return (
        <div className={styles.navBar}>
            <a className={styles.link} href="https://lamp.panlore.top">
                <div className={styles.logoImg} />
                <p className={styles.text}>锅气庇人</p>
            </a>
            <div className={styles.sideBar}>
                <div className={styles.textGroup}>
                    <div className={styles.textSingle}>
                        <p className={styles.text}>技术产品</p>
                    </div>
                    <div className={styles.textSingle}>
                        <p className={styles.text}>技术分享</p>
                    </div>
                    <div className={styles.textSingle}>
                        <p className={styles.text}>加入我们</p>
                    </div>
                </div>
                <div className={styles.themeSwitch} />
            </div>
        </div>
    );
};
