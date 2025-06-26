import jsIcon from '@/assets/images/icons/icon_skills/javascript.png';
import htmlIcon from '@/assets/images/icons/icon_skills/HTML.svg';
import cssIcon from '@/assets/images/icons/icon_skills/CSS.svg';
import reactIcon from '@/assets/images/icons/icon_skills/React-Light.svg';
import tsIcon from '@/assets/images/icons/icon_skills/TypeScript.svg';
import ssIcon from '@/assets/images/icons/icon_skills/Sass.svg';
import styledIcon from '@/assets/images/icons/icon_skills/StyledComponents.svg';
import figmaIcon from '@/assets/images/icons/icon_skills/Figma.svg';
import vscodeIcon from '@/assets/images/icons/icon_skills/VSCode.svg';
import javaIcon from '@/assets/images/icons/icon_skills/Java-Light.svg';
import spIcon from '@/assets/images/icons/icon_skills/Spring-Light.svg';
import psIcon from '@/assets/images/icons/icon_skills/Photoshop.svg';
import illIcon from '@/assets/images/icons/icon_skills/Illustrator.svg';
import githubIcon from '@/assets/images/icons/icon_skills/Github-Dark.svg';
import mySQLIcon from '@/assets/images/icons/icon_skills/MySQL-Light.svg';
import oracleIcon from '@/assets/images/icons/icon_skills/oracle.png';
import { SkillList } from '@/components/sections/Skills/SkillList';
import { useEffect, useState } from 'react';


