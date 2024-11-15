import { DataTypes, Model } from 'sequelize';
import db from '../config/db';

export class User extends Model {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public password!: string;
    public isverified!: boolean;
    public verificationcode!: string | null;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isverified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        verificationcode: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize: db,
        tableName: 'users',
    }
);

export default User;