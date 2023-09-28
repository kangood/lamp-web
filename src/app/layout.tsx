import type { Metadata } from 'next';

import '@/styles/index.css';

export const metadata: Metadata = {
    title: '3rapp',
    description: '3r教室TS全栈课程',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
