import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTopicDto } from './dtos/create-topic.dto';
import { TopicService } from './services/topic.service';


@Controller("topics")
export class TopicController {
    constructor(private readonly topicService: TopicService) { }

    @Get()
    public findAll() {
        return this.topicService.findAll();
    }

    @Get(":id")
    public findOne(@Param("id") id: string) {
        return this.topicService.findOne(id);
    }

    @Post()
    create(@Body() createTopicDto: CreateTopicDto) {
        return this.topicService.create(createTopicDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateTopicDto: any) {
        return this.topicService.update(id, updateTopicDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.topicService.remove(id);
    }
}