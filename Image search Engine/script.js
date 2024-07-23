const accessKey = "rXl28wZsvun9zt2ohuOXypbocpaOzc7erTAjDqq45d0";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;


async function searchImages(){
    keyword = searchBox.Value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}
    &client_id=${accessKey}&per_page=15`;

    const response = await fetch(url);
    const data = await response.json();

   

     const results = data.results;

            results.map((result) => {
         const image = document.createElement("img");
         image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
         imageLink.target = "_blank";

         imageLink.appendChild(image);
         searchResult.appendChild(imageLink);


     });

   showMoreBtn.style.display="inline-block";
   showMoreBtn.style.margin="10px auto 10px";
}


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

   showMoreBtn.addEventListener("click", () =>{
    page++;
     searchImages();
 });