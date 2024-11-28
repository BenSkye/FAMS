export function convertDateToDDMMYYYY(date) {
  // Lấy thông tin ngày, tháng, năm từ đối tượng Date
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  // Định dạng lại thời gian
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}
