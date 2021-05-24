class Render {
    constructor(){
    this.container_element = $('#container')

    this.source = $('#recipe-template').html();
    this.template = Handlebars.compile(this.source);
    }
    renderRecipes = function (recipes) {
        this.container_element.html('')
        const newHTML = this.template({ recipes: recipes });
        this.container_element.append(newHTML);
    }
}
