import watson, { checkJob, waitForJob, getJob } from './watson'
import testData from '../test_data/watson'

test('Should ask to Watson to get a job', async () => {
  const stt = { createJob: jest.fn((id, cb) => cb(null, testData.finished)) }
  const result = await getJob(stt, null)

  return expect(result).toEqual(testData.finished.id)
})

test('Should reject if got an error', async () => {
  const stt = { createJob: jest.fn((id, cb) => cb('Error', null)) }
  const result = await getJob(stt, null).catch(e => e)

  return expect(result).toEqual('Error')
})

test('Should check if the job is complete', async () => {
  const stt = { checkJob: jest.fn((id, cb) => cb(null, testData.finished)) }
  const result = await checkJob(stt, null)

  return expect(result).toEqual(testData.finished)
})

test('Should reject the getter if got an error', async () => {
  const stt = { checkJob: jest.fn((id, cb) => cb('Error', null)) }
  const result = await checkJob(stt, null).catch(e => e)

  return expect(result).toEqual('Error')
})