import { NextPage } from 'next';

import Image from 'next/image';

import PublicationsProspectPNG from 'public/publications_prospect.png';

import clsx from 'clsx';

import pagesStyles from '../page.module.css';

import styles from './page.module.css';

const Publications: NextPage = () => {
    return (
        <>
            <div className={styles.outer}>
                <div className={styles.up}>
                    <div className={styles.leftImg} />
                    <h1>期刊专栏</h1>
                    <p className={styles.p}>每月与您分享最新的技术进展</p>
                    <div className={styles.rightImg} />
                </div>
                <div className={styles.middle}>
                    <a
                        className={styles.middle}
                        href="/publicationContent/793000000001"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <div
                            className={clsx(
                                pagesStyles.container_feature_publicationsContent_a_divGroup,
                                styles.divGroupAppend,
                            )}
                        >
                            <div
                                className={clsx(
                                    pagesStyles.container_feature_publicationsContent_a_divGroup_leftDiv,
                                    styles.leftDivAppend,
                                )}
                            >
                                <Image
                                    className={
                                        pagesStyles.container_feature_publicationsContent_a_divGroup_leftDiv_Img
                                    }
                                    src={PublicationsProspectPNG}
                                    alt="即将到来"
                                    width={400}
                                    height={200}
                                />
                            </div>
                            <div
                                className={
                                    pagesStyles.container_feature_publicationsContent_a_divGroup_rightDiv
                                }
                            >
                                <p
                                    className={
                                        pagesStyles.container_feature_publicationsContent_a_divGroup_rightDiv_p
                                    }
                                >
                                    2023/10/08
                                </p>
                                <h2
                                    className={
                                        pagesStyles.container_feature_publicationsContent_a_divGroup_rightDiv_h2
                                    }
                                >
                                    即将到来
                                </h2>
                                <p
                                    className={
                                        pagesStyles.container_feature_publicationsContent_a_divGroup_rightDiv_p
                                    }
                                >
                                    茶灯全栈技术周刊 即将到来
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={styles.down}>
                    <ul className={styles.ul}>
                        <li className={styles.li1} />
                        <li className={styles.li2}>1</li>
                        <li className={styles.li3} />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Publications;
