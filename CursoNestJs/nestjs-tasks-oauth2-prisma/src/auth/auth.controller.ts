import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { TokenResponseDto } from './dto/token-response.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  @ApiOperation({ summary: 'Redirige a Google OAuth 2.0' })
  googleAuth() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  @ApiOkResponse({ type: TokenResponseDto })
  async googleCallback(@Req() req): Promise<TokenResponseDto> {
    const user = await this.auth.validateOrCreateOAuthUser(req.user);
    const accessToken = this.auth.signToken({ id: user.id, email: user.email });
    return { accessToken, tokenType: 'Bearer' };
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT')
  me(@Req() req) { return req.user; }
}
