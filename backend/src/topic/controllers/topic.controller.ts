import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateTopicDto } from '../dtos/create-topic.dto';
import { TopicService } from '../services/topic.service';

@Controller('topics')
export class TopicController {
  constructor(private readonly topicService: TopicService) { }

  @Post()
  create(@Body() createTopicDto: CreateTopicDto) {
    return this.topicService.createTopic(createTopicDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTopicDto: any) {
    return this.topicService.update(id, updateTopicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.topicService.remove(id);
  }

  @Get()
  findAll(@Query() queryParams: any) {
    return this.topicService.findAllWithoutContent(queryParams);
  }

  @Get(":id/children")
  findByParent(@Param("id") parent: string) {
    return this.topicService.findByParent(parent);
  }

  @Get("children")
  findByRoot() {
    return this.topicService.findByParent(null);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.topicService.findDetailTopic(id);
  }
}
