import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Article } from "./article";

@Entity("tags")
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToMany((type) => Article)
  @JoinTable()
  articles: Article[];

  @UpdateDateColumn()
  updatedTime: Date;
}
