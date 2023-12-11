import _ from 'lodash';
export const deepClone = (value: any) => _.cloneDeep(value)

export const capitalizeFirstLetter = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);
export const unCapitalizeFirstLetter = (word: string) => word.charAt(0).toLowerCase() + word.slice(1);