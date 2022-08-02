import generateApiKey from 'generate-api-key';

export class keyGenerator {
    generateKey(): String {
        return String(generateApiKey({}));
    }
}
