
async function getGPSCoordinates() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        },
        (error) => {
                reject(error);
            }
        );
    })
}

export default getGPSCoordinates