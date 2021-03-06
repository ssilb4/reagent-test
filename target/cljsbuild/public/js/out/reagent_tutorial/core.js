// Compiled by ClojureScript 1.10.439 {}
goog.provide('reagent_tutorial.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('reitit.frontend');
goog.require('clerk.core');
goog.require('accountant.core');
reagent_tutorial.core.page_num = reagent.core.atom.call(null,(1));
reagent_tutorial.core.coordinate = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(300)], null));
reagent_tutorial.core.fish_coordinate = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand_int.call(null,(500)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.rand_int.call(null,(500)),new cljs.core.Keyword(null,"status","status",-1997798413),(1)], null));
reagent_tutorial.core.moveSpeed = reagent.core.atom.call(null,(1));
reagent_tutorial.core.moveInc = (function reagent_tutorial$core$moveInc(x){
return (x + cljs.core.deref.call(null,reagent_tutorial.core.moveSpeed));
});
reagent_tutorial.core.moveDec = (function reagent_tutorial$core$moveDec(x){
return (x - cljs.core.deref.call(null,reagent_tutorial.core.moveSpeed));
});
reagent_tutorial.core.moveSpeedButton = (function reagent_tutorial$core$moveSpeedButton(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"x1.0",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,reagent_tutorial.core.moveSpeed,(1));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"x2.0",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,reagent_tutorial.core.moveSpeed,(2));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"x4.0",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,reagent_tutorial.core.moveSpeed,(4));
})], null)], null)], null);
});
reagent_tutorial.core.common_head = (function reagent_tutorial$core$common_head(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Moving Cat"], null);
});
reagent_tutorial.core.common_nav = (function reagent_tutorial$core$common_nav(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"menu",new cljs.core.Keyword(null,"value","value",305978217),"Read Me",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,reagent_tutorial.core.page_num),(1)))?(function (){
return cljs.core.reset_BANG_.call(null,reagent_tutorial.core.page_num,(2));
}):(function (){
return cljs.core.reset_BANG_.call(null,reagent_tutorial.core.page_num,(1));
}))], null)], null)], null);
});
reagent_tutorial.core.readMe = (function reagent_tutorial$core$readMe(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You can move the cat. If you press arrowkey or w,a,s,d, the cat moves."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"and If you press c, the cat eat the fish."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"below input is for mobile users."], null)], null);
});
reagent_tutorial.core.common_article = (function reagent_tutorial$core$common_article(){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,reagent_tutorial.core.page_num),(1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"unvisible-readme"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,reagent_tutorial.core.page_num),(2))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"visible-readme"], null),reagent_tutorial.core.readMe.call(null)], null);
} else {
return null;
}
}
});
reagent_tutorial.core.common_footer = (function reagent_tutorial$core$common_footer(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"footer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This site was created by ssilb4 using cljs (reagent)."], null)], null);
});
reagent_tutorial.core.myFish = (function reagent_tutorial$core$myFish(){
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,reagent_tutorial.core.fish_coordinate),new cljs.core.Keyword(null,"status","status",-1997798413)),(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.fish","img.fish",-1162621215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://t1.daumcdn.net/cfile/tistory/991804435C8F940A2D",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"height","height",1025178622),"100px",new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,reagent_tutorial.core.fish_coordinate),new cljs.core.Keyword(null,"y","y",-1757859776))),"px"].join(''),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,reagent_tutorial.core.fish_coordinate),new cljs.core.Keyword(null,"x","x",2099068185))),"px"].join('')], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.fish","img.fish",-1162621215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://t1.daumcdn.net/cfile/tistory/99BAA2405C8F940A27",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"height","height",1025178622),"100px",new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,reagent_tutorial.core.fish_coordinate),new cljs.core.Keyword(null,"y","y",-1757859776))),"px"].join(''),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,reagent_tutorial.core.fish_coordinate),new cljs.core.Keyword(null,"x","x",2099068185))),"px"].join('')], null)], null)], null);
}
});
reagent_tutorial.core.newFish = (function reagent_tutorial$core$newFish(){
cljs.core.swap_BANG_.call(null,reagent_tutorial.core.fish_coordinate,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),(1));

cljs.core.swap_BANG_.call(null,reagent_tutorial.core.fish_coordinate,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand_int.call(null,(500)));

return cljs.core.swap_BANG_.call(null,reagent_tutorial.core.fish_coordinate,cljs.core.assoc,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.rand_int.call(null,(500)));
});
reagent_tutorial.core.capture = (function reagent_tutorial$core$capture(){
var hx = (cljs.core.get.call(null,cljs.core.deref.call(null,reagent_tutorial.core.coordinate),new cljs.core.Keyword(null,"x","x",2099068185)) + (150));
var hy = (cljs.core.get.call(null,cljs.core.deref.call(null,reagent_tutorial.core.coordinate),new cljs.core.Keyword(null,"y","y",-1757859776)) + (60));
var cx = (cljs.core.get.call(null,cljs.core.deref.call(null,reagent_tutorial.core.fish_coordinate),new cljs.core.Keyword(null,"x","x",2099068185)) + (20));
var cy = (cljs.core.get.call(null,cljs.core.deref.call(null,reagent_tutorial.core.fish_coordinate),new cljs.core.Keyword(null,"y","y",-1757859776)) + (20));
if(((((50) > (hx - cx))) && (((-15) < (hx - cx))) && (((30) > (hy - cy))) && (((-30) < (hy - cy))))){
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,reagent_tutorial.core.fish_coordinate),new cljs.core.Keyword(null,"status","status",-1997798413)),(1))){
cljs.core.swap_BANG_.call(null,reagent_tutorial.core.fish_coordinate,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),(2));

