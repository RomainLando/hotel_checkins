const baseURL = 'http://localhost:9000/api/guests/'

export const getGuests = () => {
    return fetch(baseURL)
    .then(res => res.json())
}