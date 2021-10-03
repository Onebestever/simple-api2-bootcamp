
 document.querySelector("button").addEventListener("click", getMeme)
  function getMeme(){
    const memeName = document.querySelector("input").value  // inside the function b/c we want to store the actual input and input will change bacsed on user input
    fetch(`https://api.imgflip.com/get_memes`)         
      .then(res => res.json())
      .then(data => {
        console.log(data)
        for(let i = 0; i < data.data.memes.length; i++){
          if(data.data.memes[i].name.toLowerCase().includes(memeName.toLowerCase().trim())==true){
            console.log(memeName)
            document.querySelector('img').src= data.data.memes[i].url
          }
        }
        
    } )
  }