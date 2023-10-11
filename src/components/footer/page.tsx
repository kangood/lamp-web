import { FC } from 'react';

import clsx from 'clsx';

import styles from './page.module.css';

export interface IFooterProps {
    title: string;
    copyRight: string;
    siteNumber: string; // 站点备案号
    publicNumber: string; // 公安备案号
}

export const Footer: FC<IFooterProps> = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.up}>
                <div className={styles.left}>
                    <div className={styles.div}>
                        <h2 className={styles.h2}>茶灯</h2>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.singleGroup}>
                        <div className={styles.div}>了解更多</div>
                        <a
                            className={clsx(styles.a, styles.opacity)}
                            href="https://panlore.top"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            博客
                        </a>
                    </div>
                    <div className={styles.singleGroup}>
                        <div className={styles.div}>产品</div>
                        <a
                            className={clsx(styles.a, styles.opacity)}
                            href="https://nextjs.org"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Next.JS
                        </a>
                        <a
                            className={clsx(styles.a, styles.opacity)}
                            href="https://ant.design"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Ant Design
                        </a>
                        <a
                            className={clsx(styles.a, styles.opacity)}
                            href="https://nestjs.com"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            NestJS
                        </a>
                        <a
                            className={clsx(styles.a, styles.opacity)}
                            href="https://tailwindcss.com"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Tailwind CSS
                        </a>
                        <a className={styles.a}>跨端解决方案</a>
                    </div>
                    <div className={styles.singleGroup}>
                        <div className={styles.div}>加入我们</div>
                        <a
                            className={clsx(styles.a, styles.opacity)}
                            href="/joinUs"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            在招岗位
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.down} />
        </div>
    );
};
