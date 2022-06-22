import {
  BelongsTo,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './user.model';
@Table({
  tableName: 'support_messages',
  timestamps: true,
  // created_at and updated_at will be created automatically
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  underscored: true,
})
export class SupportMessage extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  })
  user_id: string;

  @Column
  message: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Column
  name: string;

  @BelongsTo(() => User, {
    foreignKey: 'user_id',
    targetKey: 'id',
    onDelete: 'CASCADE',
  })
  user: User;
}
