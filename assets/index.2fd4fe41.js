import{d as r,o as i,c as n,a as t,t as _,u as m,b as v,e as l,f as b}from"./vendor.7d036e96.js";const f=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}};f();const g="FlyStuandl";var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",NAME:g});const x={id:"mainNav",class:"navbar navbar-expand-lg navbar-light fixed-top"},y={class:"container px-4 px-lg-5"},w={class:"navbar-brand",href:"#page-top"},$=v('<button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fas fa-bars"></i></button><div class="collapse navbar-collapse" id="navbarResponsive"><ul class="navbar-nav ms-auto"><li class="nav-item"><a class="nav-link" href="#about">Info</a></li><li class="nav-item"><a class="nav-link" href="#projects">Videos</a></li><li class="nav-item"><a class="nav-link" href="#contact">Kontakt</a></li></ul></div>',2),k=r({setup(c){return(s,o)=>(i(),n("nav",x,[t("div",y,[t("a",w,_(m(p).NAME),1),$])]))}}),j={class:"masthead"},N={class:"container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center"},D={class:"d-flex justify-content-center"},S={class:"text-center"},A={class:"mx-auto my-0 text-uppercase"},M=t("h2",{class:"text-white-50 mx-auto mt-2 mb-5"}," Die coolsten Drohnenvideos zwischen Brenner und Salurn! ",-1),B=t("a",{class:"btn btn-primary",href:"#about"}," Los geht's ",-1),E=r({setup(c){return(s,o)=>(i(),n("header",j,[t("div",N,[t("div",D,[t("div",S,[t("h1",A,_(m(p).NAME),1),M,B])])])]))}});var P="/tobi-website/assets/about.7919bc1f.jpg";const V={id:"about",class:"about-section text-center"},F={class:"container px-4 px-lg-5"},I={class:"row gx-4 gx-lg-5 justify-content-center"},L={class:"col-lg-8"},O=t("h2",{class:"text-white mb-4"},"Ihr Drohenvideo - vom Profi!",-1),T={class:"text-white-50"},z=t("p",{class:"text-white-50"}," Mehr Text, der beschreibt warum man das unbedingt haben m\xF6chte. ",-1),C=t("p",{class:"text-white-50"}," Mega super, mega cool - eh klar. Viel Marketing BlaBla... ",-1),J=t("img",{class:"img-fluid",src:P,alt:"..."},null,-1),R=r({setup(c){return(s,o)=>(i(),n("section",V,[t("div",F,[t("div",I,[t("div",L,[O,t("p",T,_(m(p).NAME)+" bietet Ihnen professionelle Drohnenvideos als Gesamtpaket: Planung, Aufnahme und Schnitt - alles aus einer Hand. ",1),z,C])]),J])]))}});var G="/tobi-website/assets/project_1.4ccfb7ed.jpg",K="/tobi-website/assets/project_2.456fe84d.jpg",U="/tobi-website/assets/project_3.5eb90b03.jpg",u=(c,s)=>{const o=c.__vccOpts||c;for(const[d,e]of s)o[d]=e;return o};const W={},Z={id:"projects",class:"projects-section bg-light"},q=v('<div class="container px-4 px-lg-5"><div class="row gx-0 mb-4 mb-lg-5 align-items-center"><div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="'+G+'" alt="..."></div><div class="col-xl-4 col-lg-5"><div class="featured-text text-center text-lg-left"><h4> Drei Zinnen </h4><p class="text-black-50 mb-0"> Jooo, schian sein se schun, gell, de Berg - ha?! Und schaug wia schian die Sunn do aufgeat - sigsches? Jooooo, schun brutal schian, gell? </p></div></div></div><div class="row gx-0 mb-5 mb-lg-0 justify-content-center"><div class="col-lg-6"><img class="img-fluid" src="'+K+'" alt="..."></div><div class="col-lg-6"><div class="bg-black text-center h-100 project"><div class="d-flex h-100"><div class="project-text w-100 my-auto text-center text-lg-left"><h4 class="text-white"> Dor Stuandl mit dor Drohne. </h4><p class="mb-0 text-white-50"> Na schau, dor Stuandl. Und wos hot er denn do, ha!? A FPV Dronhe? Noubl, noubl. </p><hr class="d-none d-lg-block mb-0 ms-0"></div></div></div></div></div><div class="row gx-0 justify-content-center"><div class="col-lg-6"><img class="img-fluid" src="'+U+'" alt="..."></div><div class="col-lg-6 order-lg-first"><div class="bg-black text-center h-100 project"><div class="d-flex h-100"><div class="project-text w-100 my-auto text-center text-lg-right"><h4 class="text-white"> Die Werkstott </h4><p class="mb-0 text-white-50"> Do sig men die Profidrohnenmechanikerin von Stuandl in dor Werkstott ban Vorbereitenvon die negsten Aufnohmen. Dor Stuandl stellt jo lei Profis un, sell woas men woll. </p><hr class="d-none d-lg-block mb-0 me-0"></div></div></div></div></div></div>',1),H=[q];function Q(c,s){return i(),n("section",Z,H)}var X=u(W,[["render",Q]]);const Y={id:"contact",class:"contact-section bg-black"},ee=v('<div class="container px-4 px-lg-5"><div class="row gx-4 gx-lg-5"><div class="col-md-4 mb-3 mb-md-0"><div class="card py-4 h-100"><div class="card-body text-center"><i class="fas fa-map-marked-alt text-primary mb-2"></i><h4 class="text-uppercase m-0">Adresse</h4><hr class="my-4 mx-auto"><div class="small text-black-50"> Gampenstr\xDFe Irgendeppes<br> 39010 Tscherms<br> BZ - Italien </div></div></div></div><div class="col-md-4 mb-3 mb-md-0"><div class="card py-4 h-100"><div class="card-body text-center"><i class="fas fa-envelope text-primary mb-2"></i><h4 class="text-uppercase m-0">Email</h4><hr class="my-4 mx-auto"><div class="small text-black-50"><a href="#!">hello@yourdomain.com</a></div></div></div></div><div class="col-md-4 mb-3 mb-md-0"><div class="card py-4 h-100"><div class="card-body text-center"><i class="fas fa-mobile-alt text-primary mb-2"></i><h4 class="text-uppercase m-0">Telefon</h4><hr class="my-4 mx-auto"><div class="small text-black-50"><a href="tel:+393391234567">+39 339 123 45 67</a></div></div></div></div></div><div class="social d-flex justify-content-center"><a class="mx-2" href="https://www.instagram.com/stuandl_franz_fpv/"><i class="fab fa-instagram"></i></a></div></div>',1),te=[ee],se=r({setup(c){return(s,o)=>(i(),n("section",Y,te))}}),ae={},ce={class:"footer bg-black small text-center text-white-50"},oe=t("div",{class:"container px-4 px-lg-5"}," Copyright \xA9 Juri Berlanda 2022 ",-1),ie=[oe];function ne(c,s){return i(),n("footer",ce,ie)}var le=u(ae,[["render",ne]]);const re=r({setup(c){return(s,o)=>(i(),n("main",null,[l(k),l(E),l(R),l(X),l(se),l(le)]))}});b(re).mount("#app");
