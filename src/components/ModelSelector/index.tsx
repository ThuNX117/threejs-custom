import { ModelName } from "../../types/model";
export const ModelSelector = ({
  onSelect,
  selectOption,
}: {
  selectOption: ModelName;
  onSelect: (type: ModelName) => void;
}) => {
  const options: ModelName[] = ["box", "sphere", "cone", "mug"];
  return (
    <fieldset className="border p-1">
      <legend>Select a maintenance drone: {selectOption}</legend>
      {options.map((item) => (
        <button key={item} onClick={() => onSelect(item)}>
          <label>{item}</label>
        </button>
      ))}
    </fieldset>
  );
};
