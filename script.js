
 const arr = [
    {
        img : "arctic.jpg",
        iconName : "Arctic"
    },
    {
        img : "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
        iconName : "Homes"
    },
    {
        img : "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
        iconName : "Farms"
    },
    {
        img : "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
        iconName : "OMG!"
    },
    {
        img : "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg",
        iconName : "Domes"
    },
    {
        img : "https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg",
        iconName : "Barns"
    },
    {
        img : "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
        iconName : "Caves"
    },
    {
        img : "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
        iconName : "Island"
    },
    {
        img : "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
        iconName : "Amazing views"
    },
    {
        img : "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg",
        iconName : "Bed & breakfasts"
    },
    {
        img : "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
        iconName : "National parks"
    },
    {
        img : "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
        iconName : "Lakefront"
    },
    {
        img : "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
        iconName : "Amazing pools"
    },
    {
        img : "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
        iconName : "Beachfront"
    },
    {
        img : "https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg",
        iconName : "Chef kitchen's"
    },
    {
        img : "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
        iconName : "Camping"
    },
    {
        img : "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
        iconName : "Treehouses"
    },
    {
        img : "https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg",
        iconName : "Top of the world"
    },
    {
        img : "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
        iconName : "Cabins"
    },
    {
        img : "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
        iconName : "Historical homes"
    },
    {
        img : "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
        iconName : "Trending"
    },
    {
        img : "https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg",
        iconName : "Houseboats"
    }
 ]

 let img = document.querySelector(".arctic img")
 let iconName = document.querySelector(".arctic p")
 let iconbox = document.querySelector(".icons")

 var clutter = ""
 arr.forEach(function(arr){
    clutter += `<div class="arctic">
    <img src="${arr.img}" alt="">
    <p>${arr.iconName}</p>
</div>`
iconbox.innerHTML =clutter


 })

 var placeBox = document.querySelector(".place-section")
 //let imgCon = document.querySelector(".img-con")
