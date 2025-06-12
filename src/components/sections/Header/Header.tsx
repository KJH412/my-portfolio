import type { MenuItem } from '@/App';
import hamBtn from '@/assets/images/mobile_menu_btn.svg';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

type HeaderProps = {
  menuItems: readonly MenuItem[];
  onMove: (section: MenuItem) => void;
  currentSection: string;
};

export default function Header({menuItems, onMove, currentSection} : HeaderProps) {

    const [scrolled, setScrolled] = useState(false);
    const linkTextColor = scrolled ? 'text-black' : 'text-white';

    const handleScrollTop = () => {
         window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0 ); //true
        };

        window.addEventListener('scroll', handleScroll);

    },[]);

    return (
        <header 
            id="header" 
            className={`fixed top-0 left-0 w-full z-50 bg-darkBg transition-shadow duration-300 
            ${scrolled ? 'shadow-md bg-white' : ''}`}
        >
        <div>
            <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* 로고 */}
                <div className="text-2xl font-bold text-primary">
                    <button className={linkTextColor} onClick={handleScrollTop}>KJH's Portfolio</button>
                </div>
                {/* 메뉴 버튼 */}
                <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
                    {menuItems.map((menu) => (
                    <li key={menu}>
                        <button
                        onClick={() => onMove(menu)}
                        className={clsx(linkTextColor, currentSection === menu && 'text-darkMint')}
                        >
                        {menu.toUpperCase()}
                        </button>
                    </li>
                    ))}
                </ul>
                {/* 모바일 메뉴 버튼 */}
                <div className="md:hidden">
                <img src={hamBtn} alt="햄버거버튼" className="w-[30px]" />
                </div>
            </nav>
        </div>
      </header>
    )
};