var app = new Vue (
  {
    el:'#root',
    data:{
      images:[
        'img/toni9.jpeg',
        'img/corini.jpeg',
        'img/barzagli.jpeg',
        'img/brienza.jpeg',
        'img/zaccardo.jpeg',
        'img/simplicio.jpeg',
        'img/ficarrapicone.jpeg'
      ],
      imgIndex:0
    },
    methods:{
      nextImage: function (){
        this.imgIndex++;
        if (this.imgIndex == this.images.length) {
          this.imgIndex = 0;
        }
      },
      prevImage: function (){
        this.imgIndex--;
        if (this.imgIndex < 0) {
          this.imgIndex = this.images.length - 1;
        }
      }
    }
  }
);
const cta = document.getElementById('click');
cta.addEventListener('click', () => {
  setTimeout (x,8000);
  const firstTitle = document.getElementById('first_title');
  const ground = document.getElementById('ground');
  const secondTitle = document.getElementById('second_title');
  firstTitle.classList.add("disappear");
  ground.classList.add("background_pink");
  secondTitle.classList.add("appear");
  function x() {
    ground.classList.add("none");
  }
});
