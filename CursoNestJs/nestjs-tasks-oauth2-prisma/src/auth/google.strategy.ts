import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(config: ConfigService) {
    super({
      clientID: config.get<string>('GOOGLE_CLIENT_ID'),
      clientSecret: config.get<string>('GOOGLE_CLIENT_SECRET'),
      callbackURL: config.get<string>('GOOGLE_CALLBACK_URL'),
      scope: ['profile', 'email'],
    });
  }
  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) {
    const { id, emails, displayName, photos } = profile;
    const user = {
      provider: 'google',
      providerId: id,
      email: emails?.[0]?.value,
      name: displayName,
      picture: photos?.[0]?.value,
    };
    done(null, user);
  }
}
