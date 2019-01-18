import { NgModule } from '@angular/core';
import { ImgPipe } from './img-pipe.pipe';
import { FilesPipe } from './files.pipe';
import { TimePipe } from './time.pipe';



@NgModule({
  imports: [],
  declarations: [ImgPipe, FilesPipe,TimePipe],
  exports: [ImgPipe, FilesPipe,TimePipe]
})
export class PipesModule {}

