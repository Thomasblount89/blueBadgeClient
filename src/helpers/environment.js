let APIURL = '';

switch (window.location.hostname) {

    case 'localhost' || '127.0.0.1':
        APIURL = "http://localhost:3001";
        break;
    case 'tlr-my-flix.herokuapp.com':
        APIURL = 'https://tlr-my-flix.herokuapp.com'
}

export default APIURL;