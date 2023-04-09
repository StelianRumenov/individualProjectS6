"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const auth_module_1 = require("./Authentication/auth.module");
const auth_service_1 = require("./Authentication/auth.service");
const user_module_1 = require("./Entities/User/user.module");
const local_strategy_1 = require("./Strategy/local.strategy");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./Entities/User/user.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 8889,
                username: 'root',
                password: 'root',
                database: 'individual',
                entities: [user_entity_1.UserEntity],
                synchronize: true,
                ssl: false,
                extra: {
                    ssl: {
                        rejectUnauthorized: false,
                    },
                },
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy],
        exports: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map