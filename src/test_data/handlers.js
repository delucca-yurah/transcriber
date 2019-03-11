const watsonReturn = {
  created: '2018-11-30T19:16:06.067Z',
  id: '62afd3d4-f4d4-11e8-a794-ebd6aa722514',
  updated: '2018-11-30T19:16:19.837Z',
  results:
  [
    {
      result_index: 0,
      results: [
        {
          final: true,
          alternatives: [
            { transcript: 'Morty Smith', confidence: 0.886 }
          ]
        },
        {
          final: true,
          alternatives: [
            { transcript: ' Alien Morty', confidence: 1 }
          ]
        },
        {
          final: true,
          alternatives: [
            { transcript: 'Rick Sanchez ', confidence: 1 }
          ]
        }
      ]
    }
  ],
  status: 'completed'
}

const expectedTranscription = 'Morty Smith Alien Morty Rick Sanchez'

export default {
  watsonReturn,
  expectedTranscription
}