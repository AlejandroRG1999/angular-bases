import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false,
})
export class ListComponent {

  @Input()
  characterList: Character[] = [];

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( id: string ): void{
      this.onDelete.emit(id);
  }

}
