var Todo = Backbone.Model.extend({
    default:function(){
        return {
            title:"empty todo...",
            order:Todos.nextOrder(),
            done:false
        };
    },
    toggle:function(){
        this.save({done:!this.get("done")});
    }
});
