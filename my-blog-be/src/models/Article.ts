import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Tag } from "./Tag";

@Entity("articles")
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  brief: string;

  @Column()
  content: string;

  @ManyToMany((type) => Tag)
  @JoinTable()
  tags: Tag[];

  @UpdateDateColumn()
  updatedTime: Date;
}
