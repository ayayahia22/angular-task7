import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, todo } from 'src/app/todo/user';
import { GetToDosService } from '../get-to-dos.service';
import { MatTableDataSource } from '@angular/material/table';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { AddToDoService } from '../add-to-do.service';
import { DeleteToDoService } from '../delete-to-do.service';
import { EdiToDoService } from '../edit-to-do.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-todoc',
  templateUrl: './todoc.component.html',
  styleUrls: ['./todoc.component.scss'],
})
export class TodocComponent implements OnInit {


  todos: todo[] | undefined = [];
  dataSource = new MatTableDataSource<todo>();
  userName!: string | '';
  password!: string | '';
  user!: User;

  displayedColumns: string[] = [
    'id',
    'user_id',
    'task',
    'completed',
    'edit',
    'delete',
  ];

  // Form data for editing
  editForm: FormGroup;
  editingRow: todo | undefined;
  constructor(
    private route: ActivatedRoute,
    private listToDo: GetToDosService,
    private formBuilder: FormBuilder,
    private addToDo: AddToDoService,
    private deleteToDo: DeleteToDoService,
    private editToDo: EdiToDoService
  ) {
    this.editForm = this.formBuilder.group({
      task: ['', Validators.required],
      userId: ['', Validators.required],
      completed: [false],
    });
  }
  private tasksSubject = new BehaviorSubject<todo[]>([]);
  tasks$ = this.tasksSubject.asObservable();
  ngOnInit(): void {
    this.userName = this.route.snapshot.queryParamMap.get('userName')!;
    this.password = this.route.snapshot.queryParamMap.get('password')!;
    console.log(this.password, this.userName, 'final');
    this.listToDo.getToDos(this.userName, this.password).subscribe(
      (data: todo[]) => {
        this.dataSource.data = data;
        const todos = data;
        console.log(todos);
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        console.log('complete');
      }
    );
    this.tasks$.subscribe((tasks: todo[]) => {
      this.dataSource.data = tasks;
    });

    this.listToDo.getToDos(this.userName, this.password).subscribe(
      (data: todo[]) => {
        this.tasksSubject.next(data); // Emit the initial data
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('complete');
      }
    );
  }
  //>>>>>>>>>>>>>>>>>>>>>>>>
  myFormControl: FormControl = new FormControl('');

  isFormOpened = false;

  openForm() {
    this.isFormOpened = true;
  }

  addTask() {
    let newTaskTitle: string | null = this.myFormControl.value;
    console.log(newTaskTitle);
    const newTask: any = {
      task: newTaskTitle,
    };
    if (this.myFormControl.valid) {
      // Add your task handling logic here
      this.addToDo.addToDo(this.userName, this.password, newTask).subscribe(
        (data) => console.log(data),
        (err) => console.log(err),
        () => console.log('success')
      );
      console.log('Task added:', newTaskTitle);
      // Clear the input field
      newTaskTitle = '';
    }
    // this.dataSource.data.push(newTask);
    // this.dataSource._updateChangeSubscription();

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    this.listToDo.getToDos(this.userName, this.password).subscribe(
      (data: todo[]) => {
        this.dataSource.data = data;
        const todos = data;
        console.log(todos);
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        console.log('complete');
      }
    );
  }

  deleteTask(row: todo) {
    const id = row.id;
    const index = this.dataSource.data.indexOf(row);
    console.log(this.dataSource.data);
    console.log(id);
    this.deleteToDo.deleteToDo(this.userName, this.password, id).subscribe(
      (data) => {
        // console.log('delete');
        console.log(data);
        const index = this.dataSource.data.indexOf(row);
        if (index > -1) {
          // Update the "completed" status of the task in the data source
          this.dataSource.data.splice(index, 1);
          this.tasksSubject.next([...this.dataSource.data]); // Emit the updated tasks array

          // Notify the table that the data has changed
          this.dataSource._updateChangeSubscription();
        }
      },
      (error) => console.log(error),
      () => console.log('complete deltet ')
    );
    if (index > -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription();
    }
  }

  toggleEdit(row: todo) {
    this.editTask(row);
  }

  editTask(row: todo) {
    console.log(this.userName + ' editing', this.password);

    const token = btoa(this.userName + ':' + this.password);
    console.log(token), console.log(row.id);
    // Send a request to the backend to toggle the "completed" status for the given task ID
    this.editToDo.editToDo(this.userName, this.password, row.id).subscribe(
      (updatedTask: todo) => {
        // When the request is successful, the backend returns the updated task with the new "completed" status
        console.log('Task updated');
        // Find the index of the task in the data source array
        const index = this.dataSource.data.indexOf(row);
        if (index > -1) {
          // Update the "completed" status of the task in the data source
          this.dataSource.data[index].completed = updatedTask.completed;
          this.tasksSubject.next([...this.dataSource.data]); // Emit the updated tasks array

          // Notify the table that the data has changed
          this.dataSource._updateChangeSubscription();
        }
      },
      (error: any) => {
        // If there's an error with the request, log the error
        console.log(error);
      }
    );
  }
}
