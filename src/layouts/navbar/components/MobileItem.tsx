import { Link } from "react-router-dom";

interface Props {
  title?: string;
  Icon?: any;
  className?: string;
}

const MobileItem = ({ title, Icon, className }: Props) => {
  return (
    <Link
      to="/"
      className={`flex items-center gap-2 py-2 text-[12.25px] text-[#141414] font-600 ${className}`}
    >
      {Icon && <Icon color="#000" size={24} />} {title}
    </Link>
  );
};

export default MobileItem;
