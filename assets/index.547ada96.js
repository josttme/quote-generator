(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function f(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=f(e);fetch(e.href,t)}})();const m="https://jacintodesign.github.io/quotes-api/data/quotes.json",u=document.getElementById("quote-container"),d=document.getElementById("quote"),i=document.getElementById("author"),h=document.getElementById("twitter"),g=document.getElementById("new-quote"),l=document.getElementById("loader");let s=[];function p(){l.hidden=!1,u.hidden=!0}function y(){u.hidden=!1,l.hidden=!0}function a(){p();const n=s[Math.floor(Math.random()*s.length)];n.author?i.textContent=n.author:i.textContent="Unknown",d.textContent=n.text,y()}async function w(){try{s=await(await fetch(m)).json(),a()}catch(n){console.log(n)}}function L(){const n=`https://twitter.com/intent/tweet?text=${d.textContent} - ${i.textContent}`;window.open(n,"_blank")}g.addEventListener("click",a);h.addEventListener("click",L);w();
