import path from 'path';
import express from 'express';
import check_image  from '../../utils/checkexistencefile';
import Resize from '../../utils/ResizeingFile';
const displayimg = express.Router();
displayimg.get('/', async (req: express.Request, res: express.Response):Promise<void> => {
  try {
    const filename = req.query.filename as string;
    const w = req.query.width as string;
    const h = req.query.height as string;
    const width = parseInt(w);
    const height = parseInt(h);
    const File = `${filename}_${width}_${height}.jpg`;
    let Pathoffile: string;

    if (!check_image(`${filename}.jpg`, 'orignal_images')) {
      res.send("Image does not exist");
    } else if (
      req.query.width === undefined &&
      req.query.height === undefined
) {
      res.sendFile(path.resolve(`images/orignal_images/${filename}.jpg`));
    }else if(width&&!height){
        res.send("please enter the new height");
    } else if(height&&!width){
        res.send("please enter the new width");
    } 
    
    else if (isNaN(width) || isNaN(height)) {
      res.send('Enter valid values for width and height,please.');
    } else {
      if (check_image(File, 'Resized_images')) {
        Pathoffile = path.resolve(`images/orignal_images/${File}`);
      } else {
        Pathoffile = await Resize(filename, width, height);
        Pathoffile = path.resolve(Pathoffile);
      }
      res.sendFile(Pathoffile);
    }
  } catch (err) {
    console.error(err);
  }
});
export default displayimg;
