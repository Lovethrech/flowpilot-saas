import{listTasks}from'../utils/store.js';export default defineEventHandler(async()=>({tasks:await listTasks()}))
