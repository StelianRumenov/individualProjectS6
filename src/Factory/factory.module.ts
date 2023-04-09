import { forwardRef, Module } from '@nestjs/common';
import { UserModule } from 'src/Entities/User/user.module';
import { ServiceFactory } from './serviceFactory.service';

@Module({
  imports: [forwardRef(() => UserModule)],
  providers: [ServiceFactory],
  exports: [ServiceFactory],
})
export class FactoryModule {}
