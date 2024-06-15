interface Props {
  open?: boolean;
}

const CatalogIcon = ({ open }: Props) => {
  return (
    <div className={`catalog-icon ${open && "open"} icon`}>
      <div className="rect">
        <div className="inner"></div>
      </div>
      <div className="top"></div> <div className="bottom"></div>
    </div>
  );
};

export default CatalogIcon;
