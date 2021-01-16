function hasCollided(obj1,obj2){
    bulletRightEdge = obj1.x + obj1.width
    wallLeftEdge = obj2.x
    if(bulletRightEdge>=wallLeftEdge){
        return true
    }
    return false
}