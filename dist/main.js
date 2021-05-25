
const renderer = new Render();

$("body").on('click', "img", function () {
    let title = $(this).siblings('#list-ingredient').children()[0].innerHTML;
    alert(title)
})

$('#getIngredent').on('click', function () {
    let input = $('#recipe-input').val();

    $.ajax({
        method: "GET",
        url: `/recipes/${input}`,
        success: function (response) {
           

            renderer.renderRecipes(response);
        }
    })
})