export async function getAllCars() {
  const response = await fetch(
    `https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json`,
    {
      method: "GET",
    }
  );

  const resData = await response.json();

  if (!response.ok) {
    const message = `${response.status} | ${resData.message}`;
    throw new Error(message);
  }

  return resData;
}
