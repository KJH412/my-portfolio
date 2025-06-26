interface SkillListProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  bgColor?: string; // 선택 사항
  isTruncated? : boolean; // 선택 사항
}

export const SkillList = ({imgSrc, imgAlt, title, bgColor, isTruncated }:SkillListProps ) => {

    return(
         <li className="w-[25%] mb-5">
            <img src={imgSrc} alt={imgAlt} className="w-full" />
            <div className="flex justify-center items-center gap-1 mt-1">
                {bgColor && 
                  <div className={`${bgColor} w-2 h-2 rounded-full`}></div>
                }
            <p className={`text-white text-[12px] ${isTruncated ? 'truncate' : '' }`}>{title}</p>
            </div>
        </li>
    );
};