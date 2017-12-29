class GlobalVar{
  getServerLink(){
    const thisHostName = window.location.hostname;
    console.log(thisHostName);
    if(thisHostName === "localhost"){
        return "http://localhost:5000";
    }
    else if(thisHostName === "government-client.herokuapp.com"){
        return 'https://government-in-the-pocket.herokuapp.com';
    }
  }
  closeBrowser(){
    const script = document.createElement("script");
    const scriptText = document.createTextNode(`
      MessengerExtensions.requestCloseBrowser(function success() {
        console.log("webview closed");
      }, function error(err) {
        console.log("error ocured", err);
      });
    `);
    script.appendChild(scriptText);
    document.head.appendChild(script);
  }
}

export default (new GlobalVar());
