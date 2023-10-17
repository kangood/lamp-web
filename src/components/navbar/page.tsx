import { FC, useContext } from 'react';

import clsx from 'clsx';

import Image from 'next/image';

import * as AntDesignLogoSVG from 'public/ant_design_logo.svg';

import * as NestJSLogoSVG from 'public/nestjs_logo.svg';

import { Themes } from '@/constants/enum';

import { ThemeContext } from '@/stores/theme';

import { HoverCard, HoverCardTrigger, HoverCardContent } from '../ui/hover-card';

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
    // 滚动到期刊专栏
    const toLocationFeature = () => {
        const dom = document.getElementById('feature');
        if (dom) {
            dom.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <div className={styles.navBar}>
            <a className={styles.link} href="/">
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
                        <HoverCard openDelay={0}>
                            <HoverCardTrigger className={styles.text}>技术产品</HoverCardTrigger>
                            <HoverCardContent>
                                <ul>
                                    <li className="navbar_technologyProduct_hoverCard">
                                        <div className="outwardDiv">
                                            <span
                                                className={clsx(
                                                    'nextLogoBase',
                                                    'w-8 h-8 border-[0.125rem]',
                                                )}
                                            />
                                            <div className="inwardDiv">
                                                <p className="p1">Next.JS</p>
                                                <p className="p2">新一代全栈 Web 应用程序</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="navbar_technologyProduct_hoverCard">
                                        <div className="outwardDiv">
                                            <div>
                                                <Image
                                                    src={AntDesignLogoSVG}
                                                    alt="AntDesignLogoSVG"
                                                    width={32}
                                                    height={32}
                                                />
                                            </div>
                                            <div className="inwardDiv">
                                                <p className="p1">Ant Design</p>
                                                <p className="p2">中后台企业级 React UI 组件库</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="navbar_technologyProduct_hoverCard">
                                        <div className="outwardDiv">
                                            <Image
                                                src={NestJSLogoSVG}
                                                alt="NestJSLogoSVG"
                                                width={32}
                                                height={32}
                                            />
                                            <div className="inwardDiv">
                                                <p className="p1">NestJS</p>
                                                <p className="p2">服务器端 Web 应用的开发框架</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="navbar_technologyProduct_hoverCard">
                                        <div className="outwardDiv">
                                            <svg viewBox="0 0 50 31" className="w-auto h-5">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                                                    fill="#38bdf8"
                                                />
                                            </svg>
                                            <div className="inwardDiv">
                                                <p className="p1">TailwindCSS</p>
                                                <p className="p2">功能类优先的原子化 CSS 框架</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                    <div className={styles.textSingle}>
                        <button className={styles.text} onClick={toLocationFeature}>
                            技术分享
                        </button>
                    </div>
                    <div className={styles.textSingle}>
                        <HoverCard openDelay={0}>
                            <HoverCardTrigger className={styles.text}>加入我们</HoverCardTrigger>
                            <HoverCardContent className="w-28 p-2 hover:bg-[var(--secondary-color-9)]">
                                <a className="text-sm font-medium" href="/joinUs">
                                    在招岗位
                                </a>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                </div>
                <div className={styles.themeSwitch} onClick={themeSwitchClickHandle} />
            </div>
        </div>
    );
};
