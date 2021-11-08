const useInitialConfig = () => {
    const colorPickerOptions = ['#5d77f5', '#0fd085', '#ffba5b', '#f95e62', 'lightpink'];
    const initialSelectedColor = 'red';
    return [colorPickerOptions, initialSelectedColor];
};

export default useInitialConfig;
