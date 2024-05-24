// fn to format date to the form DD/MM/YYYY
export function formatDate(){
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};