return setTimeout(((function (hx,hy,cx,cy){
return (function (){
return reagent_tutorial.core.newFish.call(null);
});})(hx,hy,cx,cy))
,(1000));
} else {
return "test";
}
} else {
return cljs.core.println.call(null,hx,hy,cx,cy);
}
});
reagent_tutorial.core.moving = (function reagent_tutorial$core$moving(e){
cljs.core.println.call(null,e.key);

if(cljs.core._EQ_.call(null,e.key,"ArrowUp")){
return cljs.core.swap_BANG_.call(null,reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),reagent_tutorial.core.moveDec);
} else {
if(cljs.core._EQ_.call(null,e.key,"ArrowDown")){
return cljs.core.swap_BANG_.call(null,reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),reagent_tutorial.core.moveInc);
} else {
if(cljs.core._EQ_.call(null,e.key,"ArrowLeft")){
return cljs.core.swap_BANG_.call(null,reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),reagent_tutorial.core.moveDec);
} else {
if(cljs.core._EQ_.call(null,e.key,"ArrowRight")){
return cljs.core.swap_BANG_.call(null,reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),reagent_tutorial.core.moveInc);
} else {
if(cljs.core._EQ_.call(null,e.key,"w")){
return cljs.core.swap_BANG_.call(null,reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),reagent_tutorial.core.moveDec);
} else {
if(cljs.core._EQ_.call(null,e.key,"s")){
return cljs.core.swap_BANG_.call(null,reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),reagent_tutorial.core.moveInc);
} else {
if(cljs.core._EQ_.call(null,e.key,"a")){
return cljs.core.swap_BANG_.call(null,reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),reagent_tutorial.core.moveDec);
} else {
if(cljs.core._EQ_.call(null,e.key,"d")){
return cljs.core.swap_BANG_.call(null,reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),reagent_tutorial.core.moveInc);
} else {
if(cljs.core._EQ_.call(null,e.key,"c")){
return reagent_tutorial.core.capture.call(null);
} else {
if(cljs.core._EQ_.call(null,e,"w")){
return cljs.core.swap_BANG_.call(null,reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),reagent_tutorial.core.moveDec);
} else {
if(cljs.core._EQ_.call(null,e,"s")){
return cljs.core.swap_BANG_.call(null,reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),reagent_tutorial.core.moveInc);
} else {
if(cljs.core._EQ_.call(null,e,"a")){
return cljs.core.swap_BANG_.call(null,reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),reagent_tutorial.core.moveDec);
} else {
if(cljs.core._EQ_.call(null,e,"d")){
return cljs.core.swap_BANG_.call(null,reagent_tutorial.core.coordinate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),reagent_tutorial.core.moveInc);
} else {
if(cljs.core._EQ_.call(null,e,"c")){
return reagent_tutorial.core.capture.call(null);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
reagent_tutorial.core.keytest = (function reagent_tutorial$core$keytest(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#mobileInput","input#mobileInput",-1161787119),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"It is for mobile user.",new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),(function (e){
reagent_tutorial.core.moving.call(null,cljs.core.last.call(null,e.target.value));

return document.getElementById("mobileInput").value = "";
})], null)], null);
});
reagent_tutorial.core.myHero = (function reagent_tutorial$core$myHero(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.hero","img.hero",-1458899130),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://t1.daumcdn.net/cfile/tistory/99E2063F5C89011921",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,reagent_tutorial.core.coordinate),new cljs.core.Keyword(null,"y","y",-1757859776))),"px"].join(''),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,reagent_tutorial.core.coordinate),new cljs.core.Keyword(null,"x","x",2099068185))),"px"].join('')], null)], null)], null);
});
reagent_tutorial.core.addEvent = (function reagent_tutorial$core$addEvent(){
return window.addEventListener("keydown",(function (e){
return reagent_tutorial.core.moving.call(null,e);
}));
});
reagent_tutorial.core.common_page = (function reagent_tutorial$core$common_page(){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.common_head], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.common_nav], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.common_article], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.keytest], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.myFish], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.myHero], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.moveSpeedButton], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.common_footer], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reagent_tutorial.core.addEvent.call(null)], null)], null);
});
});
reagent_tutorial.core.mount_root = (function reagent_tutorial$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_tutorial.core.common_page], null),document.getElementById("app"));
});
reagent_tutorial.core.init_BANG_ = (function reagent_tutorial$core$init_BANG_(){
clerk.core.initialize_BANG_.call(null);

return reagent_tutorial.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1553095937753
