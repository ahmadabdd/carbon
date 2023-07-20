// Function to calculate box plot statistics
export const CalculateBoxPlotStatistics = (
  data: number[]
): [number, number, number, number, number] => {
  const sortedData = data.slice().sort((a, b) => a - b);

  const min = sortedData[0];
  const max = sortedData[sortedData.length - 1];

  let median: number, q1: number, q3: number;

  const middleIndex = Math.floor(sortedData.length / 2);
  if (sortedData.length % 2 === 0) {
    median = (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
    q1 = sortedData.slice(0, middleIndex).reduce((a, b) => a + b) / middleIndex;
    q3 = sortedData.slice(middleIndex).reduce((a, b) => a + b) / middleIndex;
  } else {
    median = sortedData[middleIndex];
    q1 =
      sortedData.slice(0, middleIndex).reduce((a, b) => a + b) /
      (middleIndex + 1);
    q3 =
      sortedData.slice(middleIndex + 1).reduce((a, b) => a + b) / middleIndex;
  }

  return [min, q1, median, q3, max];
};
