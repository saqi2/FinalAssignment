import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UnauthorizedException,
    UseFilters,
    UseGuards,
    UseInterceptors,
    Patch
} from '@nestjs/common';
import { ClassBasedInterceptor } from 'src/interceptors/class-based.interceptor';
import { ExectionFilters } from 'src/filters/exception.filter';
import { JwtAuthGuard } from 'src/guards/auth.guard';
import { CustomLogger } from 'src/common/customer.logger';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    readonly logger = new CustomLogger(Controller.name);
    constructor(private readonly userService: UserService) { }

    @UseFilters(ExectionFilters)
    @UseInterceptors(new ClassBasedInterceptor())
    @UseGuards(JwtAuthGuard)
    @Post()
    createUser(@Body() createUserDto) {
        this.logger.log(`${this.createUser.name} invoked`);

        try {
            return this.userService.createUser(createUserDto);
        } catch (error) {
            throw new UnauthorizedException('Something went wrong');
        }
    }

    @UseFilters(ExectionFilters)
    @UseInterceptors(new ClassBasedInterceptor())
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getUserById(@Param('id') id: string) {
        this.logger.log(`${this.getUserById.name} invoked`);

        try {
            return this.userService.viewUser(+id);
        } catch (error) {
            throw new UnauthorizedException('Something went wrong');
        }

    }

    @UseFilters(ExectionFilters)
    @UseInterceptors(new ClassBasedInterceptor())
    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto) {
        this.logger.log(`${this.updateUser.name} invoked`);

        try {
            return this.userService.updateUser(+id, updateUserDto);
        } catch (error) {
            throw new UnauthorizedException('Something went wrong');
        }

    }
}