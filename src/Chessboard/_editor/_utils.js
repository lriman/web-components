export const getEditorItemBackgroundColor = (spare, isSelected) => {
  if (spare === 'trash' && isSelected) return '#FBA18C';
  if (isSelected) return '#B0B0FF';
  return null;
};