export default function Skills() {

    const [selected, setSelected] = useState<number | null>(null);
    
    const handleButtonClick = (index: number) => {
      setSelected(index);
    };

    useEffect(()=>{
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Element;
      // 버튼을 제외한 다른 영역을 클릭했을 경우
      if (target && !target.closest('button')) {
        setSelected(null);
      }
      };

      // document에 클릭 이벤트
      document.addEventListener('click', handleClickOutside);

      // 컴포넌트 언마운트 시 이벤트 제거
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    },[]);


    return (
      <div className="w-full h-screen">
      <div className="mx-auto w-fit text-center pt-10">
        <h2 className="text-5xl text-darkMint font-bold pt-10">SKILLS</h2>
        <p className="text-gray-50">기술 스택 및 도구</p>
       
      </div>
      {/* 숙련도 */}
      <div className="flex gap-4 justify-center mt-10">
        {/* Familiar */}
        <div className="relative group flex">
          {/* 가로 중앙 위치 안맞는 문제 px로 맞춤 */}
          <p className="
            absolute top-[-25px] left-[-150px]
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300 text-white text-sm text-center
            w-[600px]">완벽하게 숙련된 수준은 아니지만 익숙하게 활용할 수 있고 자주 사용하는 기술입니다.</p>
          <div className="bg-red-500 w-5 h-5 rounded-full"></div>
          <p className="ml-2 text-red-200 text-sm">Familiar</p>
        </div>
        {/* Tried */}
        <div className="relative group flex">
          <p className="
          absolute top-[-25px] left-1/2 transform -translate-x-1/2
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 text-white text-sm text-center
          w-[600px]">기초 지식이 있고 프로젝트에 사용해본 경험이 있는 기술입니다.</p>
          <div className="bg-blue-500 w-5 h-5 rounded-full"></div>
          <p className="ml-2 text-blue-300 text-sm">Tried</p>
        </div>
        {/* Learning */}
        <div className="relative group flex">
          <p className="
          absolute top-[-25px] -left-1/2 transform -translate-x-1/2
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 text-white text-sm text-center
          w-[600px]">현재 공부하고 있으며 실습 및 학습중인 기술입니다.</p>
          <div className="bg-yellow-500 w-5 h-5 rounded-full"></div>
          <p className="ml-2 text-yellow-200 text-sm">Learning</p>
        </div>
      </div>
      {/* Skills 메뉴 */}
      <div className="flex justify-center gap-10 items-top w-full pt-10">
        <ul className="flex flex-col items-start gap-5 text-gray-300 text-l font-bold w-28 text-center">
          <li className="border-2 rounded-full px-3 py-1 w-full">
            <button className={`${selected === 1 ? 'text-lightMint' : 'text-gray-100'}`} onClick={() => handleButtonClick(1)}>Frontend</button>
          </li>
          <li className="border-2 border-gray-300 rounded-full px-3 py-1 w-full">
            <button className={`${selected === 2 ? 'text-lightMint' : 'text-gray-100'}`}  onClick={() => handleButtonClick(2)}>Backend</button>
          </li>
          <li className="border-2 border-gray-300 rounded-full px-3 py-1 w-full">
            <button className={`${selected === 3 ? 'text-lightMint' : 'text-gray-100'}`}  onClick={() => handleButtonClick(3)}>ETC</button>
          </li>
        </ul>
        {/* Frontend Skill List */}
        <ul className={`flex flex-wrap justify-start gap-4 w-[300px] 
          ${selected === 1 || selected === null ? 'opacity-100' : 'opacity-50'}`}>
          <SkillList imgSrc={jsIcon} imgAlt={"javascript"} title={"JavaScript"} bgColor={"bg-red-500"} />
          <SkillList imgSrc={tsIcon} imgAlt={"typescript"} title={"TypeScript"} bgColor={"bg-yellow-500"} />
          <SkillList imgSrc={reactIcon} imgAlt={"react"} title={"React"} bgColor={"bg-red-500"} />
          <SkillList imgSrc={htmlIcon} imgAlt={"html"} title={"HTML5"} bgColor={"bg-red-500"} />
          <SkillList imgSrc={cssIcon} imgAlt={"css"} title={"CSS3"} bgColor={"bg-red-500"} />
          <SkillList imgSrc={styledIcon} imgAlt={"styled"} title={"Styled-Components"} bgColor={"bg-red-500"} isTruncated={true} />
          <SkillList imgSrc={ssIcon} imgAlt={"scss"} title={"SCSS"} bgColor={"bg-blue-500"} />
          <SkillList imgSrc={vscodeIcon} imgAlt={"vscode"} title={"VSCode"} bgColor={"bg-red-500"} />
          <SkillList imgSrc={figmaIcon} imgAlt={"figma"} title={"Figma"} bgColor={"bg-blue-500"} />
        </ul>
        {/* Backend Skill List */}
        <ul className={`flex flex-wrap justify-start gap-4 w-[300px] h-[250px] 
          ${selected === 2 || selected === null ? 'opacity-100' : 'opacity-50'}`}>
          <SkillList imgSrc={javaIcon} imgAlt={"java"} title={"Java"} bgColor={"bg-blue-500"} />
          <SkillList imgSrc={spIcon} imgAlt={"spring"} title={"Spring"} bgColor={"bg-blue-500"} />
          <SkillList imgSrc={oracleIcon} imgAlt={"oracle"} title={"Oracle"} bgColor={"bg-blue-500"} />
          <SkillList imgSrc={mySQLIcon} imgAlt={"mySql"} title={"MySQL"} bgColor={"bg-blue-500"} />
        </ul>
        {/* Design Skill List */}
        <ul className={`flex flex-wrap justify-start gap-4 w-[300px] 
          ${selected === 3 || selected === null ? 'opacity-100' : 'opacity-50'}`}>
          <SkillList imgSrc={psIcon} imgAlt={"photoshop"} title={"Photoshop"} bgColor={"bg-blue-500"} />
          <SkillList imgSrc={illIcon} imgAlt={"illustrator"} title={"Illustrator"} bgColor={"bg-blue-500"} />
          <SkillList imgSrc={githubIcon} imgAlt={"github"} title={"GitHub"} bgColor={"bg-blue-500"} />

        </ul>
      </div>
    </div>
    )
  };
  
  