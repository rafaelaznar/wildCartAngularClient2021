import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-shared-search-unrouted',
  templateUrl: './shared-search-unrouted.component.html',
  styleUrls: ['./shared-search-unrouted.component.css']
})

export class SharedSearchUnroutedComponent implements OnInit {

  @Input() strFilter: string = '';
  @Input() strTitlePlural: string = '';
  @Output() eeFilter = new EventEmitter<string>();
  //
  subjectFilter = new Subject();

  constructor(
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() {
    this.subjectFilter.pipe(debounceTime(1000)).subscribe({
      next: () => {
        this.eeFilter.emit(this.strFilter);
      }
    });
  }

  onKeyUpFilter(_event: KeyboardEvent): void {
    this.subjectFilter.next();
  }

  resetFilter(): void {
    this.strFilter = '';
    this.eeFilter.emit(this.strFilter);
  }

}
