import { NgModule } from '@angular/core';
import { ImgPipe } from './img-pipe.pipe';
import { TimeConversorPipe } from './time.conversor';
import { TimeConversor1Pipe } from './time.conversor1';
import { TimeConversorPipe2 } from './time.conversor2.pipe';
import { FrontImgPipe } from './front-img.pipe';
import { DaysOfWeekPipe } from './days-of-week.pipe';
import { PdfPipe } from './pdf.pipe';
import {FilesPipe} from './files.pipe';


@NgModule({
  imports: [],
  declarations: [ImgPipe, TimeConversorPipe, TimeConversor1Pipe, TimeConversorPipe2, FrontImgPipe, DaysOfWeekPipe, PdfPipe,FilesPipe ],
  exports: [ImgPipe, TimeConversorPipe,TimeConversor1Pipe,TimeConversorPipe2,FrontImgPipe,FilesPipe ]
})
export class PipesModule {}

