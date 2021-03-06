export const listingType = (data, field) => {
  const types = data.reduce(function (prev, curr) {
    return [...prev, ...curr[field]];
  }, []);
  const newSet = new Set(types);
  return [...newSet];
};

export const nameSearch = (data, field, value) => {
  return data.filter(item => {
    return item[field].toUpperCase().indexOf(value.toUpperCase()) === 0;
  });
};

export const orderBy = (data, field) => {
  return data.sort((a, b) => a[field] > b[field] ? 1 : -1);
}

export const orderByWeight = (data, field) => {
  return data.sort((a, b) =>
    parseFloat(a[field].substring(0, a[field].length - 3)) > parseFloat(b[field].substring(0, b[field].length - 3)) ? 1 : -1);
};

export const get = (data, field, value) => {
  return data.find(item => {
    return item[field] === value;
  });
}

export const typeSearch = (data, field, value) => {
  return data.filter(item => {
    return item[field][0] === value || item[field][1] === value;
  });
};

