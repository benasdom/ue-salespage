let gsapi="https://apis.google.com/js/platform.js";
fetch(gsapi).then((data)=>{
  data.json;
}).then((infos)=>{console.log(infos)}).catch(err=>console.log(err))

let picgroup=[];

 function onSignIn(googleUser) {
   let urpic="";
// Useful data for your client-side scripts:
const profile =  googleUser.getBasicProfile();
console.log("ID: " + profile.getId()); // Don't send this directly to your server!
console.log('Full Name: ' + profile.getName());
console.log('Given Name: ' + profile.getGivenName());
console.log('Family Name: ' + profile.getFamilyName());
console.log("Email: " + profile.getEmail());
console.log("pic: " + profile.getImageUrl());
urpic=profile.getImageUrl();
picgroup.push(urpic);


// The ID token you need to pass to your backend: 
const id_token = googleUser.getAuthResponse().id_token;
console.log("ID Token: " + id_token);

if(picgroup[picgroup.length-1]){
    document.getElementById("content").innerHTML=profile.getName();
    document.getElementById("picid").onerror=me=>me.target.src=picgroup[picgroup.length-1];
    document.getElementById("picid").src=thiss=>thiss.target.src=picgroup[picgroup.length-1];
    document.getElementById("picid").onload=thiss=>thiss.target.src=picgroup[picgroup.length-1] || profile.getImageUrl();
    ;
    document.getElementById("picid").alt=profile.getGivenName();
    document.getElementById("picid").title=profile.getGivenName()+"\`s profile";

  let out=document.getElementById("menuss");
  let logouthere=document.getElementById("logouthere");
  out.onclick=()=>{
     document.getElementById("popup").style.cssText="display:flex;transition:all 1s ease-in-out;opacity:1";
    function signOut(){
      document.getElementById("dontlogout").onclick=()=>{
        document.getElementById("popup").style.cssText="display:none;transition:all 1s ease-in-out";
      }
    logouthere.onclick=()=>{
      if(logouthere){
    document.getElementById("popup").style.display="none";
      
      let auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        document.getElementById("picid").src="imgs/profile.png";

        setTimeout(()=>{
        document.getElementById("picid").src="imgs/profile.png";
        document.getElementById("picid").onerror=thiss=>thiss.target.src="imgs/profile.png";
        document.getElementById("picid").onload=thiss=>thiss.target.src="imgs/profile.png";
        document.getElementById("content").innerHTML="User";
      
      },70)

      });
    }else{return false}}
    } 
signOut();
}
}
else{
refresh();
}

}
document.body.onload=()=>{
  setTimeout(()=>{
  document.querySelector(".loader").style.cssText="opacity:0;z-index:-2";
 },1000);
}
