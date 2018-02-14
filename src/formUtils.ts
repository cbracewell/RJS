
export const optionsDropdownFormatter = (arr: string[]) => arr.map(item => ({
  key: item, value: item, text: item
}));

export const enumDropdownFormatter = (arr: any[]) => arr.map(({ value, label }) => ({
  key: value,
  text: label,
  value
}));
