const myimage = document.querySelector("img");

myimage.onclick = ()=> {
  const mySrc = myimage.getAttribute("src");
  if (mySrc === "https://cdn.pixabay.com/photo/2014/12/31/11/41/shoes-584850_1280.jpg") {
    myimage.setAttribute("src", "https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_1280.jpg");
  } 
  else if (mySrc === "https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_1280.jpg") {
    myimage.setAttribute("src", "https://cdn.pixabay.com/photo/2017/04/09/18/54/shoes-2216498_640.jpg");
  } else {
    myimage.setAttribute("src", "https://cdn.pixabay.com/photo/2014/12/31/11/41/shoes-584850_1280.jpg");
  }
};