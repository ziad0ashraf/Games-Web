import { Ui } from "./Ui.js";
import { details } from "./details.js";


export class games{
    constructor(){
        this.ui=new Ui()
        this.getData("MMORPG")
        document.querySelectorAll(".nav-link").forEach((category) => {
            category.addEventListener("click", (e) => {
               document.querySelector(".active").classList.remove("active");
               e.target.classList.add("active");
               this.getData(e.target.id);
            });
         });
    }

    async getData(category) {
        document.querySelector('.load').classList.remove('d-none')
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key':'b9142344b4msh96b3a01e448bad0p184adcjsnb8928f96d77e',
                'x-rapidapi-host':'free-to-play-games-database.p.rapidapi.com'
            }
        };    
        let data =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options)
        let result=await data.json()
        console.log(result);
        this.ui.displayGames(result)
        this.startEvent()
        this.search(result)
        document.querySelector('.load').classList.add('d-none')
    }
    search(result){
        document.getElementById('search').addEventListener('keyup',()=>{
            let cartona="";
            for (let i = 0; i < result.length; i++) {
                if (result[i].title.toLowerCase().includes(document.getElementById('search').value.toLowerCase())) {
                    cartona+=`
                    <div class="col-lg-3">
                    <div id="${result[i].id}" class="cardGame d-flex flex-column h-100 p-2 rounded-2 overflow-x-hidden">
                        <img src="${result[i].thumbnail}" class="object-fit-cover" alt="">
                        <div class="d-flex justify-content-between py-2"><span>${result[i].title}</span> <button class="btn btn-info">free</button></div>
                        <p class="pb-2 fs-6">${result[i].short_description.split(" ", 8)}</p><hr>
                        <div class="d-flex justify-content-between align-items-baseline"><span>${result[i].genre}</span> <span>${result[i].platform}</span></div>
                    </div>
                    </div>

                            `        
                }  
           document.getElementById('demo').innerHTML= cartona     
            }
            this.startEvent()      
        })        
    }
    startEvent() {
        document.querySelectorAll(".cardGame").forEach((game) => {
            game.addEventListener("click", () => {
                this.showDetails(game.id)
            })
        })
    }
    
    showDetails(idGame) {
        this.details = new details(idGame)
        document.getElementById("gamesSection").classList.add("d-none")
        document.getElementById("detailsSection").classList.remove("d-none")
    }


}
