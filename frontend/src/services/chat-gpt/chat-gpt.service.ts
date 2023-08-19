import { Configuration, OpenAIApi } from "openai";
import { Message } from "./types";



class ChatGptService {
    private openAi: OpenAIApi;
    private config: Configuration;

    constructor() {
        this.config = new Configuration({
            organization: "org-ePREdSDMlGnwz7p0CHBhN77k",
            apiKey: "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",
        })
        this.openAi = new OpenAIApi(this.config)
        delete this.config.baseOptions.headers['User-Agent'];

    }

    public async sendMessage(content: string) {
        const response = await this.openAi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content }],
        });
        const messages: Message[] = response.data.choices.map(choice => ({
            index: choice.index,
            content: choice.message?.content || '',
            role: choice.message?.role || 'assistant',
            finishReason: choice.finish_reason || '',
        }))

        return messages;
    }
}

const chatGptService = new ChatGptService();
export default chatGptService;
