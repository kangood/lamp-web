import type { NextPage } from 'next';

import Image from 'next/image';

import styles from './index.module.css';

interface IProps {}

const Home: NextPage<IProps> = () => {
    return (
        <>
            <div className={styles.container}>
                {/* 简介 */}
                <div className={styles.intro}>
                    <div className={styles.textGroup}>
                        <h1 className={styles.title}>抖音前端技术团队</h1>
                        <p className={styles.text}>
                            我们是抖音前端技术团队，服务于抖音及字节跳动旗下多个产品线，专注建设前端基础设施，积极探索社区技术。
                        </p>
                    </div>
                    <div className={styles.bodyIcon} />
                </div>
                {/* 体系 */}
                <div className={styles.hierarchy}>
                    <div className={styles.yGroup}>
                        <Image
                            className={styles.img}
                            width={32}
                            height={32}
                            src="https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_cc51a2b4c28d483229f43f47f43b3cba.png"
                            alt="前端工程体系"
                        />
                        <p className={styles.p}>前端工程体系</p>
                    </div>
                    <div className={styles.yGroup}>
                        <Image
                            className={styles.img}
                            width={32}
                            height={32}
                            src="https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_87d88480092f800d401430d17fa03beb.png"
                            alt="Node.js 工程体系"
                        />
                        <p className={styles.p}>Node.js 工程体系</p>
                    </div>
                    <div className={styles.yGroup}>
                        <Image
                            className={styles.img}
                            width={32}
                            height={32}
                            src="https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_0e813455b23f41ec5297b325b7433604.png"
                            alt="跨平台解决方案"
                        />
                        <p className={styles.p}>跨平台解决方案</p>
                    </div>
                    <div className={styles.yGroup}>
                        <Image
                            className={styles.img}
                            width={32}
                            height={32}
                            src="https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_808592aacaa6e604f23c642582544d69.png"
                            alt="安全"
                        />
                        <p className={styles.p}>安全</p>
                    </div>
                    <div className={styles.yGroup}>
                        <Image
                            className={styles.img}
                            width={32}
                            height={32}
                            src="https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_6fcbf36536c4b9cac7d0b1a4fad05ca7.png"
                            alt="效率平台"
                        />
                        <p className={styles.p}>效率平台</p>
                    </div>
                    <div className={styles.yGroup}>
                        <Image
                            className={styles.img}
                            width={32}
                            height={32}
                            src="https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_438203e854de2d4814df0a799c70e09c.png"
                            alt="互动技术"
                        />
                        <p className={styles.p}>互动技术</p>
                    </div>
                </div>
                {/* 技术方向 */}
                <div className={styles.technologyDirection}>
                    <div className={styles.prospect}>
                        <div className={styles.headGroup}>
                            <h2>技术方向</h2>
                            <div className={styles.divide} />
                            <h3>Technology</h3>
                        </div>
                    </div>
                    <div className={styles.content} />
                </div>
            </div>
        </>
    );
};

export default Home;
