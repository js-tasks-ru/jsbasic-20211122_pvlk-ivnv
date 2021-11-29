function checkSpam(str){
  var lowStr=str.toLowerCase();	
    if (lowStr.indexOf('xxx')!=-1||lowStr.indexOf('1xbet')!=-1) return true;
    else return false;
  }
