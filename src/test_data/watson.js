const finished = {
  created: '2018-11-30T19:16:06.067Z',
  id: '62afd3d4-f4d4-11e8-a794-ebd6aa722514',
  updated: '2018-11-30T19:16:19.837Z',
  results: [
    { 
      result_index: 0,
      results: [ 
        { 
          final: true,
          alternatives: [ 
            { 
              transcript: 'de lá ',
              confidence: 0.886
            }
          ]
        },
        {
          final: true,
          alternatives: [
            {
              transcript: 'com ',
              confidence: 1
            }
          ]
        },
        {
          final: true,
          alternatives: [
            {
              transcript: 'com o ',
              confidence: 1
            }
          ]
        }
      ]
    }
  ],
  status: 'completed'
}

const processing = {
  created: '2018-11-30T18:55:47.043Z',
  id: '8c177f18-f4d1-11e8-a791-232c8322945d',
  updated: '2018-11-30T18:55:47.057Z',
  status: 'processing'
}

export default {
  finished,
  processing
}