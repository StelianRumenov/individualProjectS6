// import { registerAs } from '@nestjs/config';
// import env from './env';

// export default registerAs('auth', () => ({
//   bcryptRounds: env('AUTH_BCRYPT_ROUNDS', 12),
//   bcryptUrl: env('AUTH_BCRYPT_URL'),
//   confirmAccount: env('AUTH_CONFIRM_ACCOUNT', true),
//   cookieMaxAge: env('AUTH_COOKIE_MAX_AGE', 1000 * 60 * 60 * 24 * 30),
//   cookieName: env('AUTH_COOKIE_NAME', 'jwt'),
//   csrfEnabled: env('AUTH_CSRF_ENABLED', true),
//   impersonateEnabled: env('AUTH_IMPERSONATE_ENABLED', true),
//   inviteExpiration: env('AUTH_INVITE_EXPIRATION', 1000 * 60 * 60 * 24 * 14),
//   passwordResetExpiration: env(
//     'AUTH_PASSWORD_RESET_EXPIRATION',
//     1000 * 60 * 60 * 3,
//   ),
//   passwordStrength: env('AUTH_PASSWORD_STRENGTH', 4),
//   registerEnabled: env('AUTH_REGISTER_ENABLED', true),
//   secret: env('AUTH_SECRET', 'super-secret'),
// }));
