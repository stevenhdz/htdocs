import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

// 👇 importa Swagger en el test
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

describe('E2E Tasks', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

    // 👇 monta Swagger igual que en main.ts
    const config = new DocumentBuilder()
      .setTitle('Tasks API (E2E)')
      .setVersion('test')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document, {
      swaggerOptions: { persistAuthorization: true },
    });

    await app.init();
  });

  it('GET /docs reachable', async () => {
    const res = await request(app.getHttpServer()).get('/docs');
    expect([200, 301, 302]).toContain(res.status);
  });

  afterAll(async () => {
    await app.close();
  });
});
