import "./title.scss";

interface Props {
  className?: string;
  title?: string;
}

const Title = ({ className, title }: Props) => {
  return <div className={`title ${className}`}>{title}</div>;
};

export default Title;
