export const getFormattedCandlestickData = (data: { x: string; open: number; high: number; low: number; close: number }[]) => {
    const formattedData: (string|number)[][] = [["day", "low", "open", "close", "high"]];
    data.forEach((d) => formattedData.push([d.x, d.low, d.open, d.close, d.high]));
    return formattedData;
}

export async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Unable to fetch data`);
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    return { data: null, error: 'Unable to fetch data' };
  }
}
