"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3001, () => {
        console.log("==================RUNNNIG ON PORT 3001 FOR MICRO ----A----");
    });
}
bootstrap();
//# sourceMappingURL=main.js.map