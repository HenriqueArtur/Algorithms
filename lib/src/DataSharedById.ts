export function DataSharedById(tuples: string[][]): { [key: `${string},${string}`]: string[] } {
  let hash: Record<string, string[]> = {};
  let listOfData: string[] = [];
  let listOfIds: string[] = [];
  for (const [id, data] of tuples) {
    if (!hash[id]) {
      hash[id] = [];
    }
    if (hash[id].indexOf(data) === -1) {
      hash[id].push(data);
    }
    if (listOfData.indexOf(data) === -1) {
      listOfData.push(data);
    }
    if (listOfIds.indexOf(id) === -1) {
      listOfIds.push(id);
    }
  }
  return defineCombinations({}, hash, listOfData, listOfIds);
}

function defineCombinations(
  result: { [key: string]: string[] } = {},
  hash: Record<string, string[]>,
  listOfData: string[],
  listOfIds: string[]
) {
  if (listOfIds.length <= 1) {
    return result;
  }
  const [id, ...rest] = listOfIds;
  for (const currentId of rest) {
    const key = [+id, +currentId].sort((a, b) => a - b).join(",");
    result[key] = [];
    for (const aData of listOfData) {
      if (hash[id].includes(aData) && hash[currentId].includes(aData)) {
        result[key].push(aData);
      }
    }
  }
  return defineCombinations(result, hash, listOfData, rest);
}
