var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');


convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    console.log(URLinput.title);

    sendURL(URLinput.value);

});

function sendURL(URL) {
    window.location.href = `https://yt-downloader2019.herokuapp.com/download?URL=${URL}`;

}

