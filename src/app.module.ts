import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './Authentication/auth.controller';
import { AuthModule } from './Authentication/auth.module';
import { AuthService } from './Authentication/auth.service';
import { UserController } from './Entities/User/user.controller';
import { UserModule } from './Entities/User/user.module';
import { UserService } from './Entities/User/user.service';
import { LocalStrategy } from './Strategy/local.strategy';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { configArray } from './Config/index';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { entities } from './Entities';
import { UserEntity } from './Entities/User/user.entity';

@Module({
  imports: [
    UserModule,
    // PassportModule,
    AuthModule,
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   ignoreEnvFile: true,
    //   load: configArray,
    // }),
    // TypeOrmModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => ({
    //     ...config.get('database'),
    //     subscribers: [],
    //     autoLoadEntities: true,
    //   }),
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8889,
      username: 'root',
      password: 'root',
      database: 'individual',
      entities: [UserEntity],
      synchronize: true,
      ssl: false,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    // TypeOrmModule.forFeature(entities),
  ],
  controllers: [AppController],
  providers: [AuthService, LocalStrategy],
  exports: [],
})
export class AppModule {}
