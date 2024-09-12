export default defineEventHandler(async(event)=>{

    const requestBody = await readBody(event);
    
    const db = useDatabase("myDatabase");

    const result = await db.sql`INSERT INTO users (Name,Email) VALUES (${requestBody.name},${requestBody.email})`;
    return result;
});