import handlers, { transcriptionProcesser } from './handlers'
import watson from '../../infrastructure/watson'
import testData from '../../test_data/handlers'

test('It should process the Watson transcription into a human readable transcription', () => {
  const result = transcriptionProcesser(testData.watsonReturn.results[0].results)

  return expect(result).toEqual(testData.expectedTranscription)
})

test('Should get the Watson transcription and pass it to the processer, then return it', async () => {
  watson.speechToText = () => Promise.resolve(testData.watsonReturn)

  const result = await handlers.transcribe({ content: 'https://kolab.app' })

  return expect(result).toEqual(testData.expectedTranscription)
})