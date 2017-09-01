(function(w){
 const $=w, $d=$.document, addListener=$.addEventListener, remListener=$.removeEventListener, on=function(a,b){remListener(a,b);addListener(a,b)}, at=function(a,b){on(a,function f(x){b(x);remListener(a,f)})}, atLoad=function(a){$d.readyState!=='complete'?at('load',a):a({target:$d})};
 atLoad(function(evt){
  const $d=evt.target, $=$d.defaultView, $dE=$d.documentElement;
  if($dE!==null){
   const trace=$.console, css=[], frag=$d.createDocumentFragment(), $dE2=frag.appendChild($dE.cloneNode(true)), walker=$d.createNodeIterator($dE2,-1,null), blankLinePattern=/^\s*[\r\n]/gm;
   let e=$dE2;
   trace.group('logs');
   while(e){
    let i=e.nodeType,k=false;
    if(i!==8){
     if(i!==3){
      if(i!==1){
       k=e;//trace.info(i,e);
      }else{
       const s=e.tagName.toLowerCase();
       if(s!=='style'){
        if(s!=='link'){
         if(s!=='script'){
		  if(e.style.display!=='none'){
			const m=e.attributes;
			if(m.length>0){
			 const o=new Set();
			 if(e.hasAttribute('style')){
			  const a=e.getAttributeNode('style');
			  let s=a.value;
			  if(blankLinePattern.test(s)!==true){
				a.value=s.trim();  
				a.ownerNode=e;
				css.push(a);
				o.add(a)
			  };
			  e.removeAttribute('style')
			 };
			 //
			 while(m.length>0){
			  let s=m[0].name;
			  o.add(e.getAttributeNode(s));
			  e.removeAttribute(s);
			 };

			 
			 
			 e.originalAttributes=o;console.dir(o);
		   }
		  }else{
		   k=e
		  }		  
         }else{
          k=e
         }
        }else{
         if(e.getAttribute('rel')!== 'stylesheet'){
          //remattrs
         }else{
          css.push(k=e)
         }
        }
       }else{
        css.push(k=e)
       }
      }
     }
    }else{
     k=e
    };
    if(k!==false){e.remove()};e=walker.nextNode()
   };
   $dE.replaceWith($dE2);
   //   
   trace.log('cascade:%O',css);
   trace.groupEnd();
  }
 })
})(window);
