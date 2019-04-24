var emailText=document.getElementById('emailText')
var textIn=document.getElementById('ti')
var textOut=document.getElementById("to")
var button = document.getElementById('submitButton')
var backButton=document.getElementById('back-button')
var resultPredict=document.getElementById('resultPredict')

function getEmailText() {
var emailTextValue=emailText.value
// var url="http://127.0.0.1:8888/test/"+emailTextValue;
var url="http://127.0.0.1:8888/test/"
var f=fetch(url,{
  method:'POST',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body:JSON.stringify({"email-text":emailTextValue})
})
.then(
function(response) {
  if (response.status !== 200) {
    console.log('Looks like there was a problem. Status Code: ' +
      response.status);
    return;
  }
  textIn.classList.add('is-hidden')
  button.classList.add('is-hidden')
  textOut.classList.remove('is-hidden')
  backButton.classList.remove('is-hidden')

  // Examine the text in the response
  response.json().then(function(data) {
    console.log(data);
    resultPredict.innerText=`${data}`
  });
}
)
.catch(function(err) {
console.log('Fetch Error :-S', err);
});

// var url = 'http://127.0.0.1:8889/test/kk';
// // var data = {username: 'example'};

// fetch(url, {
//   method: 'POST', // or 'PUT'
//   body: "hello",//JSON.stringify(data), // data can be `string` or {object}!
//   headers:{
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Headers': 'Content-Type',
//     'Access-Control-Allow-Origin':'*'
//   }
// }).then(res => res.json())
// .then(response => console.log('Success:', JSON.stringify(response)))
// .catch(error => console.error('Error:', error));
}


function backbutton() {
resetValues()
}



function resetValues() {
emailText.value=""
textIn.classList.remove('is-hidden')
button.classList.remove('is-hidden')
textOut.classList.add('is-hidden')
backButton.classList.add('is-hidden')

}