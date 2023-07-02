import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { MetadataService } from 'src/app/service/metadata.service';
import { Constants } from 'src/app/model/constants';
import { IResult } from 'src/app/model/model-interfaces';
import { SessionService } from 'src/app/service/session.service';
import { FormBuilder, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { IComment2Send } from 'src/app/model/comment-interfaces';
import { CommentService } from 'src/app/service/comment.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-comment-new-user-unrouted',
  templateUrl: './comment-new-user-unrouted.component.html',
  styleUrls: ['./comment-new-user-unrouted.component.css']
})

export class CommentNewUserUnroutedComponent implements OnInit {

  @Input() id_producto: number = null;
  @Output() msg = new EventEmitter<any>();

  strProfile: string = Constants.PROFILES.user;
  strEntity: string = Constants.ENTITIES.comment;
  strOperation: string = Constants.OPERATIONS.new;
  oResult: IResult = null;
  oComment2Send: IComment2Send = null;

  get f() { return this.commentForm.controls; }

  constructor(
    public oMetadataService: MetadataService,
    protected oSessionService: SessionService,
    private oFormBuilder: FormBuilder,
    private oCommentService: CommentService
  ) { }

  commentForm = new FormGroup({
    comment: new FormControl("")

  });

  ngOnInit(): void {
    this.commentForm = this.oFormBuilder.group({
      comment: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
    });

  }

  onSubmitComment(): void {
    if (this.commentForm) {
      if (this.commentForm.valid) {
        this.oComment2Send = {
          id: 0,
          comment: this.commentForm.value.comment,
          usuario: {
            id: 0
          },
          producto: {
            id: this.id_producto
          }

        };
        this.save();
      }
    }
  }

  save(): void {
    if (this.commentForm) {
      if (this.commentForm.valid) {

        this.oCommentService
          .newOne(this.oComment2Send)
          .subscribe((id) => {
            this.commentForm.reset();
            this.msg.emit({ id: id, error: null, strEntity: this.strEntity, strOperation: this.strOperation });
          }, (error: HttpErrorResponse) => {

            this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
          });

      }
    }
  }

  //popup

  eventsSubjectShowPopup: Subject<string> = new Subject<string>();

  openPopup(str: string): void {
    this.eventsSubjectShowPopup.next(str);
  }

  onClosePopup(): void {
    if (this.oResult && this.oResult.error == null) {

    }
  }

}
