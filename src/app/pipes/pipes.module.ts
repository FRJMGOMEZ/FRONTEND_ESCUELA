import { NgModule } from '@angular/core';
import { ImgPipe } from './img-pipe.pipe';
import { FilesPipe } from './files.pipe';
import { TimeConversorPipe } from './time.conversor';
import { TimeConversor1Pipe } from './time.conversor1';
import { TimeConversorPipe2 } from './time.conversor2.pipe';


@NgModule({
  imports: [],
  declarations: [ImgPipe, FilesPipe, TimeConversorPipe, TimeConversor1Pipe, TimeConversorPipe2 ],
  exports: [ImgPipe, FilesPipe , TimeConversorPipe,TimeConversor1Pipe,TimeConversorPipe2 ]
})
export class PipesModule {}

