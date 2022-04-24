import path from 'path';
import sharp from 'sharp';

async function Resize(
  imgname: string,
  width: number,
  height: number
): Promise<string> {
  const orignal_imgpath = path.resolve(`images/orignal_images/${imgname}.jpg`);
  const new_imgpath = path.resolve(
    `images/Resized_images/${imgname}_${width}_${height}.jpg`
  );
  await sharp(orignal_imgpath)
    .resize(width, height)
    .toFile(new_imgpath)
    .then((): string => {
      return `images/Resized_images/${imgname}_${width}_${height}.jpg`;
    })
    .catch((err) => {
      console.log(err);
    });
  return `images/Resized_images/${imgname}_${width}_${height}.jpg`;
}

export default Resize;
