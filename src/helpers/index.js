export const convertISODateToTimeFormat = (ISODate) => {
  const newDateObj = new Date(ISODate);
  const date = newDateObj.getDate();
  const month = newDateObj.getMonth() + 1;
  const year = newDateObj.getFullYear();
  const hours = newDateObj.getHours();
  const min = newDateObj.getMinutes();

  return `${date}/${month}/${year} ${hours}:${min}`;
};
