const pagination = [
  {
    id: 1,
    targetPage: 1,
  },
];

const about = [
  {
    id: 1,
    name: 'totalRecords',
    type: 'number',
    text: 'Общее число блоков',
  },
  {
    id: 2,
    name: 'pageLimit',
    type: 'number',
    text: 'Блоков на странице',
  },
  {
    id: 3,
    name: 'pageNeighbours',
    type: 'number',
    text: 'Число соседних меток',
  },
  {
    id: 4,
    name: 'currentPage',
    type: 'number',
    text: 'Текущая страница',
  },
];

export { pagination, about };
