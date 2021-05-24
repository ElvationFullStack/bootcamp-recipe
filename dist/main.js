
const renderer=new Render();


$('#getIngredent').on('click',function () { 
    let input_element=$('#recipe-input');
    let input_val=input_element.val();

   

    // $.get(`/recipes/${input_val}`, function (response) {
        

    //     console.log(response);
    // })
    $.ajax({
        method: "GET",
        url: `/recipes/${input_val}`,
         success: function (response) {
            // let filterd_result=response.map(e => {e.ingredients,e.title,e.thumbnail,e.href});

             console.log('filterd_result +++');
             console.log(filterd_result )
            //  let filterd_result=response.filter(r=>return{ {r.r}})

             renderer.renderRecipes(response);

        }
    })
    



})
