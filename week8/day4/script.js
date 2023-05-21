//Exercise1
var xhr = new XMLHttpRequest();
var url =
  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    console.log(response);
  }
};

xhr.open("GET", url, true);
xhr.send();

//Exercise2
var xhr = new XMLHttpRequest();
var apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
var searchTerm = "sun";
var limit = 10;
var offset = 2;
var url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=${limit}&offset=${offset}&api_key=${apiKey}`;

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    console.log(response);
  }
};

xhr.open("GET", url, true);
xhr.send();
