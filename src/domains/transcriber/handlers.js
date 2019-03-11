import _ from 'lodash'
import { PassThrough } from 'stream'
import watson from '../../infrastructure/watson'
import request from 'request'

export const transcriptionProcesser = transcription =>
  _.chain(transcription)
   .map(r => r.alternatives[0].transcript.trim())
   .join(' ')
   .value()

const transcribe = async data => {
  const d = new PassThrough()
  const watsonTranscription = await watson.speechToText({
    audio: request(data.content).pipe(d),
    model: `${ data.language }_BroadbandModel`,
    timestamps: false
  }).catch(e => e)

  if(!watsonTranscription.results) throw Error()

  return transcriptionProcesser(watsonTranscription.results[0].results)
}

export default {
  transcribe
}
