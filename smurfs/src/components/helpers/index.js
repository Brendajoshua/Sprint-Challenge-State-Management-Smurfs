export const initialFormState =  {
    name: "",
    age: "",
    height: ""
  }

export const images = [
    "https://www.stickpng.com/assets/thumbs/5a7b6d2cabc3d121aba71094.png",
    "https://www.stickpng.com/assets/thumbs/5a7b6d17abc3d121aba71091.png",
    "https://i.imgur.com/OW32Ti9.jpg",
    "http://pluspng.com/img-png/smurf-png-smurf-peace-png-303.png",
    "https://www.stickpng.com/assets/images/58b83d0b15d8273a5cab2f9b.png",
    "http://www.pngall.com/wp-content/uploads/3/Smurfs-Transparent.png"
  ];
  
 export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }