


$(window).on('load',function() {
    
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
          
        const ids = $("<p></p>").text(`${id}`); 
        const titles = $("<p></p>").text(`${title}`); 
        const contents=$("<p></p>").text(`${content}`);
        const authers=$("<p></p>").text(`${auther}`);
        const published_dates=$("<p></p>").text(`${published_date}`)
        
        $("#container").append(ids,titles,contents,authers,published_dates);  
         
      }
    });
  });















 // 
  // let container =document.getElementById("container")


// let html=''   
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