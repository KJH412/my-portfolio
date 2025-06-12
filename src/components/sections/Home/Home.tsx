import logo from '@/assets/images/logo.png';

export default function Home() {
  return (
    <div className="h-screen bg-darkBg">
        <div className="flex flex-col items-center justify-center h-screen">
            <img 
                src={logo} 
                alt="로고" 
                className="w-[300px] sm:w-[400px] animate-popInUpFade" 
            />
            <p className="transform -translate-y-[70px] text-white font-bold sm:text-[80px] text-[50px] animate-fadeInTitle">김정현 포트폴리오</p>
        </div>

    </div>
  )
};