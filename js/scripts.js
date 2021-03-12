const URL_BASE = 'https://api.spacexdata.com/v4';

function getDragons() {
    try {
        fetch(`${URL_BASE}/dragons`, { mode: "cors" })
            .then((response) => {return response.json})
            .then(data => console.log(data));
    } catch(e) {
        console.error(e);
    }
}
