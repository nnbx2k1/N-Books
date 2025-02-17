
export function validateMessage(data) {
    const errors = [];
    if (!data.name || typeof data.name !== "string") {
        errors.push("Name is required and must be a string.");
    }

    if (!data.email || typeof data.email !== "string" || !/^\S+@\S+\.\S+$/.test(data.email)) {
        errors.push("Email is required and must be a valid email address.");
    }

    if (data.subject && typeof data.subject !== "string") {
        errors.push("Subject must be a string.");
    }

    if (data.message && typeof data.message !== "string") {
        errors.push("Message must be a string.");
    }

    return {
        isValid: errors.length === 0,
        errors: errors
    };
}