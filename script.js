const meme_img = document.getElementById("meme-img");
const next_btn = document.getElementById('next-btn');
const meme_title = document.getElementById("meme-title");
const shareButton = document.getElementById("share-btn");
const loader = document.querySelector("#loading");


function FetchMemes()
{
	console.log("Called");
	let url = 'https://meme-api.herokuapp.com/gimme';
	displayLoading()
	fetch(url)
.then(response => response.json())
.then(data => {
  console.log(data.url)
  hideLoading()
  meme_img.setAttribute("src", data.url);
  meme_title.innerText = data.title;
})
.catch(error => console.error(error))
}

function displayLoading() {
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 5000);
}

// hiding loading 
function hideLoading() {
    loader.classList.remove("display");
}


next_btn.addEventListener("click", () =>{
		console.log("Called");
	displayLoading()
	let url = 'https://meme-api.herokuapp.com/gimme';
	fetch(url)
.then(response => response.json())
.then(data => {
  console.log(data.url)
  hideLoading()
  meme_img.setAttribute("src", data.url);
  meme_title.innerText = data.title;

})
.catch(error => console.error(error))
})
FetchMemes()

shareButton.addEventListener('click', event => {
  
});
