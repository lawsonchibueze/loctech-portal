export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'buttonText',
      title: 'ButtonText',
      type: 'string',
    },

    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },

    {
      name: 'introText',
      title: 'IntroText',
      type: 'string',
    },
    {
      name: 'largeText',
      title: 'LargeText',
      type: 'string',
    },
    {
      name: 'largeText2',
      title: 'LargeText2',
      type: 'string',
    },
  ],
}
