export const getFeed = () => {
    fetch("https://feeds.npr.org/1007/feed.json",
    {
        method: 'GET',
        credentials: 'include'
    })
    .then(response => response.json())
    .then(data => console.log(data))
}

// I can't get around the CORS on this - I don't know how to pull the data
// sad face