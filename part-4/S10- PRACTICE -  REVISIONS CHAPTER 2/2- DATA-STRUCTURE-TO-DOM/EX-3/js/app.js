let posts = [{
        id: 1,
        title: "Natural in the world",
        video: "videos/video_1.mp4",
        description: "Lorem ipsum dolor sitore aliquam ab sequi saepe facilis, ipsam illo modi cupiditate illum iure? Maiores suscipit dicta mollitia velit. Eveniet reprehenderit rem odio provident quibusdam consequatur aspernatur porro aliquam similique illo ut cum reiciendis amet placeat dolor possimus laboriosam, aliquid,",
        date: "14 / April / 2021",
        author: "Rady Cody"
    },
    {
        id: 2,
        title: "Natural in the world",
        video: "videos/video_2.mp4",
        description: "Lorem ipsum dolor sitore aliquam ab sequi saepe facilis, ipsam illo modi cupiditate illum iure? Maiores suscipit dicta mollitia velit. Eveniet reprehenderit rem odio provident quibusdam consequatur aspernatur porro aliquam similique illo ut cum reiciendis amet placeat dolor possimus laboriosam, aliquid,",
        date: "14 / April / 2021",
        author: "Rady Cody"
    },
    {
        id: 3,
        title: "Natural in the world",
        video: "videos/video_3.mp4",
        description: "Lorem ipsum dolor sitore aliquam ab sequi saepe facilis, ipsam illo modi cupiditate illum iure? Maiores suscipit dicta mollitia velit. Eveniet reprehenderit rem odio provident quibusdam consequatur aspernatur porro aliquam similique illo ut cum reiciendis amet placeat dolor possimus laboriosam, aliquid,",
        date: "14 / April / 2021",
        author: "Rady Cody"
    },
];

//1. create div with class name "container" and append it to "body"
let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);
for(let post of posts){
	// Loop here

    //2. create div with class name "card" and append it to "container" div
    let card = document.createElement('div');
    card.className = "card";
    container.appendChild(card);
    //3. create div with class name "card-img" and append it to "card" div
    let card_img = document.createElement("div");
    card_img.className = "card-img";
    card.appendChild(card_img);
    //4. create video tags with class name "movie", use "setAtrribute" to set controls in video, use "src" attribute to display video and append it to "card-img" div
    // example: 
    let tagVDO = document.createElement("video");
    tagVDO.className = "movie";
    // sample.setAttribute('controls', '');
    tagVDO.setAttribute('controls', '');
    // sample.src = post.video;
    tagVDO.src = post.video;
    card_img.appendChild(tagVDO);
    //5. create div with class name "card-body" and append it to "card" div
    let card_body = document.createElement('div');
    card_body.className = "card-body";
    card.appendChild(card_body);
    //6. create h2 tags with class name "card-title", textContent = post.title and append it to "card-body" div
    let h2 = document.createElement()
    //7. create p tags with class name "description",
    // textContent = post.description
    // and then apppend it to "card-body" div

    //8. create div with class name "card-footer" and append it to "card" div

    //9. create span tags with id name "date", textContent = post.date and append it to "card-footer" div 

    //10. create span tags with id name "author", textContent = post.author  and append it to "card-footer" 

}