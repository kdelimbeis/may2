
$.ajax({
         url: "https://api-practice-wdi.herokuapp.com/posts",
         
         method: "GET",
         
         data: {
         	// term: ,
        	// location:
        	},

         success: function(response){
             console.log(response);

          

          response.posts.forEach(myFunction);

             function myFunction(item) {
                console.log(item); 
                    var para = document.createElement("p");
                    var node = document.createTextNode(item.title);
                    para.appendChild(node);
                    var element = document.getElementById("div1");
                    element.appendChild(para);
                    var para2 = document.createElement("p");
                    var node2 = document.createTextNode(item.categories);
                    para2.appendChild(node2);
                    var element = document.getElementById("div1");
                    element.appendChild(para2);

                    $("#img").attr("src",item.img);
         	  }

        }
    })

