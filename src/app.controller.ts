import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createBook(@Res() response: any, @Body() book: any) {
    console.log('Book: ', book);
  }

  @Get()
  async fetchAll(@Res() response: any) {}

  @Get('/:id')
  async findById(@Res() response: any, @Param('id') id: any) {
    console.log('Fetch Book for Id: ', id);
  }
}
