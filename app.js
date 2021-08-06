function createUrl(text)
{
    var url = 'https://api.funtranslations.com/translate/shakespeare.json?' + "text=" + text
    return url
}


function errorHandler(error)
{
    console.log("error occured",error);
    alert("something went wrong, please try after sometime.");
}


function fetchJson()
{
    
    englishText = document.querySelector("#englishText");
    
    fetch(createUrl(englishText.value)).then(response => response.json()).then(json => {
       var translatedText = json.contents.translated;
       
        outputArea = document.querySelector("#convertedText");
        outputArea.innerHTML = translatedText;
    })
    .catch(errorHandler)

   
}

const btn = document.querySelector("#Submitbtn");

btn.addEventListener('click',function(event)
{
    fetchJson();
});
