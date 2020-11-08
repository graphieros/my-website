export default async function request(params) {

    const {section, method='GET', data} = params;

    const API_url = `${process.env.REACT_APP_API_ENDPOINT}/${section}`;
    
    const options = {
        method: method.toUpperCase(), // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    return await fetch(API_url, options)
        .then(response => response.json())
        .then(response => {
            return response
        })
        .catch(error => {
            console.log(error);
            return error;
        });

}


