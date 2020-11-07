import { Sequelize } from "sequelize/types";

export interface ResultDTO {
    id: number,
    n: number,
    m: number,
    k: number,
    centers: string,
    roads: string,
    total: string,
    createdAt: Date,
    updatedAt: Date,
}

export default (sequelize: Sequelize, dataTypes) => {
    return sequelize.define('results', {
        n: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        m: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        k: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        centers: {
            type: dataTypes.STRING,
            allowNull: false
        },
        roads: {
            type: dataTypes.STRING,
            allowNull: false
        },
        total: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
    },{
        freezeTableName: true
    });
}