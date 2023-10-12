import { FC, useContext } from 'react';

import { Themes } from '@/constants/enum';

import { ThemeContext } from '@/stores/theme';

import styles from './page.module.css';

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
    // 滚动到技术产品
    const toLocationTechnologyProduct = () => {
        const dom = document.getElementById('technologyProduct');
        if (dom) {
            dom.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    // 滚动到期刊专栏
    const toLocationFeature = () => {
        const dom = document.getElementById('feature');
        if (dom) {
            dom.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
                        <a
                            className={styles.text}
                            href="https://lamp.panlore.top"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            进入后台
                        </a>
                    </div>
                    <div className={styles.textSingle}>
                        <button className={styles.text} onClick={toLocationTechnologyProduct}>
                            技术产品
                        </button>
                    </div>
                    <div className={styles.textSingle}>
                        <button className={styles.text} onClick={toLocationFeature}>
                            技术分享
                        </button>
                    </div>
                    <div className={styles.textSingle}>
                        <a
                            className={styles.text}
                            href="/joinUs"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            加入我们
                        </a>
                    </div>
                </div>
                <div className={styles.themeSwitch} onClick={themeSwitchClickHandle} />
            </div>
        </div>
    );
};
