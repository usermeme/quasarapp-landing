export const interpolate = (
  value: number,
  input: [number, number],
  output: [number, number]
): number => {
  const [inputMin, inputMax] = input;
  const [outputMin, outputMax] = output;

  const relativeValue = (value - inputMin) / (inputMax - inputMin);
  const outputValue = relativeValue * (outputMax - outputMin) + outputMin;

  return outputValue;
};
