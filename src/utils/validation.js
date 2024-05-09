export default function filterValidation(data) {
  const { driverType, date, time } = data;

  if (driverType === "") {
    throw new Error("Tipe Driver harus diisi");
  }

  if (date === "") {
    throw new Error("Tanggal harus diisi");
  }

  if (time === "") {
    throw new Error("Waktu harus diisi");
  }
}
