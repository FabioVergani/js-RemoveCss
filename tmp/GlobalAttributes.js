//tag da rimuovere

font
isindex
basefont
keygen
spacer
shadow

//tag da sostituire
<acronym title="x">x</acronym> = <span title="x">x</span> 
<marquee>This text will scroll from right to left</marquee>
<content>= <slot> 
<listing>,<plaintext>=<pre>
<strike>=<del>
<tt>,<xmp>=<code>


//unwrap
<center>
<dir>



//attributi da mantenere:
attributiGlobali:

accesskey
contextmenu
dir
item(id|ref|prop|type|scope)
lang
slot
spellcheck
tabindex
title
translate

---------------------------------------------
>th,td:
colspan
rowspan
headers
scope



 >object:
data
typemustmatch

>ol:
reversed
start

>menu,menuitem,option,optgroup,track:
label

>menuitem:
command

icon
radiogroup

>menuitem,track:
default

>track:
kind

>meta:
charset
content
http-equiv

>html
xmlns 




>frameset,textarea:
cols
rows

>input,menuitem:
checked

>input:
capture
list
pattern
step

>input,textarea:
placeholder
readonly
maxlength
minlength
selectionDirection
selectionEnd
selectionStart



>input,textare,select:
required

>input,select:
size

>input,meter,progress:
max

>input,meter:
min


>button,input,li:
form(action|enctype|method|novalidate|target)



>form,input:
accept


>form,input,textarea:
autocomplete

>form,input,textarea,select:
autofocus

>select:
multiple

>form:
accept-charset
action
enctype
method
novalidate





>fieldset,button,input,link,menuitem,option,optgroup,select,textarea: 
disabled

>option:
selected

>label,output:
for

>fieldset,input,label,meter,output,object,select,textarea:
form

 
>button,input,li,data,meter,option,param,progress:
 value
 
>ins,del,data,time:
datetime



 >q,ins,del,blockquote:
 cite


>a,area,base,form: 
 target//_self?
 

>a,area,link:
 hreflang
 
>a,area:
 download
 rel
coords 
shape 
 
>a,button,embed,link,menuitem,menu,ol,object,source:
 type
 
 
>area,img:
alt
 
>area,link,source:
media

>video:
poster


>audio,video:
autoplay
buffered
controls
muted
played
preload



>audio,video,bgsound:
loop

>audio,bgsound:
volume 

>audio:
autobuffer

 
>bgsound:
balance
 



 

 
>col,colgroup:
 span
 
 
>link:
 as
 integrity
 methods
 prefetch
 
 
 
>link,img,video:
crossorigin


>link,img,source:
sizes 



>meter:
low
high
optimum

>dialog,details:
 open
 
>img,object:
usemap 


 >img:
ismap

 
  >img,source:
 srcset
 
 >iframe:
 allowfullscreen
 allowpaymentrequest
 frameborder
 marginheight
 marginwidth
 remote
 scrolling
 sandbox
srcdoc

 
  >iframe,img:
 longdesc
 
 
 >img,canvas,embed,iframe,object,video:
 height
 width
 
>a,area,img,iframe:
 referrerpolicy 
 
 >form,fieldset,button,slot,input,iframe,meta,map,output,param,select,textarea: 
name

>textarea:
wrap


>audio,img,bgsound,frame,embed,input[type=image],iframe,source,track,video:
src

>track
srclang

>a,area,base,link: 
 href  


 