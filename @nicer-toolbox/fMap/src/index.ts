interface Props {}

const fmap = (
  items: any[],
  mapFunction: (value: any, index: number, array: any[]) => unknown,
  filterFunction: (value: any, index: number, array: any[]) => value is any
) =>
  filterFunction
    ? items?.filter(filterFunction)?.map(mapFunction)
    : items?.map(mapFunction);

export default fmap;
