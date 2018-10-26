import { Mongo } from 'meteor/mongo'
 
export const Tasks = new Mongo.Collection('tasks')
export const Views = new Mongo.Collection('views')