import { keyGenerator } from '../../utils/keyGenerator'
jest.mock('generate-Api-Key')
import generateApiKey from 'generate-api-key';
const mockApiKey = generateApiKey as jest.MockedFunction<typeof String>;

describe('Api Key Tests', () => {
    it('should pass if it generates an api key that is 15 characters', () => {
        mockApiKey.mockReturnValue("1234567890asdfg")
        const apiKeyGenerator = new keyGenerator();
        const key = apiKeyGenerator.generateKey();
        expect(key).toBe("1234567890asdfg");
        expect(key.length).toEqual(15);
    })
    it('should pass if the api key is not 15 characters', () => {
        mockApiKey.mockReturnValue("1234567890")
        const apiKeyGenerator = new keyGenerator();
        const key = apiKeyGenerator.generateKey();
        expect(key).toBe("1234567890");
        expect(key.length).toEqual(10);
    })
})