class Encounter{
    
    static entEncounter =
    `<div class="encounter d-flex align-items-center justify-content-around w-100">
        <div class="pixelartContainer">
            <img class="pixelart d-block" src="sprites/ent.png" alt="a picture of an ent">
        </div>
        <div class="interfaceInterationArea d-flex flex-column justify-content-center">
            <h3 class="interfaceTitle">
                You encountered an ent!
            </h3>
            <button id="acceptEncounter" class="game-btn interface-btn">Fight!</button>
        </div>
    </div>`

    static skeletonEncounter =
    `<div class="encounter d-flex align-items-center justify-content-around w-100">
        <div class="pixelartContainer">
            <img class="pixelart d-block" src="sprites/skeleton.png" alt="a picture of a skeleton">
        </div>
        <div class="interfaceInterationArea d-flex flex-column justify-content-center">
            <h3 class="interfaceTitle">
                You encountered a skeleton!
            </h3>
            <button id="acceptEncounter" class="game-btn interface-btn">Fight!</button>
        </div>
    </div>`

    static tolEncounter =
    `<div class="encounter d-flex align-items-center justify-content-around w-100">
        <div class="pixelartContainer">
            <img class="pixelart d-block" src="sprites/tol.png" alt="a picture of a tol">
        </div>
        <div class="interfaceInterationArea d-flex flex-column justify-content-center">
            <h3 class="interfaceTitle">
                You encountered a tol!
            </h3>
            <button id="acceptEncounter" class="game-btn interface-btn">Fight!</button>
        </div>
    </div>`

    static gimnEncounter =
    `<div class="encounter d-flex align-items-center justify-content-around w-100">
        <div class="pixelartContainer">
            <img class="pixelart d-block" src="sprites/gimn.png" alt="a picture of a gimn">
        </div>
        <div class="interfaceInterationArea d-flex flex-column justify-content-center">
            <h3 class="interfaceTitle">
                You encountered a gimn!
            </h3>
            <button id="acceptEncounter" class="game-btn interface-btn">Fight!</button>
        </div>
    </div>`
    
    static logMsg = "";
    
    static randomEncounter(){
        const max = 4;
        let random = Math.floor(Math.random() * max);

        switch(random){
            case 0:
                this.logMsg = "encountered an ent!";
                return this.entEncounter;
            case 1:
                this.logMsg = "encountered a gimn!";
                return this.gimnEncounter;
            case 2:
                this.logMsg = "encountered a skeleton!";
                return this.skeletonEncounter;
            case 3:
                this.logMsg = "encountered a tol!";
                return this.tolEncounter;
            default:
                return '';
        }
    }


    constructor(){
    }

}