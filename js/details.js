import { Ui } from "./Ui.js";

export class details{
    constructor(id){
        this.ui=new Ui()
        this.getDetails(id)
        document.getElementById('closeDetails').addEventListener('click',()=>{
            document.getElementById('detailsSection').classList.add('d-none')
            document.getElementById('gamesSection').classList.remove('d-none')
        })
    }
    async getDetails(idGame) {
        document.querySelector('.load').classList.remove('d-none')
        const options = {
            method: 'GET',
            headers: {
            "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",            
        }
        };    
        let data =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGame}`,options)
        let result=await data.json()
        console.log(result);
        this.ui.displayDetails(result)
        document.querySelector('.load').classList.add('d-none')
    }

}