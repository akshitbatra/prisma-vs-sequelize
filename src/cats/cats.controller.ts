import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';

@Controller()
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getHello(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
