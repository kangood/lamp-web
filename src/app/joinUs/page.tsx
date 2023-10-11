import { NextPage } from 'next';

import { LinkButton } from '@/components/ui/button';

import styles from './page.module.css';

const Prospect: NextPage = () => {
    return (
        <>
            <div className={styles.up}>
                <h1 className={styles.h1}>在招岗位</h1>
                <p className={styles.p}>工程化、跨平台、可视化搭建、国际化、安全工程等人才招募</p>
            </div>
            <div className={styles.down}>
                <div className="bg-black text-xl text-white">123</div>
                <LinkButton variant="secondary" href="https://3rcd.com" target="_blank">
                    点此打开
                </LinkButton>
            </div>
        </>
    );
};

export default Prospect;
