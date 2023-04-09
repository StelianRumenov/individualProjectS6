import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';

//used for REST calls
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
