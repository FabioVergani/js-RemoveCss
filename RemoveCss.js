(function(w){
 function on(a,b){$rem(a,b);$add(a,b)}
 function at(a,b){on(a,function f(x){b(x);$rem(a,f)})}
 function f(evt){
  const $d=evt.target,$frag=$d.createDocumentFragment(),$dE=$d.documentElement;
  let e=$frag.appendChild($dE.cloneNode(true)),o=$d.createNodeIterator(e,-1,null);
  while(e=o.nextNode()){
   let i=e.nodeType;
   if(i!==8){
    if(i===1){
	 const s=e.tagName.toLowerCase(),x='style';
	 if(s!==x){
	  if(s!=='link'){
	   if(e.hasAttribute(x)){e.removeAttribute(x)}		  
	  }else{
		if(e.getAttribute('rel')==='stylesheet'){
		 e.remove()
		}
	  }
	 }else{
	  e.remove()
	 }
    }
   }else{
    e.remove()
   }
  };
  //
  $dE.replaceWith($frag.firstChild);
 }
 const $=w,$d=$.document,$rem=$.removeEventListener,$add=$.addEventListener;
 console.clear();
 $d.readyState!=='complete'?at('load',f):f({target:$d})
})(window);
//========

