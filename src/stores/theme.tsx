import React, { useState, useEffect, createContext } from 'react';

import { Themes } from '@/constants/enum';

interface IThemeContextProps {
    theme: Themes;
    setTheme: (theme: Themes) => void;
}

interface IProps {
    children: JSX.Element;
}

/**
 * 暴露出的变量，每个路由页面都可以通过它来获取theme相关的业务操作
 */
export const ThemeContext = createContext<IThemeContextProps>({} as IThemeContextProps);

/**
 * 注入器，用于给需要的 DOM 进行上下文的注入
 */
export const ThemeContextProvider = ({ children }: IProps): JSX.Element => {
    const [theme, setTheme] = useState<Themes>(Themes.light);

    useEffect(() => {
        // 监听本地缓存来同步不同页面间的主题
        const checkTheme = (): void => {
            const item = (localStorage.getItem('theme') as Themes) || Themes.dark;
            setTheme(item);
            document.getElementsByTagName('html')[0].dataset.theme = item;
        };
        checkTheme();
        window.addEventListener('storage', checkTheme);
        return (): void => {
            window.removeEventListener('storage', checkTheme);
        };
    }, []);

    return (
        <ThemeContext.Provider
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            value={{
                theme,
                setTheme: (currentTheme) => {
                    setTheme(currentTheme);
                    localStorage.setItem('theme', currentTheme);
                    document.getElementsByTagName('html')[0].dataset.theme = currentTheme;
                },
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
