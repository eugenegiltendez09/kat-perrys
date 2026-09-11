const address="M. L. Quezon Ave, Casuntingan, Mandaue, 6014 Cebu";
function message(t){document.getElementById("message").textContent=t}
async function copyAddress(){try{await navigator.clipboard.writeText(address);message("Address copied to clipboard.")}catch(e){message(address)}}
async function shareCafe(){
 const data={title:"Kat & Perry's Cafe",text:"Kat & Perry's Cafe — M. L. Quezon Ave, Casuntingan, Mandaue, Cebu",url:location.href};
 if(navigator.share){try{await navigator.share(data)}catch(e){}}
 else{try{await navigator.clipboard.writeText(location.href);message("Website link copied to clipboard.")}catch(e){message(location.href)}}
}
