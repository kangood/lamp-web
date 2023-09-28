import { FC } from 'react';

import { LinkButton } from '@/components/ui/button';

import $styles from './page.module.css';

const App: FC = () => {
    return (
        <main id="app">
            <div className={$styles.container}>
                <div className={$styles.block}>
                    欢迎来到3R教室，这是<span>Nextjs课程的开始</span>
                    <LinkButton variant="secondary" href="https://3rcd.com" target="_blank">
                        点此打开
                    </LinkButton>
                </div>
            </div>
        </main>
    );
};
export default App;
