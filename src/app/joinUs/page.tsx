import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';

import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';

import styles from './page.module.css';

interface IProps {
    tabName: string;
    title: string;
    subtitle: string;
    descriptionList: string[];
    descriptionAppendList?: string[];
    requireList?: string[];
    bonusPointList?: string[];
}

const JoinUs = async () => {
    const data = await getData();
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
                    {data?.map((item) => {
                        return (
                            <TabsContent value={item.tabName}>
                                <div className={styles.tabsContent}>
                                    <div className={styles.up}>
                                        <div className={styles.inside}>
                                            <div className={styles.head}>
                                                <h3 className={styles.h3}>{item.title}</h3>
                                                <p className={styles.p}>Base: {item.subtitle}</p>
                                            </div>
                                            <div className={styles.content}>
                                                <h4 className={styles.h4}>职位描述</h4>
                                                <div className={styles.outward}>
                                                    <div>
                                                        {item.descriptionList.map(
                                                            (descriptionSub) => {
                                                                return <p>{descriptionSub}</p>;
                                                            },
                                                        )}
                                                    </div>
                                                    <p>...</p>
                                                </div>
                                            </div>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <button className={styles.btn}>查看详情</button>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-2xl z-[101]">
                                                    <DialogHeader>
                                                        <DialogTitle>
                                                            <div className="pb-6 border-b border-solid border-[var(--secondary-color-16)]">
                                                                <h2 className="text-2xl mb-2">
                                                                    {item.title}
                                                                </h2>
                                                                <p className="font-normal text-sm text-[var(--secondary-color)]">
                                                                    {item.subtitle}
                                                                </p>
                                                            </div>
                                                        </DialogTitle>
                                                        <DialogDescription className="pt-3 h-[30rem] overflow-y-scroll">
                                                            <div className="mb-8">
                                                                <h4 className="text-lg mb-3">
                                                                    职位描述
                                                                </h4>
                                                                <div className="text-base">
                                                                    {item.descriptionList
                                                                        .concat(
                                                                            item.descriptionAppendList,
                                                                        )
                                                                        .map((description) => {
                                                                            return (
                                                                                <p>{description}</p>
                                                                            );
                                                                        })}
                                                                </div>
                                                            </div>
                                                            <div className="mb-8">
                                                                <h4 className="text-lg mb-3">
                                                                    职位要求
                                                                </h4>
                                                                <div className="text-base">
                                                                    {item.requireList
                                                                        ? item.requireList.map(
                                                                              (require) => {
                                                                                  return (
                                                                                      <p>
                                                                                          {require}
                                                                                      </p>
                                                                                  );
                                                                              },
                                                                          )
                                                                        : '暂无'}
                                                                </div>
                                                            </div>
                                                            <div className="mb-8">
                                                                <h4 className="text-lg mb-3">
                                                                    加分项
                                                                </h4>
                                                                <div className="text-base">
                                                                    <div>
                                                                        {item.bonusPointList
                                                                            ? item.bonusPointList.map(
                                                                                  (bonusPoint) => {
                                                                                      return (
                                                                                          <p>
                                                                                              {
                                                                                                  bonusPoint
                                                                                              }
                                                                                          </p>
                                                                                      );
                                                                                  },
                                                                              )
                                                                            : '暂无'}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <DialogFooter>
                                                        <Popover>
                                                            <PopoverTrigger>
                                                                <Button type="submit">
                                                                    申请职位
                                                                </Button>
                                                            </PopoverTrigger>
                                                            <PopoverContent
                                                                side="top"
                                                                className="z-[102] flex justify-center"
                                                            >
                                                                该职位已下线
                                                            </PopoverContent>
                                                        </Popover>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>
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
                        );
                    })}
                </Tabs>
            </div>
        </>
    );
};

