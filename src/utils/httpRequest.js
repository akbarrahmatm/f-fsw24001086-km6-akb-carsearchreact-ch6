import filterValidation from "./validation";

export async function getAllCars(data) {
  filterValidation(data);

  const { driverType, date, time, capacity } = data;

  // await new Promise((resolve) => setTimeout(resolve, 5000));

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

  const filteredData = resData.filter((car) => {
    const dateTime = new Date(car.availableAt).toISOString();
    const formattedDateTime = new Date(`${date}T${time}:00Z`).toISOString();

    if (dateTime && formattedDateTime && !(dateTime <= formattedDateTime)) {
      return false;
    }

    if (car.available === false) {
      return false;
    }

    // Filter by capacity

    console.log(parseInt(capacity));

    if (car.capacity < parseInt(capacity)) {
      return false;
    }

    return true;
  });

  return filteredData;
}
