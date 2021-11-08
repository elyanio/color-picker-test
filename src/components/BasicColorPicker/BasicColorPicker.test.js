import React from 'react';
import { fireEvent } from '@testing-library/dom';
import { render, screen, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import ColorPickerContainer from '../../containers/ColorPickerContainer';

afterEach(() => {
  cleanup()
});

describe("in ColorPicker", () => {
  test('initial UI is rendered as expected', () => {
    const renderApp = () => render(<ColorPickerContainer />);
    let { getByTestId } = renderApp();
    expect(getByTestId('selectedColor')).toHaveAttribute("color", "red");
    expect(getByTestId('colorPickerOptions').childElementCount).toBe(5);
    expect(getByTestId('colorPickerOptions').childNodes[0]).toHaveAttribute("color", "#5d77f5");
    expect(getByTestId('colorPickerOptions').childNodes[1]).toHaveAttribute("color", "#0fd085");
    expect(getByTestId('colorPickerOptions').childNodes[2]).toHaveAttribute("color", "#ffba5b");
    expect(getByTestId('colorPickerOptions').childNodes[3]).toHaveAttribute("color", "#f95e62");
    expect(getByTestId('colorPickerOptions').childNodes[4]).toHaveAttribute("color", "lightpink");
  });

  test('click on color 1 changes the canvas color', () => {
    const renderApp = () => render(<ColorPickerContainer />);
    let { getByTestId } = renderApp();
    expect(getByTestId('selectedColor')).toHaveAttribute("color", "red");
    expect(getByTestId('colorPickerOptions').childElementCount).toBe(5);
    expect(getByTestId('colorPickerOptions').childNodes[0]).toHaveAttribute("color", "#5d77f5");
    expect(getByTestId('colorPickerOptions').childNodes[1]).toHaveAttribute("color", "#0fd085");
    expect(getByTestId('colorPickerOptions').childNodes[2]).toHaveAttribute("color", "#ffba5b");
    expect(getByTestId('colorPickerOptions').childNodes[3]).toHaveAttribute("color", "#f95e62");
    expect(getByTestId('colorPickerOptions').childNodes[4]).toHaveAttribute("color", "lightpink");
    fireEvent.click(getByTestId('colorPickerOptions').childNodes[0]);
    expect(getByTestId('selectedColor')).toHaveAttribute("color", "#5d77f5");
  });

  test('click on last color', () => {
    const renderApp = () => render(<ColorPickerContainer />);
    let { getByTestId } = renderApp();
    expect(getByTestId('selectedColor')).toHaveAttribute("color", "red");
    expect(getByTestId('colorPickerOptions').childElementCount).toBe(5);
    expect(getByTestId('colorPickerOptions').childNodes[0]).toHaveAttribute("color", "#5d77f5");
    expect(getByTestId('colorPickerOptions').childNodes[1]).toHaveAttribute("color", "#0fd085");
    expect(getByTestId('colorPickerOptions').childNodes[2]).toHaveAttribute("color", "#ffba5b");
    expect(getByTestId('colorPickerOptions').childNodes[3]).toHaveAttribute("color", "#f95e62");
    expect(getByTestId('colorPickerOptions').childNodes[4]).toHaveAttribute("color", "lightpink");
    fireEvent.click(getByTestId('colorPickerOptions').childNodes[4]);
    expect(getByTestId('selectedColor')).toHaveAttribute("color", "lightpink");
  });
});
