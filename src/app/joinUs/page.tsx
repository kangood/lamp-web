import { NextPage } from 'next';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import styles from './page.module.css';

const Prospect: NextPage = () => {
    return (
        <>
            <div className={styles.top}>
                <h1 className={styles.h1}>在招岗位</h1>
                <p className={styles.p}>工程化、跨平台、可视化搭建、国际化、安全工程等人才招募</p>
            </div>
            <div className="flex justify-center">
                <Tabs defaultValue="eden">
                    <TabsList className="mt-8 mx-auto mb-10 h-11">
                        <TabsTrigger className={styles.tabsTrigger} value="eden">
                            Eden
                        </TabsTrigger>
                        <TabsTrigger className={styles.tabsTrigger} value="kuaduan">
                            跨端
                        </TabsTrigger>
                        <TabsTrigger className={styles.tabsTrigger} value="keshihua">
                            可视化搭建
                        </TabsTrigger>
                        <TabsTrigger className={styles.tabsTrigger} value="gecko">
                            Gecko
                        </TabsTrigger>
                        <TabsTrigger className={styles.tabsTrigger} value="xiaolvpt">
                            效率平台
                        </TabsTrigger>
                        <TabsTrigger className={styles.tabsTrigger} value="i18n">
                            国际化
                        </TabsTrigger>
                        <TabsTrigger className={styles.tabsTrigger} value="security">
                            安全
                        </TabsTrigger>
                        <TabsTrigger className={styles.tabsTrigger} value="antd">
                            Ant Design
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="eden">
                        <div className={styles.tabsContent}>
                            <div className={styles.up}>
                                <div className={styles.inside}>
                                    <div className={styles.head}>
                                        <h3 className={styles.h3}>前端开发工程师-工程化方向</h3>
                                        <p className={styles.p}>Base: 北京、杭州</p>
                                    </div>
                                    <div className={styles.content}>
                                        <h4 className={styles.h4}>职位描述</h4>
                                        <div className={styles.outward}>
                                            <div>
                                                <p>
                                                    负责茶灯官网、茶灯后台等业务大规模复杂业务场景的前端架构设计、实现和优化
                                                </p>
                                                <p>
                                                    1、负责PC、H5、Hybrid、App
                                                    Native、BFF、RPC等一种或几种技术场景的架构；
                                                </p>
                                                <p>
                                                    2、制定开发规范，工程化体系搭建及优化，提升开发效率、质量和性能，保障业务稳定运行；
                                                </p>
                                                <p>3、发现现有流程及架构的问题，并持续进行优化；</p>
                                            </div>
                                            <p>...</p>
                                        </div>
                                    </div>
                                    <button className={styles.btn}>查看详情</button>
                                </div>
                            </div>
                            <div className={styles.down}>
                                <ul className={styles.ul}>
                                    <li className={styles.li1} />
                                    <li className={styles.li2}>1</li>
                                    <li className={styles.li3} />
                                </ul>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="kuaduan">
                        <div className={styles.tabsContent}>
                            <div className={styles.up}>
                                <div className={styles.inside}>
                                    <div className={styles.head}>
                                        <h3 className={styles.h3}>跨平台框架前端开发工程师</h3>
                                        <p className={styles.p}>Base: 杭州</p>
                                    </div>
                                    <div className={styles.content}>
                                        <h4 className={styles.h4}>职位描述</h4>
                                        <div className={styles.outward}>
                                            <div>
                                                <p>1. 参与公司内跨平台框架和组件的开发和维护</p>
                                                <p>2. 参与公司跨平台技术标准化工作的设计和实现</p>
                                                <p>
                                                    3.
                                                    参与浏览器内核的建设和方案评估，结合社区已有的解决方案为内核提供优化
                                                </p>
                                                <p>
                                                    4. 参与推进跨平台动态化方案在 IES
                                                    及茶灯各产品内落地
                                                </p>
                                                <p>
                                                    5.
                                                    进行相关前沿技术的探索，寻找与技术方案和业务场景的结合点并验证落地
                                                </p>
                                            </div>
                                            <p>...</p>
                                        </div>
                                    </div>
                                    <button className={styles.btn}>查看详情</button>
                                </div>
                            </div>
                            <div className={styles.down} />
                        </div>
                    </TabsContent>
                    <TabsContent value="keshihua">暂无</TabsContent>
                    <TabsContent value="gecko">暂无</TabsContent>
                    <TabsContent value="xiaolvpt">暂无</TabsContent>
                    <TabsContent value="i18n">暂无</TabsContent>
                    <TabsContent value="security">暂无</TabsContent>
                    <TabsContent value="antd">暂无</TabsContent>
                </Tabs>
            </div>
        </>
    );
};

export default Prospect;
