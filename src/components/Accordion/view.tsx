import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

interface Props {
  title?: string;
  content?: any;
  className?: string;
}

const Accordion = ({ title, content, className }: Props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={"mb-[0.5rem]"}>
      <div
        className={`flex group items-center justify-between cursor-pointer gap-4 py-[12px] ${className}`}
        onClick={() => setOpen(!isOpen)}
      >
        <div
          className={`text-[12.25px] text-[#141414] font-600 transition-all ease duration-300`}
        >
          {title}
        </div>
        <div
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          }  transition-all ease duration-300`}
        >
          <SlArrowDown size={14} color="#141414" />
        </div>
      </div>
      <div
        className={`grid overflow-hidden ${
          isOpen ? "grid-rows-[1fr] pb-[1rem]" : "grid-rows-[0fr] delay-150"
        } transition-all ease duration-300`}
      >
        <div className={"min-h-0"}>{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
