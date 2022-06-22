import {
  BelongsTo,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

import { User } from './user.model';

@Table({
  tableName: 'user_security_questions',
  timestamps: true,
  // created_at and updated_at will be created automatically
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  underscored: true,
})
export class UserSecurityQuestion extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.UUID,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id',
    },
  })
  user_id: string;

  @Column
  question: string;

  @Column
  answer: string;

  @BelongsTo(() => User, {
    foreignKey: 'user_id',
    targetKey: 'id',
    onDelete: 'CASCADE',
  })
  user: User;
}
