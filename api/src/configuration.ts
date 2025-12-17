import type {
  ILogger,
  IMidwayApplication,
  MidwayWebRouterService,
} from '@midwayjs/core'
import * as cool from '@cool-midway/core'
import * as task from '@cool-midway/task'
import {
  App,
  Configuration,
  Inject,
} from '@midwayjs/core'
import * as cron from '@midwayjs/cron'
import * as info from '@midwayjs/info'
import * as koa from '@midwayjs/koa'
import * as staticFile from '@midwayjs/static-file'
import * as orm from '@midwayjs/typeorm'
import * as upload from '@midwayjs/upload'
// import * as crossDomain from '@midwayjs/cross-domain';
import * as validate from '@midwayjs/validate'
import * as DefaultConfig from './config/config.default'
import * as LocalConfig from './config/config.local'
import * as ProdConfig from './config/config.prod'
// import * as rpc from '@cool-midway/rpc';

@Configuration({
  imports: [
    // https://koajs.com/
    koa,
    // 是否开启跨域(注：顺序不能乱放！！！) http://www.midwayjs.org/docs/extensions/cross_domain
    // crossDomain,
    // 静态文件托管 https://midwayjs.org/docs/extensions/static_file
    staticFile,
    // orm https://midwayjs.org/docs/extensions/orm
    orm,
    // 参数验证 https://midwayjs.org/docs/extensions/validate
    validate,
    // 本地任务 http://www.midwayjs.org/docs/extensions/cron
    cron,
    // 文件上传
    upload,
    // cool-admin 官方组件 https://cool-js.com
    cool,
    // rpc 微服务 远程调用
    // rpc,
    // 任务与队列
    task,
    {
      component: info,
      enabledEnvironment: ['local', 'prod'],
    },
  ],
  importConfigs: [
    {
      default: DefaultConfig,
      local: LocalConfig,
      prod: ProdConfig,
    },
  ],
})
export class MainConfiguration {
  @App()
  app: IMidwayApplication

  @Inject()
  webRouterService: MidwayWebRouterService

  @Inject()
  logger: ILogger

  async onReady() {}
}
