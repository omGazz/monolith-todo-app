import { Todo } from "../models/todo.model";

export class TodoController {
    private todos: Todo[] = [];
    
    addTodo(text: string): void {
      const id = this.todos.length + 1;
      this.todos.push({ id, text, completed: false });
    }
  
    updateTodo(id: number, text: string): void {
      const todo = this.todos.find(t => t.id === id);
      if (todo) {
        todo.text = text;
      }
    }
  
    deleteTodo(id: number): void {
      this.todos = this.todos.filter(t => t.id !== id);
    }
  
    listTodos(): void {
      console.log(this.todos);
    }
  }
  