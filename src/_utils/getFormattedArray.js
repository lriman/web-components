export const getNewItems = items => {
  if (items?.length && items[0].color === 'b') {
    return [{ moveId: [-1], san: '...' }, ...items];
  }
  return items;
};

export const getParsedSan = san => {
  if (san) {
    const figureIndex = san.indexOf(san.match(/[Q|R|B|N|K]/));
    if (figureIndex >= 0) {
      return {
        beforeSan: san.slice(0, figureIndex),
        figureSan: san[figureIndex],
        afterSan: san.slice(figureIndex + 1),
      };
    }
    return null;
  }
  return null;
};

export const getMoveIdIndex = (arr, index) => {
  if (arr[0] && arr[0].san === '...') return index - 1;
  return index;
};

export default function getFormattedArray(arr, startIndex = 1, indexes = []) {
  let value = [];
  const iArr = getNewItems(arr);
  return iArr.reduce((acc, item, index) => {
    let items;

    if (item.items?.length)
      items = item.items.map((line, i) => {
        return getFormattedArray(line, startIndex + Math.floor(index / 2), [
          ...indexes,
          getMoveIdIndex(iArr, index),
          i,
        ]);
      });

    if (value.length < 2) {
      const moveId = [...indexes, getMoveIdIndex(iArr, index)];

      value.push({
        ...item,
        moveNum: acc.length + startIndex,
        moveIdString: moveId.join('-'),
        parsedSan: getParsedSan(item?.san),
        moveId,
        index,
        items,
      });
    }

    if (value.length === 2 || index === iArr.length - 1) {
      acc.push(value);
      value = [];
    }

    return acc;
  }, []);
}