const getData = async (): Promise<IProps[]> => {
    return [
        {
            tabName: 'eden',
            title: '前端开发工程师-工程化方向',
            subtitle: '北京、杭州',
            descriptionList: [
                '1、负责茶灯官网、茶灯后台等业务大规模复杂业务场景的前端架构设计、实现和优化',
                '2、负责PC、H5、Hybrid、App Native、BFF、RPC等一种或几种技术场景的架构；',
                '3、制定开发规范，工程化体系搭建及优化，提升开发效率、质量和性能，保障业务稳定运行；',
            ],
            descriptionAppendList: [
                '4、发现现有流程及架构的问题，并持续进行优化；',
                '5、解决业务遇到的技术痛点和难点；',
                '6、跟进业内前沿技术，保证团队技术的先进性。',
            ],
            requireList: [
                '1、本科及以上学历，计算机及相关专业；计算机基础扎实，熟悉数据结构、网络等；',
                '2、有一定的架构和方案设计能力及经验，具备一定的方案沟通和推动能力；',
                '3、对后端技术有一定了解，熟悉一门后端语言（java/go等）；',
                '4、对前端工程化（例如构建方面：webpack、rollup等）、Nodejs、渲染框架（例如react或vue等）、中后台搭建系统等至少其一有一定深度的实践经验者优先；',
                '5、有大型网站架构经验者优先；有较高的技术热情和积极性者优先。',
            ],
            bonusPointList: ['1、参与或主导过优秀的开源项目；', '2、有优秀的技术博文、博客。'],
        },
        {
            tabName: 'kuaduan',
            title: '跨平台框架前端开发工程师',
            subtitle: '杭州',
            descriptionList: [
                '1、参与公司内跨平台框架和组件的开发和维护',
                '2、参与公司跨平台技术标准化工作的设计和实现',
                '3、参与浏览器内核的建设和方案评估，结合社区已有的解决方案为内核提供优化',
            ],
            descriptionAppendList: [
                '4、参与推进跨平台动态化方案在 IES及茶灯各产品内落地',
                '5、进行相关前沿技术的探索，寻找与技术方案和业务场景的结合点并验证落地',
            ],
            requireList: [
                '1、有框架开发经验，熟悉 Vue/Angular/ React等常用前端框架的设计原理',
                '2、有中大型前端工程开发经验，有架构意识，熟悉模块化、前端编译和构建工具',
                '3、熟悉业内跨平台框架的基本原理或开发经验例如Hybrid / Flutter / ReactNative /小程序等优先',
                '4、对技术保持好奇，有良好的沟通能力和团队合作精神、优秀的分析问题和解决问题的能力。',
            ],
        },
        {
            tabName: 'keshihua',
            title: '前端开发工程师-国际化建站',
            subtitle: '成都',
            descriptionList: [
                '1、负责国际化建站、中后台建站产品整体和细节方案的设计和实现；',
                '2、负责建站平台涉及的协议、可视化引擎、编辑器、工具链等开发工作；',
                '3、和产运配合，深度参与产品需求讨论，功能定义等；',
            ],
            requireList: [
                '1、计算机基础扎实，熟悉数据结构、网络等；熟练掌握各种前端技术，包括HTML/CSS/JavaScript/Node.js 等；',
                '2、对业界的建站平台有较深入的理解和研究，有一定的经验，比如可视化搭建引擎、Web编辑器等；',
                '3、对至少一种MV*框架（例如react或vue等）有深入的了解；',
                '4、了解后端技术栈，熟悉一门后端语言（Node/Python/GO等），熟悉与后端的协作模式；',
                '5、积极乐观，责任心强，工作认真细致，具备良好的服务意识，具有良好的跨团队沟通与协作能力；',
                '6、有大型网站架构、工程化经验者优先；',
                '7、有较高的技术热情和积极性者优先。',
            ],
            bonusPointList: ['1、参与或主导过优秀的开源项目；', '2、有优秀的技术博文、博客。'],
        },
        {
            tabName: 'gecko',
            title: '全栈（前端）工程师（资深、高级、校招）',
            subtitle: '北京',
            descriptionList: [
                '1、负责字节跳动资源分发中台Gecko的建设，为抖音、抖音火山版、今日头条、西瓜视频、直播等大规模业务提供客户端动态化资源分发基础设施。',
                '2、参与分发平台的系统设计开发工作，包含前端/Node.js服务的全栈开发。负责控制面服务体系建设、工具链能力建设，提升研发效率',
                '3、负责技术攻关和创新技术研究，不断增强分发通道产品的场景覆盖能力与用户体验',
            ],
            requireList: [
                '1、本科及以上学历，计算机、通信和电子信息科学等相关专业优先',
                '2、具备扎实的计算机基础，熟悉计算机网络相关，掌握常用的数据结构与算法',
                '3、精通HTML/CSS/JavaScript/Node.js等，掌握至少一种MV*框架（例如React、Vue）',
                '4、积极乐观，责任心强，具备良好的服务意识、沟通能力、团队协作能力',
            ],
            bonusPointList: [
                '1、参与或主导过优秀的开源项目，有优秀的技术博客产出',
                '2、有大规模分布式数据服务的设计开发经验、性能优化经验',
            ],
        },
        {
            tabName: 'xiaolvpt',
            title: '高级前端开发工程师-效率平台',
            subtitle: '深圳',
            descriptionList: [
                '1、负责公司业务中台、技术中台及云服务产品的研发工作；',
                '2、调研公司研发体系和流程，给出相应底层服务的平台设计和技术方案；',
                '3、将设计方案实现为具体的平台功能，持续跟踪结果、不断优化用户体验；',
            ],
            descriptionAppendList: ['4、参与设计平台数据结构和系统架构，负责整体的研发工作。'],
            requireList: [
                '1、三年以上前端相关工作经验，计算机及相关专业；',
                '2、对React相关技术栈有深入研究，有组件相关开发经验，了解Vue相关技术栈；',
                '3、熟悉Webpack、Rollup等打包构建工具，熟悉前端工程化常用实践方案',
                '4、有丰富的中后台开发经验，具备一定的服务端开发基础，熟悉 Koa/Express开发，熟悉运维部署。',
            ],
            bonusPointList: [
                '1、有跨端、跨平台开发经验者优先',
                '2、有React组件性能优化实践方案优先',
            ],
        },
        {
            tabName: 'i18n',
            title: '高级前端开发工程师-国际化平台',
            subtitle: '北京',
            descriptionList: [
                '1、负责国际化翻译平台的研发工作，包括内部平台以及ToB平台的前端架构设计、开发与性能优化、稳定性建设等；',
                '2、为上层业务开发、优化各种插件、工具SDK、框架等国际化一体的解决方案以提升国际化效率；',
                '3、参与团队前端工程化体系建设，技术攻关、逐步提升研发效率、研发质量，通过前端技术的不断产出驱动业务的发展；',
            ],
            descriptionAppendList: [
                '4、为Tik Tok乃至全公司提供基建服务，同时拓展并支撑ToB业务，为客户提供技术解决方案。',
            ],
            requireList: [
                '1、2年以上前端或国际化相关开发经验；',
                '2、熟练掌握JavaScript、ES6规范、网络通信等前端知识；',
                '3、精通Vue.js、React、Angular等前端主流开发框架其一，并了解基本原理，对其实现有深入理解；',
                '4、熟悉 Node.js，使用过至少一个框架（Express/Koa等），具备前后端分离实践经验；',
                '5、了解后端技术栈，熟悉一门后端语言（Node/Python/GO等），熟悉与后端的协作模式；',
                '6、对前端开发生态中领域的知识有涉猎（构建、组件化、性能、安全等），并对系统化的解决方案有一定的了解或实践；',
                '7、喜欢尝试最新的技术，有强烈的好奇心和求知欲，乐于接受挑战，并能从技术趋势和思路上能影响产品；',
            ],
        },
        {
            tabName: 'security',
            title: '高级前端开发工程师-安全工程',
            subtitle: '北京',
            descriptionList: [
                '1、负责构建前端安全保障体系，包括安全研发流程、安全评估系统等；',
                '2、负责制定安全应急方案，响应紧急安全事件，跟进安全专项；',
                '3、负责研发安全扫描工具以及安全开发套件；',
            ],
            descriptionAppendList: ['4、负责日常的安全自查、巡检工作；'],
            requireList: [
                '1、计算机基础扎实，熟悉常用算法和数据结构，安全及相关专业优先；',
                '2、熟悉至少一门编程语言，熟悉Linux系统常用操作；',
                '3、熟悉常见WEB安全问题，如XSS、CSRF、SSRF、点击劫持、HTTP劫持等；',
                '4、善于学习和运用新知识，具有良好的分析和解决问题能力；',
                '5、具有良好的团队合作精神和积极主动的沟通意识；',
            ],
            bonusPointList: [
                '1、了解安全开发、安全测试、漏洞检测等安全知识者优先；',
                '2、有安全相关工作背景者优先；',
            ],
        },
        {
            tabName: 'antd',
            title: '高级前端开发工程师-中后台方向',
            subtitle: '杭州',
            descriptionList: [
                '1、参与IES企业级设计体系『Ant Design』开发及维护，包含UI组件库、主题平台、物料平台等',
                '2、参与组件库架构设计、性能优化、组件测试，打造跨平台、高性能、高质量的UI组件库',
                '3、参与Design To Code 建设，通过代码解析、UI Kit渲染引擎，实现代码组件到设计资源的自动转换',
            ],
            descriptionAppendList: [
                '4、参与Code To Design 建设，通过组件识别、布局算法、智能化等手段，实现设计稿到代码的转换，提升研发效率',
            ],
        },
    ];
};

export default JoinUs;
