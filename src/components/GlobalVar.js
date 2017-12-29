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
}

export default (new GlobalVar());
