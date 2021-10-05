let navButtons = document.getElementsByClassName("nav-button");
console.log(navButtons);

for (let i = 0; i < navButtons.length; i++){
  navButtons[i].addEventListener("click", function(evt){

    console.log("A button was clicked");
    console.log(evt.target.id);


    let allContent = document.getElementsByClassName("content");
    for (let j = 0; j < allContent.length; j++){
      allContent[j].style.display = "none";
    }

    let contentID = "content-" + evt.target.id;

    let contentToShow = document.getElementById(contentID);
    contentToShow.style.display = "block";

    if (i === 1){
      let showMap = document.getElementById('mappa');
      showMap.style.display = "inline-block";
        // showMap.style.position = "absolute";
        // showMap.style.top = "300px"; 
        // showMap.style.left = "20px";
      }  else {
        let showMap = document.getElementById('mappa');
        showMap.style.display = "none"
    }
    // let firstCanvas = document.getElementsById("canvas");

    // if (i === 3){
    //   let showMap = document.getElementById('mappa2');
    //   showMap.style.display = "inline-block";
    //     // showMap.style.position = "absolute";
    //     // showMap.style.top = "300px"; 
    //     // showMap.style.left = "20px";
    //   }  else {
    //     let showMap = document.getElementById('mappa2');
    //     showMap.style.display = "none"
    // }


  }

  );
}


