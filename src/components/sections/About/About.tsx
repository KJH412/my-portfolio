import logo from '@/assets/images/logo.png';

export default function About() {
  return (
    <div className="w-full h-screen bg-darkBg">
      <div className="mx-auto w-fit text-center pt-10">
        <p className="pt-10">
          <span className="text-white font-bold text-5xl">안녕하세요!</span>
        </p>
        <p className="pt-3">
          <span className="text-white font-bold text-5xl">프론트엔드 개발자</span>
        </p>
        <p className="pt-3">
          <span className="text-white font-bold text-5xl">
            <span className="text-lightMint">김정현</span> 입니다.
          </span>
        </p>
        <p className="text-gray-300 text-m pt-5">
          <span className="text-white font-bold">" 저만의 색</span>으로, 사용자에게 
          <span className="text-white font-bold"> 편안한 화면</span>을 만들겠습니다. "
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-14">
          <img 
            src={logo} 
            alt="프로필 이미지" 
            className="w-[200px] h-auto bg-gray-50"
          />
          <div className="text-l bg-white text-gray-800  font-chosun
           w-[500px] md:w-[1000px] 
           mt-8 px-10 py-10 rounded-xl
           bg-[url('@/assets/images/paper.jpg')] bg-cover bg-center
          ">
            <p className="break-words overflow-wrap">
               인테리어를 전공하며 공간을 설계하던 저는 이제 사용자 경험을 중심으로 더 나은 인터페이스를 만들고자
               프론트엔드 개발에 도전하게 되었습니다.
               평소 익숙하게 보던 웹 페이지를 직접 만들 수 있다는 사실이 새롭게 다가왔고
               그 관심을 시작으로 웹 퍼블리싱을 학원을 다니며 HTML,CSS,JavaScript를 학습했습니다. 

               직접 기획한 페이지 기능을 하나씩 구현해보면서 사용자와 더 활발히 상호작용하는 웹을 만들고 싶어
               프론트엔드 개발자를 꿈꾸게 되었습니다.
            </p>
            <p className="break-words overflow-wrap">
               이후 SW 풀스택 교육에 참여하여 실무와 유사한 팀 프로젝트를 통해
               개발 프로세스를 익히고 다양한 Framework를 학습했습니다.
            </p>
            <p className="break-words overflow-wrap">
               현재는 React를 중심으로 UI/UX를 설계하고 작은 부분에서도 사용자 경험 개선을 신경쓰는 프론트엔드 개발자가 되기 위해 노력하고 있습니다.
            </p>
          </div>
      </div>
    </div>
  )
};