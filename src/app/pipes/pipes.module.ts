import { NgModule } from '@angular/core';
import { ImgPipe } from './img-pipe.pipe';
import { FilesPipe } from './files.pipe';


@NgModule({
  imports: [],
  declarations: [ImgPipe, FilesPipe],
  exports: [ImgPipe, FilesPipe]
})
export class PipesModule {}

