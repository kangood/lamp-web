import { FC, useContext } from 'react';

import { Themes } from '@/constants/enum';

import { ThemeContext } from '@/stores/theme';

import styles from './index.module.css';

export interface INavBarProps {}

export const NavBar: FC<INavBarProps> = () => {
    const { setTheme } = useContext(ThemeContext);
    // 切换主题点击处理，和localStorage中存储的比较
    const themeSwitchClickHandle = () => {
        if (Themes.light.localeCompare(localStorage.getItem('theme')) === 0) {
            setTheme(Themes.dark);
        } else {
            setTheme(Themes.light);
        }
    };
    return (
        <div className={styles.navBar}>
            <a className={styles.link} href="https://lamp.panlore.top">
                <div className={styles.logoImg} />
                <p className={styles.text}>茶灯</p>
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
                <div className={styles.themeSwitch} onClick={themeSwitchClickHandle} />
            </div>
        </div>
    );
};
