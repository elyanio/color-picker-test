import React, { useState } from "react";
import { BasicColorPicker } from "../components/BasicColorPicker";
import useInitialConfig from "../dataSource";

const ColorPickerContainer = () => {
  const [colorPickerOptions, initialSelectedColor] = useInitialConfig();
  const [selectedColor, setSelectedColor] = useState(initialSelectedColor);
  return <BasicColorPicker colorPickerOptions={colorPickerOptions} selectedColor={selectedColor} onSelect={setSelectedColor} />;
}

export default ColorPickerContainer;
