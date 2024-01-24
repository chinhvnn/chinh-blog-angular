import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-left-sidebar',
  imports: [RouterLink],
  templateUrl: './leftSidebar.component.html',
  standalone: true,
})
export default class LeftSidebar {
  constructor() {}
}
