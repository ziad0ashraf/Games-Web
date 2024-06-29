export class Ui{
     displayGames(data){
        let cartona="";
         for (let i = 0; i < data.length; i++) {
             cartona+=`
                         <div class="col-lg-3">
           <div id="${data[i].id}" class="cardGame d-flex flex-column h-100 p-2 rounded-2 overflow-x-hidden">
             <img src="${data[i].thumbnail}" class="object-fit-cover" alt="">
             <div class="d-flex justify-content-between py-2"><span>${data[i].title}</span> <button class="btn btn-info">free</button></div>
             <p class="pb-2 fs-6">${data[i].short_description.split(" ", 8)}</p><hr>
             <div class="d-flex justify-content-between align-items-baseline"><span>${data[i].genre}</span> <span>${data[i].platform}</span></div>
           </div>
         </div>
 
             `        
         }
         document.getElementById('demo').innerHTML= cartona
     }
     displayDetails(data){
      let cartona=""
        cartona+=`
              <div class="col-lg-4">
        <div><img src="${data.thumbnail}" alt=""></div>
      </div>
      <div class="col-lg-8">
        <h1 class="mb-3">title : <span>${data.title}</span></h1>
        <div class="mb-3">Category : <span class="bg-info p-1 rounded-3 text-black">${data.genre}</span></div>
        <div class="mb-3">Platform : <span class="bg-info p-1 rounded-3 text-black">${data.platform}</span></div>
        <div class="mb-3">Status : <span class="bg-info p-1 rounded-3 text-black">${data.status}</span></div>
        <p class="mt-4">${data.description}</p>
        <a class="btn btn-outline-warning" target="blank_" href="${data.game_url}">show more</a>
      </div>

        `
        document.getElementById('details').innerHTML=cartona
     }
}