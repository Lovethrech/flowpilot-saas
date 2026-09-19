import{updateTask}from'../../utils/store.js';export default defineEventHandler(async event=>({task:await updateTask(getRouterParam(event,'id'),await readBody(event))}))
