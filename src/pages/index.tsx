import type { NextPage } from 'next';

import Image from 'next/image';

import { useContext } from 'react';

import clsx from 'clsx';

import { ThemeContext } from '@/stores/theme';

import { Themes } from '@/constants/enum';

import styles from './index.module.css';

interface IProps {}

const Home: NextPage<IProps> = () => {
    const { theme } = useContext(ThemeContext);
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
                    <div className={styles.directionContent}>
                        <div className={styles.singleOuter}>
                            <div className={styles.singleMiddle}>
                                <div className={styles.singleInner}>
                                    <h3 className={styles.h3}>前端工程化 Eden</h3>
                                    <p className={styles.p}>
                                        从场景、规范、工具、框架、平台、生态等方面进行建设；从效率、性能、质量等维度进行业务支撑，形成体系化、生态化、渐进式的工程化体系方案。主打技术品牌为
                                        Eden，定位为新一代前端研发体系，
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.singleOuter}>
                            <div className={styles.singleMiddle}>
                                <div className={styles.singleInner}>
                                    <h3 className={styles.h3}>跨端方向</h3>
                                    <p className={styles.p}>
                                        在保证用户体验的前提下致力于以大前端技术栈提升产品迭代速度，
                                        致力于打造最顶级的跨端技术开发栈。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.singleOuter}>
                            <div className={styles.singleMiddle}>
                                <div className={styles.singleInner}>
                                    <h3 className={styles.h3}>低代码</h3>
                                    <p className={styles.p}>
                                        字节系活动、中后台搭建的基石，专注搭建领域多年。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.singleOuter}>
                            <div className={styles.singleMiddle}>
                                <div className={styles.singleInner}>
                                    <h3 className={styles.h3}>效率平台</h3>
                                    <p className={styles.p}>
                                        为抖音和字节的其他各大业务线建设强有力的中台支撑，包括体验中台和技术中台，专注研发效能和
                                        DevOps 领域，目前支撑互娱团队数千研发的日常开发工作。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.singleOuter}>
                            <div className={styles.singleMiddle}>
                                <div className={styles.singleInner}>
                                    <h3 className={styles.h3}>设计系统 Semi</h3>
                                    <p className={styles.p}>
                                        一套优质美观的企业级设计系统，致力提升中后台研发效率和用户体验。目前包含组件库，物料平台，设计系统管理平台和
                                        D2C 等子方向。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.singleOuter}>
                            <div className={styles.singleMiddle}>
                                <div className={styles.singleInner}>
                                    <h3 className={styles.h3}>资源分发中台 Gecko</h3>
                                    <p className={styles.p}>字节跳动客户端资源分发中台。</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.singleOuter}>
                            <div className={styles.singleMiddle}>
                                <div className={styles.singleInner}>
                                    <h3 className={styles.h3}>安全</h3>
                                    <p className={styles.p}>
                                        提供应用从问题预防、问题发现、问题响应、安全评估、安全防护等系统性的解决方案。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.singleOuter}>
                            <div className={styles.singleMiddle}>
                                <div className={styles.singleInner}>
                                    <h3 className={styles.h3}>国际化</h3>
                                    <p className={styles.p}>
                                        是一个智能国际化翻译平台，为团队提供高效专业的【平台+服务】解决方案，简化本地化管理/发布/接入流程，提高多种场景的多语言翻译效率。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 技术产品 */}
                <div className={styles.technologyProduct}>
                    <h2 className={styles.title}>技术产品</h2>
                    <div className={styles.content}>
                        <div className={clsx(styles.labelBasic, styles.labelPlus)}>
                            <Image
                                src={
                                    theme === Themes.light
                                        ? 'https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_ac86dc032f6c74b2f1bc22264b9257d1.png'
                                        : 'https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_4566e52ba2e2857eb9626198a5390409.png'
                                }
                                alt="Eden"
                                width={168}
                                height={50}
                            />
                        </div>
                        <a
                            className={styles.labelBasic}
                            href="https://semi.design"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Image
                                src={
                                    theme === Themes.light
                                        ? 'https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_626d679207378929f2da38b23b64e064.png'
                                        : 'https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_75a22dd5582d865259bc8c61fdfece60.png'
                                }
                                alt="semi design"
                                width={168}
                                height={50}
                            />
                        </a>
                        <div className={clsx(styles.labelBasic, styles.labelPlus)}>
                            <Image
                                src={
                                    theme === Themes.light
                                        ? 'https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_2d02a129d91c22899ef40ed4d2e91b2f.png'
                                        : 'https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_23f913e4ac74b00839970c9e64bdb6ae.png'
                                }
                                alt="魔方"
                                width={168}
                                height={50}
                            />
                        </div>
                        <div className={clsx(styles.labelBasic, styles.labelPlus)}>
                            <Image
                                src={
                                    theme === Themes.light
                                        ? 'https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_4fb28298da0fe1a491642e2821799e68.png'
                                        : 'https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_818711a36e349391401496918151e199.png'
                                }
                                alt="MIS"
                                width={168}
                                height={50}
                            />
                        </div>
                    </div>
                </div>
                {/* 期刊专栏，复用技术方向 */}
                <div className={clsx(styles.technologyDirection)}>
                    <div className={styles.prospect}>
                        <div className={styles.headGroup}>
                            <h2>期刊专栏</h2>
                            <div className={styles.divide} />
                            <h3>Publications</h3>
                        </div>
                        <a href="/publications" rel="noopener noreferrer" target="_blank">
                            <button className={styles.btn}>查看更多</button>
                        </a>
                    </div>
                    <div className={styles.publicationsContent}>
                        <a className={styles.a} href="/publicationContent/793000000001">
                            <div className={styles.divGroup}>
                                <div className={styles.leftDiv}>
                                    <Image
                                        src="https://lf3-beecdn.bytetos.com/obj/ies-fe-bee/bee_prod/biz_1007/tos_c2b002fd79fbd517f6778c253f2a473c.png"
                                        alt="即将到来"
                                        width={560}
                                        height={280}
                                    />
                                </div>
                                <div className={styles.rightDiv}>
                                    <p className={styles.p}>2021/10/27</p>
                                    <h2 className={styles.h2}>即将到来</h2>
                                    <p className={styles.p}>抖音前端技术周刊 即将到来</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                {/* 加入我们 */}
                <div className={styles.joinUs}>
                    <div className={styles.up}>
                        <p className={styles.p}>
                            在保证用户体验的前提下致力于以大前端技术栈提升产品迭代速度，
                            致力于打造最顶级的跨端技术开发栈。
                        </p>
                        <a href="/joinUs" rel="noopener noreferrer" target="_blank">
                            <button className={styles.btn}>加入我们</button>
                        </a>
                    </div>
                    <div className={styles.down}>
                        <div className={styles.bg} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
