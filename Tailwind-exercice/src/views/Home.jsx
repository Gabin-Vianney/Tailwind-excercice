import { useState } from "react";
import Button from "../components/commons/Button";
import Input from "../components/commons/Input";
import Select from "../components/commons/Select";
import RadioButton from "../components/commons/RadioButton";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [radioValue, setRadioValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };
  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center space-y-4 p-4 sm:space-y-6 md:space-y-8">
      <Input
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Entrez du texte"
        className="w-4/5 sm:w-2/5"
      />
      <Select
        value={selectedValue}
        onChange={handleSelectChange}
        options={[
          { value: "", label: "Sélectionner une option" },
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
        ]}
      />

      <RadioButton
        label="Option B"
        name="radioGroup"
        value="B"
        checked={radioValue === "B"}
        onChange={handleRadioChange}
      />
      <RadioButton
        label="Option C"
        name="radioGroup"
        value="C"
        checked={radioValue === "C"}
        onChange={handleRadioChange}
      />
      <Button onClick={() => alert("Bouton cliqué !")}>Cliquez-moi</Button>
    </div>
  );
}
