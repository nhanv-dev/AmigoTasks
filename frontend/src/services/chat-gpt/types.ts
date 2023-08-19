export type Message = {
    index?: number;
    content: string;
    role: string;
    finishReason?: string;
}