var TodoList = Backbone.Collection.extend({
    model:Todo,
    localStorage:new Backbone.LocalStorage("todos"),
    done:function(){
        return this.where({done:true});
    },
    remaining:function(){
        return this.where({done:false});
    },
    nextOrder:function(){
        if(!this.length)return 1;
        return this.last().get("order")+1;
    },
    comparator:"order"
});
var Todos = new TodoList;