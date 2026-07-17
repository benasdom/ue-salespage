document.body.onload=()=>{
  setTimeout(()=>{
    document.querySelector(".loader").style.cssText="opacity:0;z-index:-2";
  },1000);
}