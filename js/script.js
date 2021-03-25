var app = new Vue (
  {
    el:'#root',
    data:{
      images:[
        'https://gdsit.cdn-immedia.net/2016/05/toni9.jpg',
        'https://media.gettyimages.com/photos/palermo-italy-palermos-midfielder-eugenio-corini-jubilates-after-he-picture-id72512833?k=6&m=72512833&s=612x612&w=0&h=mf67qFxY_b15F9sizDdlHChEJh8o7JG9jNUNhp-OFOQ=',
        'https://www.rosanerolive.it/wp-content/uploads/2020/05/barzagli-533x261.jpg',
        'https://media.gettyimages.com/photos/franco-brienza-of-palermo-celebrates-after-scoring-his-teams-second-picture-id155010917?k=6&m=155010917&s=612x612&w=0&h=456KWsprF4caOq8-OVjr5IsAy7xhNE4nwZ4WF_g17rs=',
        'https://media.gettyimages.com/photos/salvo-ficarra-and-valentino-picone-pose-during-a-us-citta-di-palermo-picture-id464030392?k=6&m=464030392&s=612x612&w=0&h=dMXjivZNM24e0CWKuYIew5RMRmxX73nxD4097zUeFKU='
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
