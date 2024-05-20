import {defineField, defineType} from 'sanity'

export const contact = defineType({
  name: 'contact',
  title: 'Contact Info',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Coaching Logo',
      type: 'image',
    }),
    defineField({
      name: 'tagline',
      title: 'Coaching Tagline',
      type: 'string',
    }),
    defineField({
      name: 'mobile_number',
      title: 'Mobile Number',
      type: 'number',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'social_link',
      title: 'Social Link',
      type: 'array',
      of: [{type: 'url'}],
    }),
  ],
})
