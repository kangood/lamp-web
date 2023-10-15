import Image from 'next/image';

import PublicationsProspectPNG from 'public/publications_prospect.png';

import clsx from 'clsx';

import { getPublicationContentData, listPublicationContentData } from '@/lib/publicationContent';

import styles from './page.module.css';
import notFound from './not-found';

type Params = {
    params: {
        id: string;
    };
};

const PublicationContent = ({ params: { id } }: Params) => {
    const publicationContentData = getPublicationContentData(id);
    console.log('1', id, publicationContentData);
    if (!publicationContentData) {
        return notFound();
    }
    return (
        <div className="m-auto pt-12 pb-24 w-[70rem]">
            <Image
                src={PublicationsProspectPNG}
                alt="publications_prospect"
                width={1120}
                height={560}
            />
            <h1 className="text-[2rem] leading-[3.125rem] font-semibold tracking-[0.0125rem] mt-7 mb-4">
                即将到来
            </h1>
            <div className="flex text-sm mb-6 opacity-60">
                <p className={clsx(styles.p, 'mr-12')}>茶灯前端技术周刊 即将到来</p>
            </div>
            <div className="text-sm mb-6 p-4 relative">
                <p
                    className={clsx(
                        styles.p,
                        'after:bg-[var(--secondary-color)] after:h-5 after:left-[0.125rem] after:absolute after:top-[1.4375rem] after:w-1',
                    )}
                >
                    茶灯前端技术周刊上线前致辞
                </p>
            </div>
            <div>
                <p className={styles.p}>
                    哈喽同学们，我们是茶灯前端技术团队，服务于茶灯旗下多个产品线，专注建设前端设施。团队技术方向有前端工程体系、Node.js工程体系、跨平台解决方案，效率平台、安全、互动技术等等。茶灯前端技术团队周刊即将到来，包含不同领域方向领先的技术文章，期待与同样在前端道路上前行的你一同成长！
                </p>
                <p className={styles.p}>
                    2023年，我们与你一同前进！
                    <br />
                </p>
            </div>
        </div>
    );
};

/**
 * 返回静态参数值
 */
export const generateStaticParams = async () => {
    const publicationContentDataList = listPublicationContentData();
    return publicationContentDataList.map((publicationContentData) => ({
        id: publicationContentData.id,
    }));
};

export default PublicationContent;
