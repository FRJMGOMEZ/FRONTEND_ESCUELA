import { NgModule } from '@angular/core';
import { ImgPipe } from './img-pipe.pipe';
import { FilesPipe } from './files.pipe';
import { TimeConversorPipe } from './time.conversor';
import { TimeConversor1Pipe } from './time.conversor1';
import { TimeConversorPipe2 } from './time.conversor2.pipe';
import { FrontImgPipe } from './front-img.pipe';


@NgModule({
  imports: [],
  declarations: [ImgPipe, FilesPipe, TimeConversorPipe, TimeConversor1Pipe, TimeConversorPipe2, FrontImgPipe ],
  exports: [ImgPipe, FilesPipe , TimeConversorPipe,TimeConversor1Pipe,TimeConversorPipe2,FrontImgPipe ]
})
export class PipesModule {}

