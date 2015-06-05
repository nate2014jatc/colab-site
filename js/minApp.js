function createSlots(e,t,n){for(var o=0;o<e.length;o++){var s=document.createElement("div");s.classList.add("grid-container","dateSlot",n),s.innerHTML="<div class='grid-3'><h4>"+e[o].date+"</h4></div><div class='grid-9'><h5>"+e[o].opponent+"</h5><h6>"+e[o].location+"</h6</div>",t.push(s)}}function newDateSection(e){var t=document.createElement("div");t.setAttribute("id","dateslots"),t.classList.add("group");for(var n=0;n<e.length;n++)t.appendChild(e[n]);dateSectionContainer.appendChild(t)}function removeSlotsDiv(e){var t=document.getElementById(e);t.parentNode.removeChild(t)}function addClick(e,t){for(var n=0;n<e.length;n++)e[n].onclick=t}function appendSlots(){this.classList.contains("jcc")?(removeSlotsDiv("dateslots"),newDateSection(jccSlots)):this.classList.contains("lcac")?(removeSlotsDiv("dateslots"),newDateSection(lcacSlots)):this.classList.contains("lt")?(removeSlotsDiv("dateslots"),newDateSection(ltSlots)):this.classList.contains("sm")&&(removeSlotsDiv("dateslots"),newDateSection(smSlots))}function displayAnswers(){this.children[1].classList.toggle("visible")}function toggleMenu(){menuButton[0].classList.toggle("menuActive"),menuSelections[0].classList.toggle("menuSelectionsHidden"),cover[0].classList.toggle("coverActive")}function photoSliderFunction(){photoSlider.setAttribute("src",photos[i]),i<photos.length-1?i++:i=0,setTimeout(photoSliderFunction,3e3)}!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():t()}(this,function(){function e(e){return e.replace(/<b[^>]*>(.*?)<\/b>/gi,function(e,t){return t}).replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function t(e){e=e.getElementsByTagName("a");for(var t=e.length-1;t>=0;t--)e[t].setAttribute("target","_blank")}function n(e,t){for(var n=[],o=new RegExp("(^| )"+t+"( |$)"),s=e.getElementsByTagName("*"),i=0,a=s.length;a>i;i++)o.test(s[i].className)&&n.push(s[i]);return n}var o="",s=20,i=!0,a=[],l=!1,c=!0,d=!0,p=null,r=!0,u=!0,m=null,h=!0,g=!1,v=!0,w=!0,f={fetch:function(e){if(void 0===e.maxTweets&&(e.maxTweets=20),void 0===e.enableLinks&&(e.enableLinks=!0),void 0===e.showUser&&(e.showUser=!0),void 0===e.showTime&&(e.showTime=!0),void 0===e.dateFunction&&(e.dateFunction="default"),void 0===e.showRetweet&&(e.showRetweet=!0),void 0===e.customCallback&&(e.customCallback=null),void 0===e.showInteraction&&(e.showInteraction=!0),void 0===e.showImages&&(e.showImages=!1),void 0===e.linksInNewWindow&&(e.linksInNewWindow=!0),void 0===e.showPermalinks&&(e.showPermalinks=!0),l)a.push(e);else{l=!0,o=e.domId,s=e.maxTweets,i=e.enableLinks,d=e.showUser,c=e.showTime,u=e.showRetweet,p=e.dateFunction,m=e.customCallback,h=e.showInteraction,g=e.showImages,v=e.linksInNewWindow,w=e.showPermalinks;var t=document.createElement("script");t.type="text/javascript",t.src="https://cdn.syndication.twimg.com/widgets/timelines/"+e.id+"?&lang="+(e.lang||"en")+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random(),document.getElementsByTagName("head")[0].appendChild(t)}},callback:function(C){var S=document.createElement("div");S.innerHTML=C.body,"undefined"==typeof S.getElementsByClassName&&(r=!1),C=[];var y=[],L=[],T=[],J=[],A=[],b=[],M=0;if(r)for(S=S.getElementsByClassName("tweet");M<S.length;)J.push(0<S[M].getElementsByClassName("retweet-credit").length?!0:!1),(!J[M]||J[M]&&u)&&(C.push(S[M].getElementsByClassName("e-entry-title")[0]),A.push(S[M].getAttribute("data-tweet-id")),y.push(S[M].getElementsByClassName("p-author")[0]),L.push(S[M].getElementsByClassName("dt-updated")[0]),b.push(S[M].getElementsByClassName("permalink")[0]),T.push(void 0!==S[M].getElementsByClassName("inline-media")[0]?S[M].getElementsByClassName("inline-media")[0]:void 0)),M++;else for(S=n(S,"tweet");M<S.length;)C.push(n(S[M],"e-entry-title")[0]),A.push(S[M].getAttribute("data-tweet-id")),y.push(n(S[M],"p-author")[0]),L.push(n(S[M],"dt-updated")[0]),b.push(S[M].getElementsByClassName("permalink")[0]),T.push(void 0!==n(S[M],"inline-media")[0]?n(S[M],"inline-media")[0]:void 0),J.push(0<n(S[M],"retweet-credit").length?!0:!1),M++;for(C.length>s&&(C.splice(s,C.length-s),y.splice(s,y.length-s),L.splice(s,L.length-s),J.splice(s,J.length-s),T.splice(s,T.length-s),b.splice(s,b.length-s)),S=[],M=C.length,J=0;M>J;){if("string"!=typeof p){var B=L[J].getAttribute("datetime"),E=new Date(L[J].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),B=p(E,B);if(L[J].setAttribute("aria-label",B),C[J].innerText)if(r)L[J].innerText=B;else{var E=document.createElement("p"),k=document.createTextNode(B);E.appendChild(k),E.setAttribute("aria-label",B),L[J]=E}else L[J].textContent=B}B="",i?(v&&(t(C[J]),d&&t(y[J])),d&&(B+='<div class="user">'+e(y[J].innerHTML)+"</div>"),B+='<p class="tweet">'+e(C[J].innerHTML)+"</p>",c&&(B=w?B+('<p class="timePosted"><a href="'+b[J]+'">'+L[J].getAttribute("aria-label")+"</a></p>"):B+('<p class="timePosted">'+L[J].getAttribute("aria-label")+"</p>"))):C[J].innerText?(d&&(B+='<p class="user">'+y[J].innerText+"</p>"),B+='<p class="tweet">'+C[J].innerText+"</p>",c&&(B+='<p class="timePosted">'+L[J].innerText+"</p>")):(d&&(B+='<p class="user">'+y[J].textContent+"</p>"),B+='<p class="tweet">'+C[J].textContent+"</p>",c&&(B+='<p class="timePosted">'+L[J].textContent+"</p>")),h&&(B+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+A[J]+'" class="twitter_reply_icon"'+(v?' target="_blank">':">")+'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+A[J]+'" class="twitter_retweet_icon"'+(v?' target="_blank">':">")+'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+A[J]+'" class="twitter_fav_icon"'+(v?' target="_blank">':">")+"Favorite</a></p>"),g&&void 0!==T[J]&&(E=T[J],void 0!==E?(E=E.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0],E=decodeURIComponent(E).split('"')[1]):E=void 0,B+='<div class="media"><img src="'+E+'" alt="Image from tweet" /></div>'),S.push(B),J++}if(null===m){for(C=S.length,y=0,L=document.getElementById(o),T="<ul>";C>y;)T+="<li>"+S[y]+"</li>",y++;L.innerHTML=T+"</ul>"}else m(S);l=!1,0<a.length&&(f.fetch(a[0]),a.splice(0,1))}};return window.twitterFetcher=f});var jccSchedule=[{date:"June 16th",opponent:"JCC vs. Sports Mall",location:"Home"},{date:"June 23rd",opponent:"JCC vs.Life Centre",location:"Home"},{date:"June 30th",opponent:"JCC vs. Life Time Fitness",location:"Away"},{date:"July 9th",opponent:"Relay Meet",location:"Life Time Fitness"},{date:"July 14th",opponent:"JCC vs. SportsMall",location:"Away"},{date:"July 21st",opponent:"JCC vs. Life Centre",location:"Away"},{date:"July 28th",opponent:"JCC vs. Life Time Fitness",location:"Home"},{date:"Aug 6th",opponent:"Championship Meet",location:"South Davis Rec"},{date:"Aug 7th",opponent:"Championship Meet",location:"South Davis Rec"}],lcacSchedule=[{date:"June 16th",opponent:"Life Centre vs. Life Time Fitness",location:"Home"},{date:"June 23rd",opponent:"Life Centre vs. JCC",location:"Away"},{date:"June 30th",opponent:"Life Centre vs. Sports Mall",location:"Home"},{date:"July 9th",opponent:"Relay Meet",location:"Life Time Fitness"},{date:"July 14th",opponent:"Life Centre vs. Life Time Fitness",location:"Away"},{date:"July 21st",opponent:"Life Centre vs. JCC",location:"Away"},{date:"July 28th",opponent:"Life Centre vs. Sports Mall",location:"Away"},{date:"Aug 6th",opponent:"Championship Meet",location:"South Davis Rec"},{date:"Aug 7th",opponent:"Championship Meet",location:"South Davis Rec"}],ltSchedule=[{date:"June 16th",opponent:"Life Time Fitness vs. Life Centre",location:"Away"},{date:"June 23rd",opponent:"Life Time Fitness vs. Sports Mall",location:"Home"},{date:"June 30th",opponent:"Life Time Fitness vs. JCC",location:"Home"},{date:"July 9th",opponent:"Relay Meet",location:"Life Time Fitness"},{date:"July 14th",opponent:"Life Time Fitness vs. Life Centre ",location:"Home"},{date:"July 21st",opponent:"Life Time Fitness vs. Sports Mall",location:"Away"},{date:"July 28th",opponent:"Life Time Fitness vs. JCC",location:"Away"},{date:"Aug 6th",opponent:"Championship Meet",location:"South Davis Rec"},{date:"Aug 7th",opponent:"Championship Meet",location:"South Davis Rec"}],smSchedule=[{date:"June 16th",opponent:"Sports Mall vs. JCC",location:"Away"},{date:"June 23rd",opponent:"Sports Mall vs. Life Time Fitness",location:"Away"},{date:"June 30th",opponent:"Sports Mall vs. Life Centre",location:"Away"},{date:"July 9th",opponent:"Relay Meet",location:"Life Time Fitness"},{date:"July 14th",opponent:"Sports Mall vs. JCC",location:"Away"},{date:"July 21st",opponent:"Sports Mall vs. Life Time Fitness",location:"Home"},{date:"July 28th",opponent:"Sports Mall vs. Life Centre",location:"Home"},{date:"Aug 6th",opponent:"Championship Meet",location:"South Davis Rec"},{date:"Aug 7th",opponent:"Championship Meet",location:"South Davis Rec"}],config1={id:"601122400374169600",domId:"tweet",maxTweets:4,enableLinks:!0,showUser:!1},photos=["img/South Davis 1.jpg","img/South Davis 2.jpg","img/South Davis 3.jpg"],teams=["jcc","lcac","lt","sm"],jccSlots=[],lcacSlots=[],ltSlots=[],smSlots=[],scheduleButtons=document.getElementsByClassName("scheduleButton"),dateSectionContainer=document.getElementById("dateSlotsContainer"),faqButtons=document.getElementsByClassName("question"),menuButton=document.getElementsByClassName("menuButton"),menuSelections=document.getElementsByClassName("menuSelections"),cover=document.getElementsByClassName("cover"),menuSelection=document.getElementsByClassName("menuSelection"),photoSlider=document.getElementById("photoSlider"),i=0;createSlots(jccSchedule,jccSlots,"jcc"),createSlots(lcacSchedule,lcacSlots,"lcac"),createSlots(ltSchedule,ltSlots,"lt"),createSlots(smSchedule,smSlots,"sm"),addClick(scheduleButtons,appendSlots),addClick(faqButtons,displayAnswers),addClick(menuButton,toggleMenu),addClick(menuSelection,toggleMenu),twitterFetcher.fetch(config1),photoSliderFunction();
