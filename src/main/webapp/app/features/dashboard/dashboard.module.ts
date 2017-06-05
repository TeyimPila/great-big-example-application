import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { DashboardPage } from './dashboard.page';
import { DashboardRouting } from './dashboard.routing';
import { GreatBigExampleApplicationSharedModule } from '../../shared';
import { PopularApp } from './popular-app/popular-app.component';
import { PieChart } from './pie-chart/pie-chart.component';
import { TrafficChart } from './traffic-chart/traffic-chart.component';
import { UsersMap } from './users-map/users-map.component';
import { LineChart } from './line-chart/line-chart.component';
import { Feed } from './feed/feed.component';
import { Todo } from './todo/todo.component';
import { Calendar } from './calendar/calendar.component';
import { CalendarService } from './calendar/calendar.service';
import { FeedService } from './feed/feed.service';
import { LineChartService } from './line-chart/line-chart.service';
import { PieChartService } from './pie-chart/pie-chart.service';
import { TodoService } from './todo/todo.service';
import { TrafficChartService } from './traffic-chart/traffic-chart.service';
import { UsersMapService } from './users-map/users-map.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        GreatBigExampleApplicationSharedModule,
        NgaModule,
        DashboardRouting
    ],
    declarations: [
        PopularApp,
        PieChart,
        TrafficChart,
        UsersMap,
        LineChart,
        Feed,
        Todo,
        Calendar,
        DashboardPage
    ],
    providers: [
        CalendarService,
        FeedService,
        LineChartService,
        PieChartService,
        TodoService,
        TrafficChartService,
        UsersMapService
    ]
})
export class DashboardModule { }
