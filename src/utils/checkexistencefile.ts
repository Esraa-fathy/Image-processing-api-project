import path from 'path' ;
import {existsSync} from 'fs' ;

const check_image = (imgname:string, foldername:string): boolean =>{
    try{
const pathofimage=path.resolve(`images/${foldername}/${imgname}`);
let check_path=existsSync(pathofimage);
return (check_path);
    }catch(err){
     console.log(err);  
     return false; 
    }
}; 
export default check_image ;

