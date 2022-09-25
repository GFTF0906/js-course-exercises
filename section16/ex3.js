/*

  Coding Challenge #3

  Your tasks:

  PART 1

  1. Write an async function 'loadNPause' that recreates Challenge #2, this time
  using async/await (only the part where the promise is consumed, reuse the
  'createImage' function from before)

  2. Compare the two versions, think about the big differences, and see which one
  you like more

  3. Don't forget to test the error handler, and to set the network speed to “Fast 3G” in the dev tools Network tab

  PART 2

  1. Create an async function 'loadAll' that receives an array of image paths
  'imgArr'

  2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')

  3. Check out the 'imgs' array in the console! Is it like you expected?

  4. Use a promise combinator function to actually get the images from the array

  5. Add the 'parallel' class to all the images (it has some CSS styles)

  Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function

*/

let curImg;

const wait = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = imgPath => {

  return new Promise((resolve, reject) => {

    const img = document.createElement('img');
    img.src = imgPath;

    curImg = img;

    curImg.addEventListener('load', () => {
      curImg.classList.add('images');
      document.body.append(curImg);

      wait(2)
        .then(() => {
          curImg.style.display = 'none';

          resolve(curImg);
        });
    });

    curImg.addEventListener('error', () => {
      reject(new Error('Image not found.'));
    });
  });
};

// const loadNPause = async () => {
//   try {

//     let img = await createImage('https://p4.wallpaperbetter.com/wallpaper/920/20/970/music-gorillaz-wallpaper-preview.jpg');
//     img = await createImage('https://images4.alphacoders.com/199/199476.jpg');

//     console.log(img);

//   } catch (err) {

//     console.error(err.message);

//   }
// };
// loadNPause();

const loadAll = async (imgArr) => {

  try {

    const imgs = imgArr.map(async img => await createImage(img));
    const data = await Promise.all(imgs);

    data.forEach(d => {
      d.classList.add('parallel')

      console.log(d);
    });

  } catch (err) {
    console.error(err.message);
  }

};


loadAll(['img/img-1.jpg', 'img/img-2.jpg']);