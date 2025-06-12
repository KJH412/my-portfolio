import About from '@/components/sections/About/About';
import Header from '@/components/sections/Header/Header';
import Home from '@/components/sections/Home/Home';
import Skills from '@/components/sections/Skills/Skills';
import Contact from '@/components/sections/Contact/Contact';
import { useEffect, useRef, useState } from 'react';
import '@/index.css';

export const menuItems = ['home', 'about', 'skills', 'projects', 'experience', 'contact'] as const;
export type MenuItem = typeof menuItems[number];

export default function App() {

  const HomeRef = useRef<HTMLDivElement | null>(null);;
  const AboutRef = useRef<HTMLDivElement | null>(null);;
  const SkillsRef = useRef<HTMLDivElement | null>(null);;
  const ProjectRef = useRef<HTMLDivElement | null>(null);;
  const ExpRef = useRef<HTMLDivElement | null>(null);;
  const ContactRef = useRef<HTMLDivElement | null>(null);;

  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const currentSection = visibleSections[0];
 
  // 스크롤 감지용
  // ref:해당 section의 useRef 객체, id:section을 식별하는 문자열
  const sections = [
    { ref: HomeRef, id: "home" },
    { ref: AboutRef, id: "about" },
    { ref: SkillsRef, id: "skills" },
    { ref: ProjectRef, id: "projects" },
    { ref: ExpRef, id: "experience" },
    { ref: ContactRef, id: "contact" },
  ];

  // 스크롤 이동용
  const sectionRefs = {
    home: HomeRef,
    about: AboutRef,
    skills: SkillsRef,
    projects: ProjectRef,
    experience: ExpRef,
    contact: ContactRef,
  };  

  const moveToSection = (section: MenuItem) => {
    const targetRef = sectionRefs[section];
    if (targetRef?.current) {
      const yOffset = -56; // 헤더 높이만큼 빼기 (px 단위)
      const y = targetRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {

    // 스크롤 이벤트 처리 함수
    const handleScroll = () => {
      
      // 현재 화면에 보이는 section들의 id를 추적
      const visibleSections = sections.filter(({ ref }) => {
          if (!ref.current) return false;
          const rect = ref.current.getBoundingClientRect(); //해당 DOM 요소의 크기와 위치 정보
          
          return (
            //화면 중앙
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          );
        })
        .map(({ id }) => id);
 
      // visibleSections 상태 업데이트 (현재 화면에 보이는 section들의 id를 저장)
      setVisibleSections(visibleSections);
    };
 
    // 스크롤 이벤트 발생할 때마다 handleScroll 함수 호출
    window.addEventListener("scroll", handleScroll);
 
    // 컴포넌트 언마운트 시 이벤트 리스너 정리를 통해 메모리 누수 방지
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <>
      <div> 
        <Header menuItems={menuItems} onMove={moveToSection} currentSection={currentSection} />
        <div ref={HomeRef}>
          <Home />
        </div>
        <div
          ref={AboutRef}
          className={`section ${
            visibleSections.includes("about") && "visible"}`}
        >
          <About />
        </div>
        <div
          ref={SkillsRef}
          className={`section ${
            visibleSections.includes("skills") && "visible"}`}
        >
          <Skills />
        </div>
        <div
          ref={ContactRef}
          className={`section ${
            visibleSections.includes("contact") && "visible"}`}
        >
          <Contact />
        </div>
      </div>
    </>
  )
};
