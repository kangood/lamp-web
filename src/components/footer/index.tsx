import { FC } from 'react';

import clsx from 'clsx';

import styles from './index.module.css';

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
                            href="https://juejin.cn/team/6995012409286983680/posts"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            掘金
                        </a>
                    </div>
                    <div className={styles.singleGroup}>
                        <div className={styles.div}>产品</div>
                        <a className={styles.a}>Eden</a>
                        <a
                            className={clsx(styles.a, styles.opacity)}
                            href="https://semi.design/zh-CN"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Semi
                        </a>
                        <a className={styles.a}>MIS</a>
                        <a className={styles.a}>魔方</a>
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
