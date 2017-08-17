import { EventEmitter } from "events";

class CatStore extends EventEmitter{
    constructor(){
        super()
        let imagePath = "../assets/images/";
        this.articles = [
            {"name": "some Art 1", "title" : "A", "image" : imagePath+"img1.jpg" },
            {"name": "some Art 2", "title" : "B", "image" : imagePath+"img2.jpg" },
            {"name": "some Art 3", "title" : "C", "image" : imagePath+"img3.jpg" },
            {"name": "some Art 4", "title" : "D", "image" : imagePath+"img4.jpg" },
            {"name": "some Art 5", "title" : "E", "image" : imagePath+"img5.jpg" },
            {"name": "some Art 6", "title" : "F", "image" : imagePath+"img6.jpg" },
            {"name": "some Art 1", "title" : "AA", "image" : imagePath+"img7.jpg" },
            {"name": "some Art 2", "title" : "BA", "image" : imagePath+"img8.jpg" },
            {"name": "some Art 3", "title" : "CA", "image" : imagePath+"img4.jpg" },
            {"name": "some Art 4", "title" : "DA", "image" : imagePath+"img1.jpg" },
            {"name": "some Art 5", "title" : "EA", "image" : imagePath+"img2.jpg" },
            {"name": "some Art 8", "title" : "FA", "image" : imagePath+"img3.jpg" },
            {"name": "some Art 7", "title" : "GA", "image" : imagePath+"img3.jpg" }
        ]; 
    }

    getAll(){
        return this.articles;
    }
}

const catStore = new CatStore;
export default catStore;