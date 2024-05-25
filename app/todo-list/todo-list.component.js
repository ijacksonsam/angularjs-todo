angular.module("todoList").component("todoList", {
  templateUrl: "todo-list/todo-list.template.html",
  controller: function todoController() {
    var self = this;
    this.todo = "";
    this.todoList = [
      {
        task: "study biology",
        completed: false,
      },
      {
        task: "clean the room",
        completed: true,
      },
    ];
    this.addTodo = function (task) {
      self.todoList.push({ task, completed: false });
      self.todo = "";
    };
    this.removeTodo = function (task) {
      //   console.log(task);
      const index = self.todoList.indexOf(task);
      if (index > -1) {
        self.todoList.splice(index, 1);
      }
    };
  },
});
