import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Montserrat } from '@next/font/google';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * 谷歌字体：Montserrat
 */
export const montserrat = Montserrat({
    // 加载字体的子集
    subsets: ['latin'],
    // 同@font-face的font-style设置
    style: ['italic', 'normal'],
    // 同@font-face的font-weight设置
    weight: ['300', '500', '700'],
    // 对应的css变量名称
    variable: '--font-montserrat',
});
