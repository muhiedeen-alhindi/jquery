// let container =document.getElementById("container")


let html=''
// const init = () => {

//     axios({
//         method:"get",
//         url : "http://localhost/jquery/backend/php.php/ "
//       }).then(function (res) {
//         console.log(res.data);
//         for(i = 0; i < res.data.length; i++){
//             let id = res.data[i].id;
//             // let image = res.data[i].image;
//             let title = res.data[i].title;
//             let content = res.data[i].content;
//             let auther =res.data[i].auther;
//             let published_date=res.data[i].published_date;
//               html="<div><div>"
//               html +=`<div> <p> ${id}</p> <div>`
           
//             container.insertAdjacentHTML('beforeend', html);
//         }
       
        
//       })
  
//     }

// init();


$(document).ready(function() {
    
    axios({
      method:"get",
      url : "http://localhost/jquery/backend/php.php/"
    }).then(function (res) {
      console.log(res.data);
      for(i = 0; i < res.data.length; i++){
        let id = res.data[i].id;
        let title = res.data[i].title;
        let content = res.data[i].content;
        let auther =res.data[i].auther;
        let published_date=res.data[i].published_date;
        html=`<div class= "container">`
        html +=`<div> <p> ${id}</p> </div> `
        html +=`<div> <p> ${title}</p> </div> `
        html +=`<div> <p> ${content}</p> </div> `
        html +=`<div> <p> ${auther}</p> </div> `
        html +=`<div> <p> ${published_date}</p> </div> `
        html+=`</div>`
        $("#container").append(html);  
        console.log(html);
      }
    });
  });
  
