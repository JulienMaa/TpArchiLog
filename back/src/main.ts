import { NestFactory } from '@nestjs/core';
import { ClipsModule } from './clips.module';

async function bootstrap() {
    const app = await NestFactory.create(ClipsModule);
    app.enableCors();
    await app.listen(3000);
}

bootstrap();
