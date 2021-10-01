
//insert title"this is an important item" above the elements with .important 
let imp = document.querySelectorAll('.important');
for (item of imp) {
    item.title = "This is an important item";
}

/*let addTitle = document.createElement("h2");
let titleContent = document.createTextNode("This is an important item");
addTitle.appendChild(titleContent);

document.body.insertBefore(addTitle, imp[0]);*/

//select all the img tags and loop through them. If they have no important class, turn their display property to none
let imgList = document.querySelectorAll('img');
imgList.forEach(item => {
    if(item.className!="important") {
        item +=item.style.display = "none";
    }
});


//loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname has well
let paraList = document.querySelectorAll('p');
paraList.forEach(item => {
let paraContent = item.innerHTML;
let paraClass = item.className;
console.log(item + " Content: " + paraContent + " Class: " + paraClass);
});

//Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
paraList.forEach(item => {
    if (item.className=="") {
        let rgb1 = parseInt(Math.floor(Math.random()*256));
        let rgb2 = parseInt(Math.floor(Math.random()*256));
        let rgb3 = parseInt(Math.floor(Math.random()*256));
        let bgColor = ("rgb(" + rgb1 + ", " + rgb2 + ", " + rgb3 + ")" );
        item.style.color = bgColor;
    }
})