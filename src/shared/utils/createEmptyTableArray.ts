import { ISectionText } from 'shared/interfaces/ISection';

export const createEmptyColumnArray = (column = 6) => {
  return Array.from({ length: column }).map(() => {
    return Math.floor(Math.random() * 10000).toString();
  });
};

export const createEmptyTableArray = (row = 6, column = 6): string[][] => {
  // Array.from({ length: row }).forEach((_, rowIndex) => {
  //   Array.from({ length: column }).forEach((_, columnIndex) => {
  //     arr.push({
  //       rowIndex,
  //       columnIndex,
  //       text: Math.floor(Math.random() * 1000).toString(),
  //     });
  //   });
  // });
  const array = Array.from({ length: row }).map(() => {
    return createEmptyColumnArray(column);
  });

  return array;
};
