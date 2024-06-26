/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FolderService } from "../folder.service";
import { FolderCreateInput } from "./FolderCreateInput";
import { Folder } from "./Folder";
import { FolderFindManyArgs } from "./FolderFindManyArgs";
import { FolderWhereUniqueInput } from "./FolderWhereUniqueInput";
import { FolderUpdateInput } from "./FolderUpdateInput";

export class FolderControllerBase {
  constructor(protected readonly service: FolderService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Folder })
  async createFolder(@common.Body() data: FolderCreateInput): Promise<Folder> {
    return await this.service.createFolder({
      data: data,
      select: {
        id: true,
        name: true,
        subfolders: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Folder] })
  @ApiNestedQuery(FolderFindManyArgs)
  async folders(@common.Req() request: Request): Promise<Folder[]> {
    const args = plainToClass(FolderFindManyArgs, request.query);
    return this.service.folders({
      ...args,
      select: {
        id: true,
        name: true,
        subfolders: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Folder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async folder(
    @common.Param() params: FolderWhereUniqueInput
  ): Promise<Folder | null> {
    const result = await this.service.folder({
      where: params,
      select: {
        id: true,
        name: true,
        subfolders: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Folder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFolder(
    @common.Param() params: FolderWhereUniqueInput,
    @common.Body() data: FolderUpdateInput
  ): Promise<Folder | null> {
    try {
      return await this.service.updateFolder({
        where: params,
        data: data,
        select: {
          id: true,
          name: true,
          subfolders: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Folder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFolder(
    @common.Param() params: FolderWhereUniqueInput
  ): Promise<Folder | null> {
    try {
      return await this.service.deleteFolder({
        where: params,
        select: {
          id: true,
          name: true,
          subfolders: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}