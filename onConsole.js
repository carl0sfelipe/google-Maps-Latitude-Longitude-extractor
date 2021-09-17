node = document.getElementsByClassName('a4gq8e-aVTXAb-haAclf-jRmmHf-hSRGPd');
let arr = Array.prototype.slice.call(node);
let cordenates = arr.map((el)=>el.href).map((el)=>el.split("?")[0]).map((el)=>el.split("d-")).map((el)=> [el[1],el[2]]).map((el)=>[ el[0].substring(0, el[0].length - 2), el[1]]).map((el)=>[parseFloat(-el[0]),parseFloat(-el[1])])
