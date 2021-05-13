function isTouching(rect, rect1){

    if(rect.x-frect.x < rect1.width/2 + rect.width/2 && rect1.x - rect.x < rect1.width/2 + rect.width/2&&
      rect.y-frect.y < rect1.height/2 + rect.height/2 && rect1.y - rect.y < rect1.height/2 + rect.height/2 ){
  
      return true;
      
    }
    else{
  
      return false;
      
    }
  
  }