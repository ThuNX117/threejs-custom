import "./index.css";
type Props = {
  items: { name: string; label: string; src: string; id: number }[];
  onSelectColorMap: (colorMapConfig: { src: string }) => void;
};
export const ListAssets = ({ items, onSelectColorMap }: Props) => {
  const handleClose = () => {
    console.log("close");
  };
  return (
    <div className="editor-sidebar">
      <h4>Texture</h4>
      <button onClick={handleClose}>
        <i></i>
      </button>
      <ul className="list">
        {items.map((item) => (
          <li key={item.id} className="item">
            <button
              className="option"
              onClick={() => onSelectColorMap({ src: item.src })}
            >
              <img className="image" src={item.src} alt={item.label} />
              <p> {item.label}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
