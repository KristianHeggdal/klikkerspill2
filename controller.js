function upgradeBusiness(index){
    const upgrade = model.data.upgrades[index] ;
  if(model.data.player.currentPoints >= upgrade.cost)
    {
   model.data.player.currentPoints-= upgrade.cost ;
   upgrade.level++;
   upgrade.value+=1;
   let newCost= upgrade.cost*1.5;
   newCost=Math.round(newCost/5) * 5;
   upgrade.cost = newCost*upgrade.value;
   //upgrade.cost = Math.ceil(upgrade.cost*1.5);
   // må vel ha cost * value elns
updateview()
  }  ;

}