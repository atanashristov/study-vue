export const getPositionLabel = (pos: string): string => {
  if (!pos) return '';
  return pos.split('-').map(word => word[0].toUpperCase()).join('');
  // switch (position) {
  //   case 'top-left':
  //     return 'TL';
  //   case 'top-center':
  //     return 'TC';
  //   case 'top-right':
  //     return 'TR';
  //   case 'bottom-left':
  //     return 'BL';
  //   case 'bottom-center':
  //     return 'BC';
  //   case 'bottom-right':
  //     return 'BR';
  //   default:
  //     return '';
  // }
};

export const formatConfigToCode = (config: any): string => {
  return `const notify = ${JSON.stringify(
    config,
    (key, value) => {
      if (key.startsWith('$') || key.startsWith('_')) {
        return undefined;
      }
      return value;
    },
    2
  )};`;
};
