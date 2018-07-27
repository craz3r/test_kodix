export const translateStatus = (status) => {
  const table = {
    pednding: 'Ожидается',
    out_of_stock: 'Нет в наличии',
    in_stock:  'В наличии',
  };

  return table[status];
}