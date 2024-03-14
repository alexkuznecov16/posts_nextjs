import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => {
    return (
        <header>
            <strong>App</strong>
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/posts'>Posts</Link>
            </nav>
        </header>
    );
};

export default Header;
