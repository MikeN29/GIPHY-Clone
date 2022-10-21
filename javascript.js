


let api = []
let searchText = []



function searchEnabled() {
    if (document.getElementById('gifSearch').value==="") {
        document.getElementById("searchButton").disabled = true;
    } else {
        document.getElementById("searchButton").disabled = false;
    }
}



function addSearchToAPI() {

    document.getElementById("searchButton").disabled = true;

    let searchText = document.getElementById('gifSearch').value;
    let api = `https://api.giphy.com/v1/gifs/search?api_key=xKDj5FrRfUCJ47JpKmAarFvb0rXYcV3v&q=${searchText}&limit=40&offset=0&rating=g&lang=en`
    //alert(api)
    console.log(api)
    event.preventDefault()

    fetch(api)
      .then(response => response.json()  )
      .then(content => {
        console.log(content.data[0].images.original.url);
        console.log('META', content.meta);
        document.getElementById("img1").src = content.data[0].images.original.url
        document.getElementById("img2").src = content.data[1].images.original.url
        document.getElementById("img3").src = content.data[2].images.original.url
        document.getElementById("img4").src = content.data[3].images.original.url
        document.getElementById("img5").src = content.data[4].images.original.url
        document.getElementById("img6").src = content.data[5].images.original.url
        document.getElementById("img7").src = content.data[6].images.original.url
        document.getElementById("img8").src = content.data[7].images.original.url
        document.getElementById("img9").src = content.data[8].images.original.url
        document.getElementById("img10").src = content.data[9].images.original.url
        document.getElementById("img11").src = content.data[10].images.original.url
        document.getElementById("img12").src = content.data[11].images.original.url
        document.getElementById("img13").src = content.data[12].images.original.url
        document.getElementById("img14").src = content.data[13].images.original.url
        document.getElementById("img15").src = content.data[14].images.original.url
        document.getElementById("img16").src = content.data[15].images.original.url
        document.getElementById("img17").src = content.data[16].images.original.url
        document.getElementById("img18").src = content.data[17].images.original.url
        document.getElementById("img19").src = content.data[18].images.original.url
        document.getElementById("img20").src = content.data[19].images.original.url
    })
    .catch(err =>{
        console.error(err)
    })

}


function loadMore() {
    document.getElementById("loadmoreButton").disabled = true;

    let searchText = document.getElementById('gifSearch').value;
    let api = `https://api.giphy.com/v1/gifs/search?api_key=xKDj5FrRfUCJ47JpKmAarFvb0rXYcV3v&q=${searchText}&limit=40&offset=0&rating=g&lang=en`
   
    event.preventDefault()

    fetch(api)
    .then(response => response.json()  )
    .then(content => {
      console.log(content.data[0].images.original.url);
      console.log('META', content.meta);
      document.getElementById("img21").src = content.data[20].images.original.url
      document.getElementById("img22").src = content.data[21].images.original.url
      document.getElementById("img23").src = content.data[22].images.original.url
      document.getElementById("img24").src = content.data[23].images.original.url
      document.getElementById("img25").src = content.data[24].images.original.url
      document.getElementById("img26").src = content.data[25].images.original.url
      document.getElementById("img27").src = content.data[26].images.original.url
      document.getElementById("img28").src = content.data[27].images.original.url
      document.getElementById("img29").src = content.data[28].images.original.url
      document.getElementById("img30").src = content.data[29].images.original.url
      document.getElementById("img31").src = content.data[30].images.original.url
      document.getElementById("img32").src = content.data[31].images.original.url
      document.getElementById("img33").src = content.data[32].images.original.url
      document.getElementById("img34").src = content.data[33].images.original.url
      document.getElementById("img35").src = content.data[34].images.original.url
      document.getElementById("img36").src = content.data[35].images.original.url
      document.getElementById("img37").src = content.data[36].images.original.url
      document.getElementById("img38").src = content.data[37].images.original.url
      document.getElementById("img39").src = content.data[38].images.original.url
      document.getElementById("img40").src = content.data[39].images.original.url
  })
  .catch(err =>{
      console.error(err)
  })

}

function resetSearch() {
    //delete search
    window.location.reload();
    document.getElementById('gifSearch').value = "";
    document.getElementById("loadmoreButton").disabled = false;
    document.getElementById("trendingButton").disabled = false;
}


function loadTrending() {
    document.getElementById("trendingButton").disabled = true;
    document.getElementById("searchButton").disabled = true;
    document.getElementById("loadmoreButton").disabled = true;

    //let searchText = document.getElementById('gifSearch').value;
    let api = `https://api.giphy.com/v1/gifs/trending?api_key=xKDj5FrRfUCJ47JpKmAarFvb0rXYcV3v&limit=40&offset=0&rating=g&lang=en`
    //alert(api)
    console.log(api)
    event.preventDefault()

    fetch(api)
      .then(response => response.json()  )
      .then(content => {
        console.log(content.data[0].images.original.url);
        console.log('META', content.meta);
        document.getElementById("img1").src = content.data[0].images.original.url
        document.getElementById("img2").src = content.data[1].images.original.url
        document.getElementById("img3").src = content.data[2].images.original.url
        document.getElementById("img4").src = content.data[3].images.original.url
        document.getElementById("img5").src = content.data[4].images.original.url
        document.getElementById("img6").src = content.data[5].images.original.url
        document.getElementById("img7").src = content.data[6].images.original.url
        document.getElementById("img8").src = content.data[7].images.original.url
        document.getElementById("img9").src = content.data[8].images.original.url
        document.getElementById("img10").src = content.data[9].images.original.url
        document.getElementById("img11").src = content.data[10].images.original.url
        document.getElementById("img12").src = content.data[11].images.original.url
        document.getElementById("img13").src = content.data[12].images.original.url
        document.getElementById("img14").src = content.data[13].images.original.url
        document.getElementById("img15").src = content.data[14].images.original.url
        document.getElementById("img16").src = content.data[15].images.original.url
        document.getElementById("img17").src = content.data[16].images.original.url
        document.getElementById("img18").src = content.data[17].images.original.url
        document.getElementById("img19").src = content.data[18].images.original.url
        document.getElementById("img20").src = content.data[19].images.original.url
        document.getElementById("img21").src = content.data[20].images.original.url
        document.getElementById("img22").src = content.data[21].images.original.url
        document.getElementById("img23").src = content.data[22].images.original.url
        document.getElementById("img24").src = content.data[23].images.original.url
        document.getElementById("img25").src = content.data[24].images.original.url
        document.getElementById("img26").src = content.data[25].images.original.url
        document.getElementById("img27").src = content.data[26].images.original.url
        document.getElementById("img28").src = content.data[27].images.original.url
        document.getElementById("img29").src = content.data[28].images.original.url
        document.getElementById("img30").src = content.data[29].images.original.url
        document.getElementById("img31").src = content.data[30].images.original.url
        document.getElementById("img32").src = content.data[31].images.original.url
        document.getElementById("img33").src = content.data[32].images.original.url
        document.getElementById("img34").src = content.data[33].images.original.url
        document.getElementById("img35").src = content.data[34].images.original.url
        document.getElementById("img36").src = content.data[35].images.original.url
        document.getElementById("img37").src = content.data[36].images.original.url
        document.getElementById("img38").src = content.data[37].images.original.url
        document.getElementById("img39").src = content.data[38].images.original.url
        document.getElementById("img40").src = content.data[39].images.original.url
    })
    .catch(err =>{
        console.error(err)
    })

}



const button = document.querySelector('searchButton');

const disableButton = () => {
  console.log("va");
  button.disabled = true;

};

searchButton.addEventListener('click', disableButton);








