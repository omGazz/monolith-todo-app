import { TodoController } from "../controllers/todo.controller";

class TodoUI {
    constructor(private controller: TodoController) {}
  
    run() {
      this.controller.addTodo("Learn TypeScript");
      this.controller.listTodos();
      this.controller.updateTodo(1, "Learn TypeScript and Node.js");
      this.controller.listTodos();
      this.controller.deleteTodo(1);
      this.controller.listTodos();
    }
  }
  
  const controller = new TodoController();
  const ui = new TodoUI(controller);
  ui.run();
  