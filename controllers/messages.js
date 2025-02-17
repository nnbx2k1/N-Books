import { Message } from '../db/models/messages.js'
import { validateMessage } from './validation.js'

export async function addMessage(msg) {
    try {
        const v = validateMessage(msg);
        if (!v.isValid) {
            console.error("Validation failed:", v.errors);
            return { success: false, errors: v.errors };
        }
        const newMessage = await Message.create(msg);
        return true
        
    } catch (error) {
        console.error("Error inserting message:", error);
        return false
    }
}