let imgplace = document.querySelector(".img-con img")
let placename = document.querySelector(".star h3")
let rating = document.querySelector(".star span")
let distance = document.querySelector(".distance")
let date = document.querySelector(".date")
let price  = document.querySelector(".price")
let time = document.querySelector(".price span")

 let box = ""
 const value = [
    {
        imgplace : "https://a0.muscache.com/im/pictures/miso/Hosting-52086975/original/017465f1-e5b3-43ff-8d92-facd828f8fc2.jpeg?im_w=720",
        placename : "Kittila, Finland" , 
        rating : "4.9",
        distance : "6,591 kilometers away",
        date : "18-23 Sep",
        price : "₹9,981",
        time : "night"
    },
    {
        imgplace : "https://a0.muscache.com/im/pictures/181d4be2-6cb2-4306-94bf-89aa45c5de66.jpg?im_w=720",
        placename : "Norland, Norway" , 
        rating : "4.8",
        distance : "7,025 kilometers away",
        date : "12-18 oct",
        price : "₹10,854",
        time : "night"
    },
    {
        imgplace : "https://a0.muscache.com/im/pictures/miso/Hosting-41191586/original/264cf259-bdcd-42d0-ae9d-66968b26121d.jpeg?im_w=720",
        placename : "Puolanka, Finland" , 
        rating : "4.6",
        distance : "5347 kilometers away",
        date : "12-18 oct",
        price : "₹75854",
        time : "morning"
    },
    {
        imgplace : "https://a0.muscache.com/im/pictures/miso/Hosting-50545526/original/af14ce0b-481e-41be-88d1-b84758f578e5.jpeg?im_w=720",
        placename : "Posio, Finland" , 
        rating : "4.5",
        distance : "5347 kilometers away",
        date : "12-18 oct",
        price : "₹75854",
        time : "morning"
    },
    {
        imgplace : "https://a0.muscache.com/im/pictures/miso/Hosting-46487748/original/9e4c806e-dbad-4186-a0c6-bd75adc0c068.jpeg?im_w=720",
        placename : "Kuusamo, Finland" , 
        rating : "4.9",
        distance : "5347 kilometers away",
        date : "12-18 oct",
        price : "₹75854",
        time : "morning"
    },
    {
        imgplace : "https://a0.muscache.com/im/pictures/miso/Hosting-756194349244002796/original/69b360af-34e9-4525-9768-d50c0fd48920.jpeg?im_w=720",
        placename : "Salla, Finland" , 
        rating : "4.7",
        distance : "5347 kilometers away",
        date : "12-18 oct",
        price : "₹75854",
        time : "morning"
    },
    {
        imgplace : "https://a0.muscache.com/im/pictures/miso/Hosting-576388435268826012/original/d9ff6c5a-8bdf-4ed6-a1e0-57ec942af052.jpeg?im_w=720",
        placename : "Kuusamo, Finland" , 
        rating : "4.5",
        distance : "5347 kilometers away",
        date : "12-18 oct",
        price : "₹7,854",
        time : "morning"
    },
    {
        imgplace : "https://a0.muscache.com/im/pictures/7809096f-55f0-47c9-b0be-75bbaeec2122.jpg?im_w=720",
        placename : "Uk" , 
        rating : "4.9",
        distance : "5347 kilometers away",
        date : "12-18 oct",
        price : "₹6,854",
        time : "morning"
    },
    {
        imgplace : "https://a0.muscache.com/im/pictures/68fb8a7c-39c1-4c06-b44c-3c0988ab253d.jpg?im_w=720",
        placename : "Sweden" , 
        rating : "4.9",
        distance : "5347 kilometers away",
        date : "12-18 oct",
        price : "₹12,854",
        time : "morning"
    },
    {
        imgplace : "https://a0.muscache.com/im/pictures/3ada8472-2788-4ded-ba72-88437f5b57d5.jpg?im_w=720",
        placename : "Finland" , 
        rating : "4.7",
        distance : "5347 kilometers away",
        date : "12-18 oct",
        price : "₹12,854",
        time : "morning"
    },
    {
        imgplace : "https://a0.muscache.com/im/pictures/fb860347-88b9-4a1a-acfe-d518f3f77072.jpg?im_w=720",
        placename : "Hella, Iceland" , 
        rating : "4.4",
        distance : "5,347 kilometers away",
        date : "12-18 Oct",
        price : "₹7,854",
        time : "morning"
    },
    {
        imgplace : "https://a0.muscache.com/im/pictures/miso/Hosting-576388435268826012/original/d9ff6c5a-8bdf-4ed6-a1e0-57ec942af052.jpeg?im_w=720",
        placename : "Hitra, Norway" , 
        rating : "4.8",
        distance : "5347 kilometers away",
        date : "12-14 Oct",
        price : "₹9,854",
        time : "morning"
    },
    {
        imgplace : "https://a0.muscache.com/im/pictures/miso/Hosting-576388435268826012/original/d9ff6c5a-8bdf-4ed6-a1e0-57ec942af052.jpeg?im_w=720",
        placename : "India" , 
        rating : "4.54",
        distance : "5347 kilometers away",
        date : "15-18 Sep",
        price : "₹7,854",
        time : "morning"
    },
    {
        imgplace : "https://a0.muscache.com/im/pictures/7fe510d9-bb6a-466a-82e0-269e01e5a1a6.jpg?im_w=720",
        placename : "India" , 
        rating : "4.54",
        distance : "5347 kilometers away",
        date : "12-16 Oct",
        price : "₹9,854",
        time : "morning"
    },{
        imgplace : "https://a0.muscache.com/im/pictures/miso/Hosting-576388435268826012/original/d9ff6c5a-8bdf-4ed6-a1e0-57ec942af052.jpeg?im_w=720",
        placename : "Sweden" , 
        rating : "4.8",
        distance : "5347 kilometers away",
        date : "1-3 Oct",
        price : "₹8,854",
        time : "morning"
    },
    {
        imgplace : "https://a0.muscache.com/im/pictures/miso/Hosting-45265296/original/b507784d-93a6-42e1-9d34-694640ea2ab6.jpeg?im_w=720",
        placename : "India" , 
        rating : "4.8",
        distance : "5347 kilometers away",
        date : "14-22 Sep",
        price : "₹7,854",
        time : "morning"
    },
    
 ]
 


value.forEach(function(value){
box += `<div class="box">
<div class="img-con">
<img src="${value.imgplace}">
<i class="fa-solid fa-heart heart"></i>
</div>
<div class="star">
<div class="star-box1">
<h3>${value.placename}</h3>
</div>
<div class="star-box2">
<i class="fa-solid fa-star"></i>
<span>${value.rating}</span> 
</div>
</div>
<div class="distance">${value.distance}</div>
<div class="date">${value.date}</div>
<div class="price">${value.price}<span> ${value.time}</span> </div>
          
</div>`

placeBox.innerHTML = box 

})
 