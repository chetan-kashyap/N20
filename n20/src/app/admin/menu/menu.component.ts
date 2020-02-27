import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  showCreate: boolean = false;
  showUpdate: boolean = false;
  showDelete: boolean = false;
  createForm = this.formBuilder.group(
    {
      title: ['', Validators.required ],
      description: ['', Validators.required ],
      priority: ['', Validators.required ],
      image: null,
      source: ['', Validators.required ],
    }
  );
  updateForm = this.formBuilder.group(
    {
      title: ['', Validators.required ],
      description: ['', Validators.required ],
      priority: [1, Validators.required ],
      image: null,
      source: ['', Validators.required ],
    }
  );
  constructor( 
    private formBuilder: FormBuilder
    ) {}

  ngOnInit() {
  }
  
  toggleCreateView(): void {
    this.showCreate = !this.showCreate;
    this.showUpdate = false;
    this.showDelete = false;
  }
  toggleUpdateView(): void {
    this.showUpdate = !this.showUpdate;
    this.showCreate = false;
    this.showDelete = false;
  }
  toggleDeleteView(): void {
    this.showDelete = !this.showDelete;
    this.showCreate = false;
    this.showUpdate = false;
  }

  onClickCreate() {
    alert(JSON.stringify(this.createForm.value));
  }

}
