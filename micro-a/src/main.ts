import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001,()=>{
    console.log("==================RUNNNIG ON PORT 3001 FOR MICRO ----A----");
  });
}
bootstrap();
