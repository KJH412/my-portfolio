import logo from '@/assets/images/logo.png';

export default function About() {
  return (
    <div className="w-full h-screen bg-red-200">
      <div className="mx-auto w-fit">
        <h2 className="text-5xl text-darkMint font-bold pt-10">About Me</h2>
      </div>
      <div className="flex justify-center items-end mt-10">
          <img 
            src={logo} 
            alt="프로필 이미지" 
            className="w-[300px] h-auto bg-gray-50"
          />
          <div className="ml-8 text-2xl">
            <p>안녕하세요!</p>
            <p>웹 퍼블리싱을 배우게 된 후 프론트엔드 개발에 관심을 갖기 시작했습니다.</p>
          </div>
      </div>
    </div>
  )
};