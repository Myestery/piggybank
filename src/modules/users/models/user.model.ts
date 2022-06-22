import {
  BelongsTo,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true,
  // created_at and updated_at will be created automatically
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  underscored: true,
  indexes: [
    {
      unique: true,
      fields: ['email'],
    },
  ],
})
export class User extends Model {
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
      model: 'businesses',
      key: 'id',
    },
  })
  business_id: string;

  @Column
  firstname: string;

  @Column
  lastname: string;

  @Column
  email: string;

  @Column({
    type: DataType.DATE,
  })
  email_verified_at: Date;

  @Column
  password: string;

  @Column
  phone: string;


  @Column({
    allowNull: false,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  verification_code?: string;

  @Column({
    allowNull: false,
    type: DataType.DATE,
  })
  verification_code_expires?: Date;

  @Column({
    allowNull: false,
    defaultValue: false,
  })
  verified?: boolean;

  sayHello(): string {
    return `Hello ${this.firstname} ${this.lastname}`;
  }

}
