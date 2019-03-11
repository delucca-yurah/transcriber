import util from 'util';
import SpeechToText from 'watson-developer-cloud/speech-to-text/v1'
import config from '../config'

export const checkJob = (stt, id) =>
  new Promise((resolve, reject) =>
    stt.checkJob({ id }, (err, job) =>
      (err)
        ? reject(err)
        : resolve(job)
    )
  )

export const waitForJob = (stt, id, attemptNumber = 1) => 
  Promise.resolve()
    .then(() =>
        (attemptNumber > 60)
          ? 300000
          : 5000 * attemptNumber)
    .then(setTimeout[util.promisify.custom])
    .then(() => checkJob(stt, id))
    .then(response =>
      (response.status === 'processing')
        ? Promise.reject('processing')
        : response
    )
    .catch((error) =>
      (error === 'processing')
      ? waitForJob(stt, id, ++attemptNumber)
      : Promise.reject(error)
    )

export const getJob = (stt, options) =>
  new Promise((resolve, reject) =>
    stt.createJob(options, (err, job) =>
      (err)
        ? reject(err)
        : resolve(job.id)
    )
  )

const speechToText = async options => {
  const stt = new SpeechToText(config.watson.credentials)
  const id = await getJob(stt, options)
  const result = await waitForJob(stt, id)

  return result
}

export default {
  speechToText
}