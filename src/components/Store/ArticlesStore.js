import { EventEmitter } from "events";
import axios from 'axios';

class ArticleStore extends EventEmitter{
    constructor(){
        super()
        this.articles = [axios.get('https://jsonplaceholder.typicode.com/photos')
                   .then(function (response) {
                       console.log('Test',response.data)
                     return JSON.stringify(response.data);
                  })
                  .catch(function (error) {
                        console.log(error);
                })]
    }
    getAllArticles(){
        return this.articles;
    }    
}
const articleStore = new ArticleStore;
export default articleStore;