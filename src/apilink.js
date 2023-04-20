export function apilink(url, setContent) {
    var link = fetch(`http://127.0.0.1:8000/api${url}`, {
        'method': 'GET',
        headers : {
            'Content-Type': 'application/json',
            'Authorization': 'Token cf45ca1eb6bd5328106e749446ef6f9f76c473a2'
        } 

    }).then(resp => resp.json())
    .then(resp => {setContent(resp);} )
    .catch(resp => console.log('Fetch Error: ', resp.message))

     return link
}

