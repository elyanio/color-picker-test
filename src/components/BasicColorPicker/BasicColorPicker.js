import React, { useCallback } from "react";
import styled from 'styled-components';

const ColorPicker = ({ colorPickerOptions, selectedColor, onSelect }) => {
  const onClick = useCallback(
    (color) => () => onSelect(color), [onSelect],
  )

  return (
    <div>
      <div className="layout-row justify-content-center">
        <div className="card mt-75">
          <ColorContainer color={selectedColor} data-testid="selectedColor">
            <p className="text-center mx-auto px-5">{selectedColor}</p>
          </ColorContainer>
          <div className="card-actions">
            <div className="layout-row justify-content-center align-items-center" data-testid="colorPickerOptions">
              {colorPickerOptions.map((color, index) => {
                return (
                  <Color
                    key={color}
                    onClick={onClick(color)}
                    color={color}
                    selected={selectedColor === color}
                  ></Color>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Color = styled.button`
  ${({ color }) => color ? `background: ${color};` : ''}
    width: 40px;
    height: 40px;
    position: relative;
    cursor: pointer;

 ${(({ selected }) => selected ? `
 border: 1px solid gray;
 ` : '')}
`;

const ColorContainer = styled.div`
${({ color }) => color ? `background: ${color};` : ''}  
    width: 100%;
    height: 280px;
    transition: background-color 0.3s ease-in-out;
    position: relative;
`;
export default ColorPicker;
