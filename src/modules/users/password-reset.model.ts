import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'password_resets',
  timestamps: true,
  // created_at and updated_at will be created automatically
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class PasswordReset extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.UUID,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id',
    },
  })
  user_id: string;

  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  token: string;

  @Column({
    type: DataType.DATE,
  })
  expires: Date;
}
