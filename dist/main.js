
const renderer = new Render();


$('#getIngredent').on('click', function () {
    let input_element = $('#recipe-input');
    let input_val = input_element.val();



    // $.get(`/recipes/${input_val}`, function (response) {


    //     console.log(response);
    // })
    $.ajax({
        method: "GET",
        url: `/recipes/${input_val}`,
        success: function (response) {

            console.log('filterd_result +++');
            console.log(response)
            let new_arr =[]
            //  response.forEach(recipe=>{ //chek later no time 
            //     new_arr.push(filtterRecipes(recipe));
            // })
            console.log('res')
            renderer.renderRecipes(response);

        }
    })

    // const filtterRecipes = function (recipe) {
    //     let new_Recipe = {};
    //     new_Recipe[ingredients] = recipe[ingredients];
    //     new_Recipe[title] = recipe[title];
    //     new_Recipe[thumbnail] = recipe[thumbnail];
    //     new_Recipe[href] = recipe[href];
    //     return new_Recipe

    // }




})
