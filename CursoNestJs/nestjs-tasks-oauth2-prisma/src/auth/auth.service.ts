import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService, private prisma: PrismaService) {}

  async validateOrCreateOAuthUser(profile: {
    provider: string; providerId: string; email: string; name?: string; picture?: string;
  }) {
    let user = await this.prisma.user.findUnique({ where: { providerId: profile.providerId } });
    if (!user) {
      user = await this.prisma.user.upsert({
        where: { email: profile.email },
        update: { providerId: profile.providerId, provider: profile.provider, name: profile.name, picture: profile.picture },
        create: {
          email: profile.email,
          name: profile.name,
          picture: profile.picture,
          provider: profile.provider,
          providerId: profile.providerId
        }
      });
    }
    return user;
  }

  signToken(user: { id: string; email: string }) {
    const payload = { sub: user.id, email: user.email };
    return this.jwt.sign(payload);
  }
}
