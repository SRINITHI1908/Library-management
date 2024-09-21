let products = {
    data : [
        {
            title: "title : NCERT",
            author: "author : PRABHA DHAVALA",
            subject: "Basic",
            date: "2022-01-31",
            image: "https://cache.careers360.mobi/media/article_images/2019/3/20/ncert-books.jpg" ,
        },
        {
            title: "title : modern Cryptography",
            author: "author : SIMON EDWARDS",
            subject: "IT",
            date: "2022-11-11",
            image: "https://m.media-amazon.com/images/I/51kaxSKDx7L.jpg" ,
        },
        {
            title: "title : Database Management System",
            author: "author : TOLEDO",
            subject: "IT",
            date:  "2022-12-22",
            image: "https://m.media-amazon.com/images/I/712XlaVQ8OL._AC_UF1000,1000_QL80_.jpg" ,
        },
        {
            title: "title : Computer networks and security",
            author: "author : JOSEPH MIGGA KIZZA",
            subject: "CSE",
            date:  "2022-03-20",
            image: "https://media.springernature.com/full/springer-static/cover-hires/book/978-3-319-55606-2" ,
        },
        {
            title: "title : Mental Peace",
            author: "author : TAMMY GALLAGHAR",
            subject: "Novel",
            date:  "2022-11-10",
            image: "https://m.media-amazon.com/images/I/61KNmfcm7uL._AC_UF1000,1000_QL80_.jpg" ,
        },
        {
            title: "title : Artificial Intelligence",
            author: "author : CHARU C.AGGARWAL",
            subject: "ISE",
            date:  "2022-12-20",
            image: "https://media.springernature.com/full/springer-static/cover-hires/book/978-3-030-72357-6" ,
        },
        {
            title: "title : System design",
            author: "author : SCOTT TILLEY",
            subject: "CSE",
            date:  "2022-12-20",
            image: "https://m.media-amazon.com/images/I/6131AFuqF2L._AC_UF1000,1000_QL80_.jpg" ,
        },
        {
            title: "title : fundamentals ofMathematics",
            author: "author : ANIL KR.SHARMA",
            subject: "Basic",
            date: "2022-01-21",
            image: "https://m.media-amazon.com/images/I/71qlwPygUCL._AC_UF1000,1000_QL80_.jpg" ,
        },
        {
            title: "title : Harry Potter",
            author: "author : J.K. Rowling",
            subject: "Fantasy",
            date:  "1999-12-20",
            image: "https://m.media-amazon.com/images/I/81NQA1BDlnL._AC_UF1000,1000_QL80_.jpg" ,
        },
        {
            title: "title : Operating System",
            author: "author : GREG GAGNE",
            subject: "CSE",
            date:  "2022-04-20",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJB3t0a9oABHel_QzwflKhSN7_S0fClib0zA&s" ,
        },
        {
            title: "title : Atomic Habbits",
            author: "author : JAMES CLEAR",
            subject: "Novel",
            date:  "1995-12-22",
            image: "https://www.crossword.in/cdn/shop/products/9781847941831.jpg?v=1680197451" ,
        },
        {
            title: "title : How to win friends and influence people",
            author: "author : DALE CARNEGIE",
            subject: "Novel",
            date:  "2002-02-02",
            image: "https://m.media-amazon.com/images/I/71Y5RyRoxuL._AC_UF1000,1000_QL80_.jpg" ,
        },
        {
            title: "title : Image Processing",
            author: "author : TINKU ACHARYA",
            subject: "ISE",
            date:  "2021-12-20",
            image: "https://media.wiley.com/product_data/coverImage300/86/04717199/0471719986.jpg" ,
        },
        {
            title: "title : Physics",
            author: "author : JIM AL-KHALILI",
            subject: "Basic",
            date:  "2022-12-20",
            image: "https://m.media-amazon.com/images/I/81L-c3G66eL._AC_UF1000,1000_QL80_.jpg" ,
        },
        {
            title: "title : UNIX",
            author: "author : PIKE",
            subject: "IT",
            date: "2022-08-08",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5f1wpEKEFO3knhay81T0W3DlZWep2Vsj0eQ&s" ,
        },
    ],
};

for(let i of products.data){
    let card = document.createElement("div");
    card.classList.add("card",i.subject,"hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let title = document.createElement("h5");
    title.classList.add("title");
    title.innerText = i.title.toUpperCase();
    container.appendChild(title);

    let author = document.createElement("h6");
    author.classList.add("author");
    author.innerText = i.author.toUpperCase();
    container.appendChild(author);

    let sub = document.createElement("h6");
    sub.classList.add("sub");
    sub.innerText = i.subject.toUpperCase();
    container.appendChild(sub);

    let date = document.createElement("h6");
    date.classList.add("date");
    date.innerText = i.date.toUpperCase();
    container.appendChild(date);

    card.appendChild(container);
    document.getElementById("Books").appendChild(card);
}

function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) =>{
        if(value == "all"){
            element.classList.remove("hide");
        }else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                element.classList.add("hide");
            }
        }
    });
}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".title");
    let cards = document.querySelectorAll(".card");
    elements.forEach((element, index) => {
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });


  

  window.onload = () => {
    filterProduct("all");
  };



