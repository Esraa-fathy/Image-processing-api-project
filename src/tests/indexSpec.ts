import supertest from 'supertest';
import app from '../index';
import check_image from '../utils/checkexistencefile';
import Resize from '../utils/ResizeingFile';

const request = supertest(app);
describe('Test endpoint', () => {
  it('gets the middleware', async () => {
    const res = await request.get('/ss/esraa');
    expect(res.status).toBe(200);
  });
  it('Get image from orignal_images', async () => {
    const res = await request.get('/ss/esraa?filename=fjord');
    expect(res.status).toEqual(200);
  });
  it('Image is not found.', async () => {
    const res = await request.get('/ss/esraa?filename=zaza');
    expect(res.text).toBe("Image does not exist");
  });

  it('Width and height are not valid.', async () => {
    const response = await request.get(
      '/ss/esraa?filename=fjord&width=yz&height=wr'
    );
    expect(response.text).toBe('Enter valid values for width and height,please.');
  });

  it('Resize the image.', async () => {
    const res = await request
      .get('/ss/esraa?filename=fjord&width=300&height=100')
      .expect('Content-Type', 'image/jpeg')
      .expect(200);
  });

});

describe('Test the checkexistencefile and ResizeingFile', () => {
  it('Image exists', async () => {
    const res = await check_image('encenadaport.jpg', 'orignal_images');

    expect(res).toBe(true);
  });
  it("Image does not exist", async () => {
    const res = await check_image('fhjlls.jpg', 'orignal_images');

    expect(res).toBe(false);
  });
  it('Image exists', async () => {
    const res = await check_image('fjord_500_350.jpg', 'Resized_images');

    expect(res).toBe(true);
  });
  it('Resize the image', async () => {
    const img_resize = await Resize('santamonica', 600, 300);
    expect(img_resize).toEqual('images/Resized_images/santamonica_600_300.jpg');
  });
 
});