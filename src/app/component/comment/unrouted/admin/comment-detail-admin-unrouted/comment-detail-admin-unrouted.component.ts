import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/model/comment-interfaces';
import { IProducto } from 'src/app/model/producto-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-comment-detail-admin-unrouted',
  templateUrl: './comment-detail-admin-unrouted.component.html',
  styleUrls: ['./comment-detail-admin-unrouted.component.css']
})

export class CommentDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number = null;  

  oComment: IComment;
  
  constructor(
    private oProductoService: ProductoService,
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne = () => {
    this.oCommentService
      .getOne(this.id)
      .subscribe((oData: IProducto) => {
        this.oComment = oData;
      });
  };

}
