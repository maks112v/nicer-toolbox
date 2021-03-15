declare const fmap: (items: any[], mapFunction: (value: any, index: number, array: any[]) => unknown, filterFunction: (value: any, index: number, array: any[]) => value is any) => unknown[];
export default fmap;
