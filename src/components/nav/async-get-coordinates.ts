export interface Coords {
  latitude: number
  longitude: number
}

const getCoordinates = (): Promise<Coords> => {
	return new Promise((resovle, reject) => {
		navigator.geolocation.getCurrentPosition(
			(coordinate) => {
				resovle({ latitude: coordinate.coords.latitude, longitude: coordinate.coords.longitude });
			},
			(err) => {
				reject(err);
			},
		);
	});
};

export default getCoordinates;
