import { forwardRef, Inject, Logger } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CommentaryService } from 'src/commentary/commentary.service';
import { CreateLessonProgressDto } from 'src/lesson-progress/dto/create-lesson-progress.dto';
import { LessonProgress } from 'src/lesson-progress/entities/lesson-progress.entity';
import { LessonProgressService } from 'src/lesson-progress/lesson-progress.service';

@WebSocketGateway({ cors: true })
export class LessonGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private logger = new Logger();

  @WebSocketServer() server: Server;

  constructor(
    @Inject(forwardRef(() => LessonProgressService))
    private readonly lessonProgressService: LessonProgressService,
    @Inject(forwardRef(() => CommentaryService))
    private readonly commentaryService: CommentaryService,
  ) {
    this.logger.debug('Servidor socket inicializado');
  }

  handleConnection(client: any, ...args: any[]) {
    this.logger.debug(`Cliente conectado: ${client.id}`);
  }

  handleDisconnect(client: any) {
    this.logger.debug(`Cliente desconectado: ${client.id}`);
  }

  @SubscribeMessage('commentaries')
  async handleCommentaries(client: Socket, @MessageBody() data: any) {
    const { lesson_id } = data;
    const commentary = await this.commentaryService.findAllByLesson(lesson_id);
    this.server.emit('list-commentaries-by-lesson', commentary);
  }

  @SubscribeMessage('lesson-progress')
  async handleMessage(
    client: Socket,
    @MessageBody() data: CreateLessonProgressDto,
  ) {
    this.lessonProgressService.createOrUpdate(data);
    const dt = await this.lessonProgressService.findOneByLessonAndUser(
      data.lesson_id,
      data.user_id,
    );
    console.log(dt);

    this.server.emit(
      'lesson-progress',
      `Progresso: ${dt.percentage_completed}`,
    );
  }
}
